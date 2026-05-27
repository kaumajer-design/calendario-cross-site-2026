# sync-briefings.ps1
# Busca briefing URLs do Google Apps Script e injeta diretamente no HTML standalone.
# Rodar antes de subir nova versao para o Grid.
#
# Uso:
#   .\sync-briefings.ps1
#   .\sync-briefings.ps1 -HtmlPath "C:\caminho\para\Standalone.html"
#   .\sync-briefings.ps1 -UploadToGrid   # tambem sobe automaticamente para o Grid

param(
    [string]$HtmlPath  = "",
    [switch]$UploadToGrid = $false,
    [string]$GridDocId = "01KSNJW00EX0DDZME6W6H58T8F"
)

$BRIEFINGS_URL = "https://script.google.com/a/macros/mercadolivre.com/s/AKfycbxJHWnilwy1zobZqszX48-4UWVmg8-2YCFSHnHqCMOQOX5SJN7r1yUCa4RZXcyW6DfR/exec"

if (-not $HtmlPath) {
    $HtmlPath = "$env:USERPROFILE\Downloads\Calendario Cross Site 2026 - Standalone.html"
}

if (-not (Test-Path $HtmlPath)) {
    Write-Host "ERRO: Arquivo nao encontrado: $HtmlPath" -ForegroundColor Red
    exit 1
}

# ── 1. Buscar briefings do GAS ──────────────────────────────────────────────
Write-Host "Buscando briefings do Google Apps Script..." -ForegroundColor Cyan
$callbackName = "onBriefings_ps"
$fetchUrl = $BRIEFINGS_URL + "?callback=$callbackName&_t=" + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()

try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $fetchUrl -TimeoutSec 30
    $raw = $response.Content
} catch {
    Write-Host "ERRO ao chamar o GAS: $_" -ForegroundColor Red
    exit 1
}

# Extrair JSON do wrapper JSONP:  onBriefings_ps({...})
$jsonMatch = [regex]::Match($raw, '^\s*' + [regex]::Escape($callbackName) + '\s*\((.+)\)\s*;?\s*$', 'Singleline')
if (-not $jsonMatch.Success) {
    Write-Host "ERRO: resposta inesperada do GAS:" -ForegroundColor Red
    Write-Host $raw.Substring(0, [Math]::Min(300, $raw.Length))
    exit 1
}

$briefings = $jsonMatch.Groups[1].Value | ConvertFrom-Json
$campaigns = $briefings.PSObject.Properties | Where-Object { $_.Name -notlike '_*' }

Write-Host "Briefings recebidos: $($campaigns.Count) campanhas" -ForegroundColor Green
foreach ($c in $campaigns) {
    Write-Host "  • $($c.Name) → $($c.Value.briefingUrl)" -ForegroundColor Gray
}

if ($campaigns.Count -eq 0) {
    Write-Host "Nenhuma campanha com briefing encontrada. Encerrando sem alteracoes." -ForegroundColor Yellow
    exit 0
}

# ── 2. Ler HTML e injetar briefingUrl nos items ──────────────────────────────
Write-Host ""
Write-Host "Injetando no HTML..." -ForegroundColor Cyan
$content = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)
$original = $content

$changed = 0
foreach ($c in $campaigns) {
    $name       = $c.Name
    $briefingUrl = $c.Value.briefingUrl
    if (-not $briefingUrl) { continue }

    # Procurar o item pelo nome no JSON de campaigns e adicionar/substituir briefingUrl
    # Padrao: "name":"NomeDaCampanha" ... sem briefingUrl ja presente
    $escapedName = [regex]::Escape($name)
    $escapedUrl  = $briefingUrl -replace '\\', '\\' -replace '"', '\"'

    # Substituir briefingUrl existente
    $patternExisting = '("name"\s*:\s*"' + $escapedName + '"[^}]*?"briefingUrl"\s*:\s*)"[^"]*"'
    if ([regex]::IsMatch($content, $patternExisting)) {
        $content = [regex]::Replace($content, $patternExisting, '$1"' + $escapedUrl + '"')
        $changed++
        continue
    }

    # Adicionar briefingUrl apos o campo name (quando nao existe ainda)
    $patternInsert = '("name"\s*:\s*"' + $escapedName + '")'
    if ([regex]::IsMatch($content, $patternInsert)) {
        $content = [regex]::Replace($content, $patternInsert, '$1,"briefingUrl":"' + $escapedUrl + '"', 1)
        $changed++
    }
}

if ($content -eq $original) {
    Write-Host "Nenhuma correspondencia encontrada no HTML. Verifique se os nomes das campanhas batem." -ForegroundColor Yellow
    exit 0
}

Write-Host "$changed briefing(s) injetado(s)" -ForegroundColor Green
[System.IO.File]::WriteAllText($HtmlPath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Arquivo salvo: $HtmlPath" -ForegroundColor Green

# ── 3. Upload para o Grid (opcional) ────────────────────────────────────────
if ($UploadToGrid) {
    Write-Host ""
    Write-Host "Subindo para o Grid (doc $GridDocId)..." -ForegroundColor Cyan

    $fileBytes = [System.IO.File]::ReadAllBytes($HtmlPath)
    $boundary  = "----FormBoundary" + [System.Guid]::NewGuid().ToString("N")
    $ms  = New-Object System.IO.MemoryStream
    $enc = [System.Text.Encoding]::UTF8

    $configJson = '{"skill_version":"3.6.3","doc_id":"' + $GridDocId + '","file_new_version":true}'
    $cp = "--$boundary`r`nContent-Disposition: form-data; name=`"config`"`r`nContent-Type: application/json`r`n`r`n$configJson`r`n"
    $ms.Write($enc.GetBytes($cp), 0, $enc.GetBytes($cp).Length)

    $fh = "--$boundary`r`nContent-Disposition: form-data; name=`"file`"; filename=`"Calendario Cross Site 2026 - Standalone.html`"`r`nContent-Type: text/html`r`n`r`n"
    $ms.Write($enc.GetBytes($fh), 0, $enc.GetBytes($fh).Length)
    $ms.Write($fileBytes, 0, $fileBytes.Length)

    $cl = "`r`n--$boundary--`r`n"
    $ms.Write($enc.GetBytes($cl), 0, $enc.GetBytes($cl).Length)

    $body = $ms.ToArray(); $ms.Dispose()

    try {
        $resp = Invoke-WebRequest -UseBasicParsing `
            -Uri "https://grid.melioffice.com/api/v1/engine/run" `
            -Method POST `
            -ContentType "multipart/form-data; boundary=$boundary" `
            -Body $body
        $r = $resp.Content | ConvertFrom-Json
        if ($r.ok) {
            Write-Host "Grid atualizado — versao $($r.version)" -ForegroundColor Green
            Write-Host $r.view_url -ForegroundColor Cyan
        } else {
            Write-Host "Erro no upload: $($resp.Content)" -ForegroundColor Red
        }
    } catch {
        Write-Host "Erro ao subir para o Grid: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Concluido!" -ForegroundColor Green


param([string]$HtmlPath = "$env:USERPROFILE\Downloads\Calendario Cross Site 2026 - Standalone (1).html",
      [string]$DocId    = "01KSNJW00EX0DDZME6W6H58T8F")

$root = "C:\Users\amayer\calendario-cross-site-2026"

function CompressB64($text) {
    $ms = New-Object System.IO.MemoryStream
    $gz = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionLevel]::Optimal)
    $b = [System.Text.Encoding]::UTF8.GetBytes($text)
    $gz.Write($b, 0, $b.Length); $gz.Close()
    $r = [Convert]::ToBase64String($ms.ToArray()); $ms.Dispose(); return $r
}
function ReplaceUUID($html, $uuid, $newB64) {
    $i = $html.IndexOf($uuid)
    $ds = $html.IndexOf('"data"', $i); $do = $html.IndexOf('"', $ds + 7) + 1; $dc = $html.IndexOf('"', $do)
    return $html.Substring(0, $do) + $newB64 + $html.Substring($dc)
}

$html = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)

# --- campaigns.js from source ---
$campJs = [System.IO.File]::ReadAllText("$root\campaigns.js", [System.Text.Encoding]::UTF8)
$html = ReplaceUUID $html "3519906f-1c9f-4413-9792-111aa5a424ba" (CompressB64 $campJs)
Write-Host "campaigns.js: $($campJs.Length) chars"

# --- calendar.jsx from SOURCE (JSX stored raw; Babel compiles at runtime) ---
$calJsx = [System.IO.File]::ReadAllText("$root\calendar.jsx", [System.Text.Encoding]::UTF8)
Write-Host "calendar.jsx (source): $($calJsx.Length) chars"
Write-Host "Has context patch: $($calJsx.Contains('!item.briefingUrl&&fallback'))"
$html = ReplaceUUID $html "261da775-0d21-46fc-a128-aa75e16cc418" (CompressB64 $calJsx)
Write-Host "calendar.jsx updated"

[System.IO.File]::WriteAllText($HtmlPath, $html, [System.Text.Encoding]::UTF8)
Write-Host "HTML saved: $($html.Length) chars"

# --- Upload ---
$fileBytes = [System.IO.File]::ReadAllBytes($HtmlPath)
$boundary = "----FormBoundary" + [System.Guid]::NewGuid().ToString("N")
$ms2 = New-Object System.IO.MemoryStream; $enc = [System.Text.Encoding]::UTF8
$cfg = '{"skill_version":"3.6.3","doc_id":"' + $DocId + '","file_new_version":true}'
$p1 = "--$boundary`r`nContent-Disposition: form-data; name=`"config`"`r`nContent-Type: application/json`r`n`r`n$cfg`r`n"
$ms2.Write($enc.GetBytes($p1), 0, $enc.GetBytes($p1).Length)
$p2 = "--$boundary`r`nContent-Disposition: form-data; name=`"file`"; filename=`"Calendario Cross Site 2026 - Standalone.html`"`r`nContent-Type: text/html`r`n`r`n"
$ms2.Write($enc.GetBytes($p2), 0, $enc.GetBytes($p2).Length)
$ms2.Write($fileBytes, 0, $fileBytes.Length)
$p3 = "`r`n--$boundary--`r`n"; $ms2.Write($enc.GetBytes($p3), 0, $enc.GetBytes($p3).Length)
$body = $ms2.ToArray(); $ms2.Dispose()
$resp = Invoke-WebRequest -UseBasicParsing -Uri "https://grid.melioffice.com/api/v1/engine/run" `
    -Method POST -ContentType "multipart/form-data; boundary=$boundary" -Body $body
$r2 = $resp.Content | ConvertFrom-Json
Write-Host "ok: $($r2.ok) | version: $($r2.version)"
Write-Host $r2.view_url

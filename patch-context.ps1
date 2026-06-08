
$cjsPath = "C:\Users\amayer\calendario-cross-site-2026\campaigns.js"
$cjs = [System.IO.File]::ReadAllText($cjsPath, [System.Text.Encoding]::UTF8)
$original = $cjs

# 1. Add context field to Newsletter / Reforco campaigns
$pairs = @(
  @('name: "Newsletter Full, Flex e Coleta"',
    'context: "Inicio do mes — sellers precisam conhecer o calendario comercial para se preparar e capturar oportunidades de venda."'),
  @('name: "Newsletter Full, Flex y Coleta"',
    'context: "Inicio del mes — sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta."'),
  @('name: "Newsletter Full, Flex y Colecta"',
    'context: "Inicio del mes — sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta."'),
  @('name: "Reforco Dia dos Namorados Flex"',
    'context: "O Dia dos Namorados e uma data chave no calendario comercial. Precisamos instigar o envio de produtos focais."'),
  @('name: "Refuerzo Dia dos Namorados Flex"',
    'context: "O Dia dos Namorados e uma data chave no calendario comercial. Precisamos instigar o envio de produtos focais."')
)

foreach ($pair in $pairs) {
    $old = $pair[0]
    $field = $pair[1]
    if ($cjs.Contains($old) -and -not ($cjs.Contains($old + ", " + $field.Substring(0,10)))) {
        $cjs = $cjs.Replace($old, $old + ", " + $field)
        Write-Host "context added: $old"
    }
}

# 2. Add briefingUrl for Ativar / Activar Publicaciones across all sites (cross-site doc)
$ativarBriefing = 'https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit'
$ativarContext = 'Sellers Flex ativos com 0 publicacoes ativas. Objetivo: aumentar a adocao do Flex incentivando a ativacao de publicacoes.'

# Find all Ativar / Activar entries and add briefingUrl if missing
$ativarNames = @('Ativar Publicacoes Flex', 'Ativar Publicacoes Flex', 'Activar Publicaciones Flex')
foreach ($an in $ativarNames) {
    $key = 'name: "' + $an + '"'
    if (-not $cjs.Contains($key)) { continue }
    # Add briefingUrl if not present right after this key
    $idx = 0
    while ($true) {
        $p = $cjs.IndexOf($key, $idx)
        if ($p -lt 0) { break }
        $window = $cjs.Substring($p, [Math]::Min(300, $cjs.Length - $p))
        if (-not ($window.Contains('briefingUrl'))) {
            $ins = ', briefingUrl: "' + $ativarBriefing + '", context: "' + $ativarContext + '"'
            $cjs = $cjs.Substring(0, $p + $key.Length) + $ins + $cjs.Substring($p + $key.Length)
            Write-Host "briefingUrl added: $key"
        }
        $idx = $p + $key.Length + 1
    }
}

if ($cjs -ne $original) {
    [System.IO.File]::WriteAllText($cjsPath, $cjs, [System.Text.Encoding]::UTF8)
    Write-Host "Saved: $($cjs.Length) chars"
} else {
    Write-Host "No changes"
}


# sync-from-csv.ps1 — Converte CSV do Sheets em blocos JS para campaigns.js
# Uso: powershell -ExecutionPolicy Bypass -File .\sync-from-csv.ps1

param(
    [string]$CsvPath    = "$env:USERPROFILE\Downloads\CALENDARIO UNIFICADO ALL SITES GROWTH _ ANO 2026  - campanhas-junho (2).csv",
    [string]$Month      = "Junio 2026",
    [string]$MonthCode  = "JUN",
    [int]$Year          = 2026,
    [int]$MonthNum      = 6,
    [string]$OutDir     = ".\output"
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

function ToTitleCase($s) {
    $words = $s.ToLower() -split '\s+'
    $skip = @('y','e','o','de','del','da','das','do','dos','la','el','los','las','a','as')
    $out = for ($i = 0; $i -lt $words.Count; $i++) {
        $w = $words[$i]
        if ($i -eq 0 -or $skip -notcontains $w) {
            if ($w.Length -gt 0) { $w.Substring(0,1).ToUpper() + $w.Substring(1) } else { $w }
        } else { $w }
    }
    return ($out -join ' ')
}

function ParseDay($raw) {
    if ($raw -match '^(\d{1,2})/\d{1,2}$') { return [int]$Matches[1] }
    return $null
}

function DayToCol($day) {
    $dt = [DateTime]::new($Year, $MonthNum, $day)
    $dow = [int]$dt.DayOfWeek
    if ($dow -eq 0) { return 7 }
    return $dow
}

function DayToWeekIdx($day) {
    $dt = [DateTime]::new($Year, $MonthNum, 1)
    $firstDow = [int]$dt.DayOfWeek
    $firstMon = if ($firstDow -eq 1) { 1 } elseif ($firstDow -eq 0) { 2 } else { 9 - $firstDow }
    if ($day -lt $firstMon) { return 0 }
    return [Math]::Floor(($day - $firstMon) / 7)
}

function MapCanal($raw) {
    switch -Wildcard ($raw.Trim().ToLower()) {
        "e-mail"   { return "EMAIL" }
        "email"    { return "EMAIL" }
        "whatsapp" { return "WPP" }
        "wpp"      { return "WPP" }
        "cdn"      { return "CDN" }
        "push"     { return "PUSH" }
        "sms"      { return "SMS" }
        default    { return "TBD" }
    }
}

function MapTypes($raw) {
    $parts = $raw -split '[|,/]'
    $types = foreach ($p in $parts) {
        $t = $p.Trim().ToLower()
        if ($t -eq 'full' -or $t -eq 'fbm') { '"full"' }
        elseif ($t -eq 'flex') { '"flex"' }
        elseif ($t -like 'xd*') { '"xd"' }
        elseif ($t -eq 'me1') { '"me1"' }
        elseif ($t -like 'coleta*') { '"coleta"' }
    }
    $uniq = $types | Select-Object -Unique | Where-Object { $_ }
    if (-not $uniq) { return '["full"]' }
    return '[' + ($uniq -join ',') + ']'
}

function GetWeekShells() {
    $shells = @()
    $dows = @("DOM","LUN","MAR","MIE","JUE","VIE","SAB")
    $daysInMonth = [DateTime]::DaysInMonth($Year, $MonthNum)
    $weekDays = @()
    for ($d = 1; $d -le $daysInMonth; $d++) {
        $dtD = [DateTime]::new($Year, $MonthNum, $d)
        $weekDays += $dtD
        $isLast = ($d -eq $daysInMonth)
        $isSun  = ($dtD.DayOfWeek -eq [DayOfWeek]::Sunday)
        if ($isSun -or $isLast) {
            $days = $weekDays | ForEach-Object {
                $col = [int]$_.DayOfWeek
                '{ dow: "' + $dows[$col] + '", date: "' + $_.Day + '" }'
            }
            $shells += ,@{ days = $days }
            $weekDays = @()
        }
    }
    return $shells
}

Write-Host "Reading CSV: $CsvPath" -ForegroundColor Cyan
$rows = Import-Csv -Path $CsvPath -Encoding UTF8
$siteTargets = @("MLB","MLA","MCO","MLC")
$weekShells = GetWeekShells

$bySite = @{}
foreach ($s in $siteTargets) { $bySite[$s] = [System.Collections.Generic.List[object]]::new() }

foreach ($row in $rows) {
    $rawSite = $row.Site.Trim().ToUpper()
    $expandedSites = if ($rawSite -eq "ALL SITES") { $siteTargets } else { @($rawSite) }

    foreach ($site in $expandedSites) {
    if ($siteTargets -notcontains $site) { continue }

    $prog = ($row.PSObject.Properties.Value[3] + "").Trim()
    $day = ParseDay $prog
    if (-not $day) { continue }

    $col     = DayToCol $day
    $weekIdx = DayToWeekIdx $day
    $name    = ToTitleCase $row.'Nome da Campanha'.Trim()
    $canal   = MapCanal $row.Canal
    $types   = MapTypes $row.'Picking Type'
    $isWish  = ($row.Wishlist.Trim().ToUpper() -eq "WISHLIST")

    $bySite[$site].Add(@{
        weekIdx  = $weekIdx
        col      = $col
        span     = 1
        ch       = $canal
        types    = $types
        name     = $name
        wishlist = $isWish
        day      = $day
    })
    } # end foreach site
}

foreach ($site in $siteTargets) {
    $items = $bySite[$site]
    if ($items.Count -eq 0) { continue }

    $varName  = $site + '_' + $MonthCode + '_' + $Year
    $wConst   = 'W_' + $MonthCode
    $sb = [System.Text.StringBuilder]::new()

    [void]$sb.AppendLine('// AUTO-GERADO por sync-from-csv.ps1')
    [void]$sb.AppendLine('const ' + $varName + ' = makeMonth("' + $Month + '", ' + $wConst + ', [')

    for ($wi = 0; $wi -lt $weekShells.Count; $wi++) {
        $weekItems = @($items | Where-Object { $_.weekIdx -eq $wi } | Sort-Object { $_.col })
        [void]$sb.AppendLine('  /* Semana ' + ($wi+1) + ' */')
        [void]$sb.AppendLine('  [')
        foreach ($it in $weekItems) {
            $wl = if ($it.wishlist) { ', wishlist: true' } else { '' }
            $esc = $it.name -replace '"', '\"'
            [void]$sb.AppendLine('    { col: ' + $it.col + ', span: ' + $it.span + ', ch: "' + $it.ch + '", types: ' + $it.types + ', name: "' + $esc + '"' + $wl + ' },')
        }
        $comma = if ($wi -lt $weekShells.Count - 1) { '],' } else { ']' }
        [void]$sb.AppendLine('  ' + $comma)
    }

    [void]$sb.AppendLine(']);')

    $outFile = "$OutDir\${varName}.js"
    [System.IO.File]::WriteAllText($outFile, $sb.ToString(), [System.Text.Encoding]::UTF8)
    Write-Host "Generated: $outFile ($($items.Count) items)" -ForegroundColor Green
}

Write-Host "`nDone! Check $OutDir for generated JS blocks." -ForegroundColor Cyan

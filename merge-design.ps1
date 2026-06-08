
# merge-design.ps1 — v2
# Structural base = design version; enrichment (briefingUrl/targetUrl/briefing/context)
# carried over from local (GCal-synced) version by campaign name.

$designPath = "$env:USERPROFILE\Downloads\campaigns-from-design.js"
$localPath  = "C:\Users\amayer\calendario-cross-site-2026\campaigns.js"
$outPath    = $localPath

$design = [System.IO.File]::ReadAllText($designPath, [System.Text.Encoding]::UTF8)
$local  = [System.IO.File]::ReadAllText($localPath,  [System.Text.Encoding]::UTF8)

# ── 1. Build enrichment lookup from local version ────────────────────────────
$objRe = [regex]::new('\{[^{}]+\}', [System.Text.RegularExpressions.RegexOptions]::Singleline)

$enrichment = [System.Collections.Generic.Dictionary[string,object]]::new()
$enrichFields = @('briefingUrl','targetUrl','briefing','context','targetDesc')

foreach ($m in $objRe.Matches($local)) {
  $obj = $m.Value
  if ($obj -notmatch 'name:\s*"([^"]+)"') { continue }
  $campaignName = $Matches[1]

  $extra = @{}
  foreach ($f in $enrichFields) {
    if ($obj -match ($f + ':\s*"([^"]+)"')) {
      $extra[$f] = $Matches[1]
    }
  }

  if ($extra.Count -gt 0 -and -not $enrichment.ContainsKey($campaignName)) {
    $enrichment[$campaignName] = $extra
    Write-Host ("  [+] " + $campaignName + " -> " + ($extra.Keys -join ', '))
  }
}
Write-Host ""
Write-Host ("Enrichment entries: " + $enrichment.Count)
Write-Host ""

# ── 2. Apply enrichment to design version ────────────────────────────────────
$applied = 0

$result = $objRe.Replace($design, [System.Text.RegularExpressions.MatchEvaluator]{
  param($m)
  $obj = $m.Value

  if ($obj -notmatch 'name:\s*"([^"]+)"') { return $obj }
  $cname = $Matches[1]

  if (-not $enrichment.ContainsKey($cname)) { return $obj }

  $fields = $enrichment[$cname]
  $additions = ''

  foreach ($f in $enrichFields) {
    if (-not $fields.ContainsKey($f)) { continue }
    if ($obj -match ($f + ':\s*"')) { continue }  # already present
    $v = $fields[$f]
    $additions += (', ' + $f + ': "' + $v + '"')
  }

  if (-not $additions) { return $obj }

  $script:applied++
  $trimmed = $obj.TrimEnd()
  if ($trimmed.EndsWith('}')) {
    return ($trimmed.Substring(0, $trimmed.Length - 1).TrimEnd() + $additions + ' }')
  }
  return $obj
})

Write-Host ("Items enriched: " + $applied)
Write-Host ""

# ── 3. Fix mojibake in result (em dash and common chars) ────────────────────
$result = $result.Replace([char]0xC3 + [char]0xA2 + [char]0xE2 + [char]0x80 + [char]0x94, [char]0x2014)
# Simpler: just leave as-is — the calendar already renders these via UTF-8

# ── 4. Save ──────────────────────────────────────────────────────────────────
[System.IO.File]::WriteAllText($outPath, $result, [System.Text.Encoding]::UTF8)
Write-Host ("Saved to: " + $outPath)
Write-Host ("Final length: " + $result.Length + " chars")

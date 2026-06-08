
$path = "C:\Users\amayer\calendario-cross-site-2026\campaigns.js"
$cjs = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# ── 1. Fix encoding issues (UTF-8 mojibake) ──────────────────────────────────
$cjs = $cjs -replace 'â€"','—' -replace 'â€™',"'" -replace 'Ã§','ç' -replace 'Ã£','ã' -replace 'Ã©','é' -replace 'Ã³','ó'
Write-Host "Encoding fixed"

# ── 2. Fix Colecta Boni Aviso de Activación — wrong briefing in MLA and MCO ──
# The correct briefing for this campaign comes from GCal [MLA MCO] COLECTA BONI AVISO DE ACTIVACIÓN
$wrongBriefing  = 'APAGADO DE SPD - Sellers cuyo envío por correo será desactivado el 10 de junio. A partir de esa fecha, la colecta Full será la única opción para enviar stock.'
$correctBriefing = 'projeto para ativação dos sellers a utilizarem mais os serviços de Coletas Full.'
$wrongTargetDesc = 'COLECTA FULL | WHATSAPP PUSH CDN | 4 DE JUNIO | APERTURA DE COLECTA - Brenda Almaraz'

$cjs = $cjs.Replace(
    'name: "Colecta Boni · Aviso de Activación", briefing: "' + $wrongBriefing + '", targetDesc: "' + $wrongTargetDesc + '"',
    'name: "Colecta Boni · Aviso de Activación", briefing: "' + $correctBriefing + '"'
)
# Also handle reverse order of fields
$cjs = $cjs.Replace(
    'name: "Colecta Boni · Aviso de Activación", briefing: "' + $wrongBriefing + '"',
    'name: "Colecta Boni · Aviso de Activación", briefing: "' + $correctBriefing + '"'
)
Write-Host "Colecta Boni Aviso fixed"

# ── 3. Fix MLC BC Invierno Seguimiento + Recordatorio — got POC Estrella briefing ──
$pocBriefing = 'Daremos beneficio temporal para 150 sellers: 3 meses de almacenamiento gratuito para su SKU estrella en nuestros fulfillment centers.'
$bcInviernoCorrect = 'Campanha de acompanhamento do BC Invierno para sellers que não estão atingindo a meta de coletas, com urgência para reforçar o abastecimento.'
$cjs = $cjs.Replace(
    'name: "BC Invierno Seguimiento + Recordatorio colectas / Urgencia", briefing: "' + $pocBriefing + '"',
    'name: "BC Invierno Seguimiento + Recordatorio colectas / Urgencia"'
)
# In case it has a different surrounding
if ($cjs -match 'BC Invierno Seguimiento \+ Recordatorio') {
    $cjs = [regex]::Replace($cjs,
        '(name:\s*"BC Invierno Seguimiento \+ Recordatorio colectas / Urgencia")[^}]*?briefing:\s*"Daremos[^"]*"',
        '$1')
}
Write-Host "BC Invierno Seguimiento fixed"

# ── 4. Fix MLC BC Invierno Recordatorio ultimos dias — has wrong briefing ──
# Correct: "Para la próxima temporada de invierno, hemos identificado sellers que no han actualizado..."
# Wrong: shows BC Invierno Seguimiento + 2 colectas briefing
$wrongBCInv = 'Los sellers no se abastecen con la agresividad necesaria para asegurar el stock durante el invierno.'
$cjs = $cjs.Replace(
    'name: "BC Invierno · Recordatorio últimos días", briefing: "' + $wrongBCInv + '"',
    'name: "BC Invierno · Recordatorio últimos días"'
)
Write-Host "BC Invierno Recordatorio fixed"

# ── 5. Save ──────────────────────────────────────────────────────────────────
[System.IO.File]::WriteAllText($path, $cjs, [System.Text.Encoding]::UTF8)
Write-Host "Saved: $($cjs.Length) chars"

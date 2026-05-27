# Calendário Cross Site 2026 — MLB · MLA · MCO · MLC

Link no Grid: https://grid.adminml.com/d/01KSNJW00EX0DDZME6W6H58T8F/view

## Arquivos

| Arquivo | O que é |
|---------|---------|
| `campaigns.js` | Dados das campanhas (datas, canais, responsáveis) — **editar aqui para adicionar meses** |
| `calendar.jsx` | Componente React (layout visual) |
| `apply-briefings.ps1` | Re-injeta a integração de briefings após exportar novo HTML |
| `sync-briefings.ps1` | Busca briefing URLs do Google Calendar e injeta no HTML |
| `briefings-gcal-script.gs` | Script do Google Apps Script (já implantado) |

## Para adicionar campanhas (ex: Julho)

**Opção A — via Claude Code (recomendado):**
1. Abra esta pasta no Claude Code
2. Diga: *"adiciona as campanhas de julho para MLB: [lista de campanhas]"*
3. Claude edita o `campaigns.js`, exporta o HTML e sobe para o Grid

**Opção B — manual:**
1. Edite `campaigns.js` diretamente
2. Exporte o HTML standalone no Claude
3. Rode `.\apply-briefings.ps1` para reinjetar briefings
4. Suba para o Grid com `.\sync-briefings.ps1 -UploadToGrid`

## Para sincronizar briefings do Google Calendar

```powershell
# Só sincroniza o HTML local
.\sync-briefings.ps1

# Sincroniza e já sobe para o Grid
.\sync-briefings.ps1 -UploadToGrid
```

## Para editar no Claude Code

1. Instale o Claude Code: https://claude.ai/code
2. Abra esta pasta: `File > Open Folder`
3. Descreva a mudança em português e Claude implementa

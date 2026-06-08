# Calendário Cross Site 2026 — MLB · MLA · MCO · MLC

Link no Grid: https://grid.adminml.com/d/01KSNJW00EX0DDZME6W6H58T8F/view

## Arquivos

| Arquivo | O que é |
|---------|---------|
| `campaigns.js` | Dados das campanhas (datas, canais, responsáveis, briefingUrls) — **editar aqui** |
| `calendar.jsx` | Componente React (layout visual) |
| `sync-briefings.ps1` | Legado — sincronização via GAS (requer OAuth corporativo, não recomendado) |
| `briefings-gcal-script.gs` | Google Apps Script legado (já implantado, mas não utilizado no fluxo atual) |

## Para adicionar campanhas (ex: Julho)

**Via Claude Code (recomendado):**
1. Abra esta pasta no Claude Code
2. Diga: *"adiciona as campanhas de julho para MLB: [lista de campanhas]"*
3. Claude edita o `campaigns.js`, exporta o HTML e sobe para o Grid

## Para vincular briefings

Os briefing links ficam no campo `briefingUrl` de cada campanha em `campaigns.js`
e aparecem no painel de detalhe ao clicar na campanha no calendário.

### Opção A — Via pasta do Google Drive (recomendado)

1. Crie o doc de briefing no Google Docs
2. Mova-o para a pasta compartilhada:  
   `https://drive.google.com/drive/folders/17ZSK1ev1UXnpaRjHvdpXA_ChaF88HfaG`
3. No Claude Code, diga:  
   *"sincroniza os briefings da pasta do Drive"*
4. Claude lê a pasta, cruza os nomes com as campanhas em `campaigns.js`,
   atualiza o HTML e sobe para o Grid automaticamente

### Opção B — Diretamente pelo Claude Code

Se o link já estiver disponível, basta pedir:

> *"adiciona briefingUrl para [Nome da Campanha]: https://docs.google.com/..."*

Claude atualiza `campaigns.js` e sobe para o Grid.

### Opção C — Edição manual em `campaigns.js`

Adicione o campo `briefingUrl` ao objeto da campanha:

```js
{ col: 2, span: 1, ch: "EMAIL", name: "Nome da Campanha",
  briefingUrl: "https://docs.google.com/document/d/ID/edit" }
```

Depois peça ao Claude para subir ao Grid, ou exporte o HTML manualmente.

## Para editar no Claude Code

1. Instale o Claude Code: https://claude.ai/code
2. Abra esta pasta: `File > Open Folder`
3. Descreva a mudança em português e Claude implementa

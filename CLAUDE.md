# Calendário Cross Site 2026

Calendário editorial compartilhado entre MLB, MLA, MCO e MLC.
Publicado como HTML interativo no Grid: https://grid.adminml.com/d/01KSNJW00EX0DDZME6W6H58T8F/view

## Arquivos do projeto

| Arquivo | Função |
|---------|--------|
| `campaigns.js` | **Editar aqui.** Dados de todas as campanhas: datas, canais, responsáveis, briefingUrl, targetUrl, briefing |
| `calendar.jsx` | Componente React — layout visual do calendário. Raramente muda |
| `rebuild-and-upload.ps1` | Injeta campaigns.js + calendar.jsx no HTML standalone e sobe nova versão no Grid |
| `merge-design.ps1` | Atualiza campaigns.js com a versão do Claude Design, preservando campos de enriquecimento (briefingUrl, targetUrl, briefing) |
| `fix-contamination.ps1` | Corrige eventuais briefings cruzados após um merge |
| `sync-briefings.ps1` | Legado — sincronização via GAS (não usar) |
| `gcal-briefings-map.json` | Mapeamento de eventos GCal → campos de campanha (para sync manual) |
| `gcal-targets.json` | Cache de targetUrls dos eventos GCal |

## Identificadores importantes

| Item | Valor |
|------|-------|
| Grid doc ID | `01KSNJW00EX0DDZME6W6H58T8F` |
| Grid skill version | `3.6.3` |
| Claude Design project | https://claude.ai/design/p/b88d1c36-dfdd-45d4-acae-8fbb72e5d8a8 |
| HTML standalone (local) | `%USERPROFILE%\Downloads\Calendario Cross Site 2026 - Standalone (1).html` |
| Pasta de briefings Drive | https://drive.google.com/drive/folders/17ZSK1ev1UXnpaRjHvdpXA_ChaF88HfaG |

### UUIDs do bundler (manifest no HTML standalone)
| Arquivo | UUID no manifest |
|---------|-----------------|
| `campaigns.js` (versão nova) | `45b119ad-7fd2-4599-9fe1-38e1c09b9295` |
| `calendar.jsx` (versão nova) | `d100de5a-b7bc-4fab-a8b5-6fbba3834f0f` |

## Fluxo de trabalho

### Editar campanhas e publicar

1. Edite `campaigns.js` (ou peça ao Claude)
2. Baixe o HTML standalone mais recente do Grid (ou use o que já está em Downloads)
3. Execute o script de rebuild:
   ```powershell
   cd C:\Users\SEU_USUARIO\calendario-cross-site-2026
   powershell -ExecutionPolicy Bypass -File .\rebuild-and-upload.ps1
   ```
4. O script injeta os arquivos atualizados e sobe nova versão automaticamente

> **Via Claude Code:** diga _"sobe a versão atual pro Grid"_ que o Claude executa o script.

### Atualizar estrutura a partir do Claude Design

Quando o Design team publicar uma nova versão do calendário no Claude Design:

1. Abra o Design project: https://claude.ai/design/p/b88d1c36-dfdd-45d4-acae-8fbb72e5d8a8
2. Navegue até `?file=data%2Fcampaigns.js`
3. Clique em **Copy** no Monaco editor
4. Salve o conteúdo em `%USERPROFILE%\Downloads\campaigns-from-design.js`
5. Execute o merge:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\merge-design.ps1
   ```
6. Verifique o resultado e suba ao Grid

> **Via Claude Code:** diga _"atualize as campanhas conforme o Claude Design"_ — o Claude faz todo o processo.

### Vincular briefings

**Via Google Drive (recomendado):**
1. Crie/mova o doc de briefing para a pasta compartilhada acima
2. Diga ao Claude: _"sincroniza os briefings da pasta do Drive"_

**Diretamente:**
> _"adiciona briefingUrl para [Nome da Campanha]: https://docs.google.com/..."_

## Integrações MCP necessárias

Instale os seguintes plugins em **Claude > Extensões**:

| Plugin | Para que serve |
|--------|---------------|
| **Google Calendar** | Lê eventos dos 4 calendários para sync de briefings |
| **Google Drive** | Acessa pasta de briefings e faz match com campanhas |
| **Claude in Chrome** | Acessa o Claude Design project para extrair campaigns.js |
| **Scheduled Tasks** | Executa sync diário às 9h |

### Calendários Google Calendar (sync de briefings)

| Calendário | ID |
|-----------|-----|
| Flex | `c_0a0c62fac6c0ef1901b599db6b2d6840b7591848c4d749287eb4d8097379a37a@group.calendar.google.com` |
| FBM | `c_ac10af12e1896891cc7c1f7d5e4ad3d0594ca0e654ae5882c309f8c1d81a5a0b@group.calendar.google.com` |
| Coletas | `c_dadea2298c4ff4f8bbbbf3a112583c84bb69faecc96fab730b8f19f04ed2d3e5@group.calendar.google.com` |
| ME1 | `c_a28fa21ab93cf5e218ca5d183758a715a4e2940d851eef14616ae21ee0a33fdb@group.calendar.google.com` |

## Sync automático (Scheduled Task)

Uma tarefa diária roda às 9h e:
1. Lê eventos dos 4 calendários GCal de junho a dezembro/2026
2. Faz match por nome com as campanhas em `campaigns.js`
3. Preenche `briefingUrl`, `targetUrl` e `briefing` que estejam faltando
4. Sobe nova versão no Grid

Tarefa configurada em: `~/.claude/scheduled-tasks/gcal-briefings-sync/`

## Estrutura de dados (`campaigns.js`)

```js
window.DATA = {
  defaultSite: "MLB",
  defaultMonth: "Junio 2026",
  months: ["Junio 2026"],
  bySite: {
    MLB: { "Junio 2026": { monthLabel, weeks: [{ label, days, items }] } },
    MLA: { ... },
    MCO: { ... },
    MLC: { ... }
  }
}
```

Cada item de campanha:
```js
{
  col: 2,          // coluna (1–7 = seg–dom da semana)
  span: 3,         // quantas colunas ocupa
  ch: "EMAIL",     // canal: EMAIL | WPP | PUSH | SMS | IN_APP
  types: ["full"], // subtipos (opcional)
  name: "Nome da Campanha",
  briefingUrl: "https://docs.google.com/document/d/...",
  targetUrl: "https://docs.google.com/spreadsheets/d/...",
  briefing: "Descrição curta do contexto",
  context: "Contexto adicional (opcional)"
}
```

## API Grid (para upload manual)

```bash
curl -s -X POST "https://grid.melioffice.com/api/v1/engine/run" \
  -F 'config={"skill_version":"3.6.3","doc_id":"01KSNJW00EX0DDZME6W6H58T8F","file_new_version":true}' \
  -F "file=@/caminho/para/Calendario Cross Site 2026 - Standalone (1).html"
```

Requer **VPN Meli** ativa. Sem auth header — a VPN resolve a identidade.

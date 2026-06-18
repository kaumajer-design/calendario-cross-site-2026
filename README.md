# Calendário Cross Site 2026 — MLB · MLA · MCO · MLC

Calendário editorial compartilhado entre Brasil, Argentina, Colômbia e Chile.

🔗 **Link do calendário:** https://grid.adminml.com/d/01KSNJW00EX0DDZME6W6H58T8F/view

---

## Configuração inicial (fazer uma vez)

### 1. Instalar o Claude Code
Baixe e instale o app: **https://claude.ai/download**

### 2. Instalar o GitHub Desktop (opcional, mais fácil)
Baixe em: **https://desktop.github.com**  
É um app visual para gerenciar o repositório sem usar terminal.

### 3. Clonar o repositório

**Opção A — GitHub Desktop (recomendado para não-técnicos):**
1. Abra o GitHub Desktop
2. Clique em **File → Clone repository...**
3. Cole a URL: `https://github.com/kaumajer-design/calendario-cross-site-2026`
4. Escolha onde salvar (ex: `Documentos\calendario-cross-site-2026`)
5. Clique em **Clone**

**Opção B — Terminal:**
```
git clone https://github.com/kaumajer-design/calendario-cross-site-2026
```

### 4. Abrir no Claude Code
1. Abra o Claude Code
2. Clique em **File → Open Folder**
3. Selecione a pasta `calendario-cross-site-2026` que você acabou de clonar

Pronto — o Claude vai ler o contexto do projeto automaticamente e estará pronto para ajudar.

### 5. Instalar os plugins MCP
No Claude Code, vá em **Extensões** e instale:
- **Google Calendar** — para sincronizar briefings automaticamente
- **Google Drive** — para acessar a pasta de briefings

---

## Uso diário — como pedir mudanças ao Claude

Com a pasta aberta no Claude Code, basta escrever em português o que precisa.

**Adicionar campanha:**
> *"adiciona no MLB julho, semana 2: Refuerzo DDP Full, canal EMAIL, tipo full, dia 07/07"*

**Corrigir data:**
> *"muda a campanha Newsletter de MLB junho para o dia 04/06"*

**Adicionar briefing:**
> *"adiciona o briefingUrl para a campanha Hunting Item de MLB junho: https://docs.google.com/..."*

**Publicar no Grid:**
> *"sobe a versão atual pro Grid"*

**Sincronizar briefings do Google Calendar:**
> *"sincroniza os briefings do Google Calendar de julho"*

**Atualizar mês completo via CSV:**
> *"roda o sync de julho com o arquivo Downloads\campanhas-julho.csv"*

---

## Fluxo mensal completo

1. Exporte o CSV da aba `campanhas-mês` do Sheets
2. Salve em `Downloads\`
3. Abra o Claude Code nesta pasta e diga:
   > *"atualiza o calendário com o CSV de agosto que está em Downloads"*
4. Claude gera os dados, atualiza `campaigns.js` e publica no Grid

---

## Arquivos do projeto

| Arquivo | O que é |
|---------|---------|
| `campaigns.js` | Dados de todas as campanhas — **o principal arquivo** |
| `calendar.jsx` | Layout visual do calendário (raramente muda) |
| `rebuild-and-upload.ps1` | Script que publica no Grid |
| `sync-from-csv.ps1` | Script que converte CSV em dados do calendário |
| `CLAUDE.md` | Instruções técnicas para o Claude (não editar) |

---

## Dúvidas?

Abra o Claude Code com esta pasta e pergunte — ele tem todo o contexto do projeto.

# Calendário Cross Site 2026 — MLB · MLA · MCO · MLC

Calendário editorial compartilhado entre Brasil, Argentina, Colômbia e Chile.

🔗 **Link do calendário:** https://grid.adminml.com/d/01KSNJW00EX0DDZME6W6H58T8F/view

---

## Português (BR)

### Configuração inicial (fazer uma vez por pessoa)

**1. Instalar o Claude Code**
Baixe e instale: **https://claude.ai/download**

**2. Instalar o GitHub Desktop** *(recomendado para quem não usa terminal)*
Baixe em: **https://desktop.github.com**

**3. Clonar o repositório**

*Opção A — GitHub Desktop (mais fácil):*
1. Abra o GitHub Desktop
2. Clique em **File → Clone repository...**
3. Cole a URL: `https://github.com/kaumajer-design/calendario-cross-site-2026`
4. Escolha onde salvar (ex: `Documentos\calendario-cross-site-2026`)
5. Clique em **Clone**

*Opção B — Terminal:*
```
git clone https://github.com/kaumajer-design/calendario-cross-site-2026
```

**4. Abrir no Claude Code**
1. Abra o Claude Code
2. Clique em **File → Open Folder**
3. Selecione a pasta `calendario-cross-site-2026`

O Claude vai ler o contexto do projeto automaticamente.

**5. Instalar os plugins MCP**
No Claude Code, vá em **Extensões** e instale:
- **Google Calendar** — para sincronizar briefings automaticamente
- **Google Drive** — para acessar a pasta de briefings

---

### Uso diário — como pedir mudanças ao Claude

Com a pasta aberta no Claude Code, basta escrever em português:

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
> *"atualiza o calendário com o CSV de agosto que está em Downloads"*

---

### Fluxo mensal completo

1. Exporte o CSV da aba `campanhas-mês` do Sheets
2. Salve em `Downloads\`
3. Abra o Claude Code nesta pasta e diga:
   > *"atualiza o calendário com o CSV de agosto que está em Downloads"*
4. Claude gera os dados, atualiza `campaigns.js` e publica no Grid

---

### Sync automático de briefings

Uma tarefa diária roda automaticamente toda manhã de seg–sex às 9h:
- Lê os 4 calendários Google Calendar (Flex, Full, Coletas, ME1)
- Cruza os eventos com as campanhas em `campaigns.js`
- Adiciona `briefingUrl`, `targetUrl` e `briefing` onde estiver faltando
- Publica nova versão no Grid se houve alterações

**Requisitos:** Claude Code aberto + VPN Meli ativa.

---

### Arquivos do projeto

| Arquivo | O que é |
|---------|---------|
| `campaigns.js` | Dados de todas as campanhas — **o principal arquivo** |
| `calendar.jsx` | Layout visual do calendário (raramente muda) |
| `rebuild-and-upload.ps1` | Script que publica no Grid |
| `sync-from-csv.ps1` | Script que converte CSV em dados do calendário |
| `CLAUDE.md` | Instruções técnicas para o Claude (não editar) |

---

---

## Español (neutro)

### Configuración inicial (hacer una vez por persona)

**1. Instalar Claude Code**
Descarga e instala: **https://claude.ai/download**

**2. Instalar GitHub Desktop** *(recomendado para quienes no usan terminal)*
Descarga en: **https://desktop.github.com**

**3. Clonar el repositorio**

*Opción A — GitHub Desktop (más fácil):*
1. Abre GitHub Desktop
2. Haz clic en **File → Clone repository...**
3. Pega la URL: `https://github.com/kaumajer-design/calendario-cross-site-2026`
4. Elige dónde guardar (ej: `Documentos\calendario-cross-site-2026`)
5. Haz clic en **Clone**

*Opción B — Terminal:*
```
git clone https://github.com/kaumajer-design/calendario-cross-site-2026
```

**4. Abrir en Claude Code**
1. Abre Claude Code
2. Haz clic en **File → Open Folder**
3. Selecciona la carpeta `calendario-cross-site-2026`

Claude leerá el contexto del proyecto automáticamente.

**5. Instalar los plugins MCP**
En Claude Code, ve a **Extensiones** e instala:
- **Google Calendar** — para sincronizar briefings automáticamente
- **Google Drive** — para acceder a la carpeta de briefings

---

### Uso diario — cómo pedir cambios a Claude

Con la carpeta abierta en Claude Code, simplemente escribe en español:

**Agregar campaña:**
> *"agrega en MLA julio, semana 2: Refuerzo DDP Full, canal EMAIL, tipo full, día 07/07"*

**Corregir fecha:**
> *"cambia la campaña Newsletter de MLA junio al día 04/06"*

**Agregar briefing:**
> *"agrega el briefingUrl para la campaña Hunting Item de MLA junio: https://docs.google.com/..."*

**Publicar en Grid:**
> *"sube la versión actual al Grid"*

**Sincronizar briefings de Google Calendar:**
> *"sincroniza los briefings del Google Calendar de julio"*

**Actualizar mes completo vía CSV:**
> *"actualiza el calendario con el CSV de agosto que está en Descargas"*

---

### Flujo mensual completo

1. Exporta el CSV de la pestaña `campañas-mes` en Sheets
2. Guárdalo en `Descargas\`
3. Abre Claude Code en esta carpeta y di:
   > *"actualiza el calendario con el CSV de agosto que está en Descargas"*
4. Claude genera los datos, actualiza `campaigns.js` y publica en Grid

---

### Sync automático de briefings

Una tarea diaria corre automáticamente cada mañana de lun–vie a las 9h:
- Lee los 4 calendarios Google Calendar (Flex, Full, Colectas, ME1)
- Cruza los eventos con las campañas en `campaigns.js`
- Agrega `briefingUrl`, `targetUrl` y `briefing` donde falten
- Publica una nueva versión en Grid si hubo cambios

**Requisitos:** Claude Code abierto + VPN Meli activa.

---

### Archivos del proyecto

| Archivo | Qué es |
|---------|--------|
| `campaigns.js` | Datos de todas las campañas — **el archivo principal** |
| `calendar.jsx` | Layout visual del calendario (rara vez cambia) |
| `rebuild-and-upload.ps1` | Script que publica en Grid |
| `sync-from-csv.ps1` | Script que convierte CSV en datos del calendario |
| `CLAUDE.md` | Instrucciones técnicas para Claude (no editar) |

---

### ¿Dudas?

Abre Claude Code con esta carpeta y pregunta — tiene todo el contexto del proyecto.

// ╔══════════════════════════════════════════════════════════════════╗
// ║  CALENDARIO CROSS SITE 2026 — Briefings Auto-Sync               ║
// ║  Google Apps Script · Deploy as Web App                         ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  COMO CONFIGURAR:                                                ║
// ║  1. Abra script.google.com → Novo projeto                       ║
// ║  2. Cole este código substituindo o Code.gs                     ║
// ║  3. Preencha os IDs dos calendários em CONFIG abaixo            ║
// ║  4. Clique em Implantar → Nova implantação → Web App            ║
// ║     • Executar como: Eu mesmo                                    ║
// ║     • Quem tem acesso: Qualquer pessoa                           ║
// ║  5. Copie a URL gerada e cole em BRIEFINGS_URL no HTML          ║
// ╚══════════════════════════════════════════════════════════════════╝

// ─── CONFIG — edite aqui ────────────────────────────────────────────
const CONFIG = {
  // IDs dos seus calendários com eventos de campanha.
  // Para pegar o ID: Google Calendar → ⚙ Configurações do calendário
  //                  → rolar até "ID do calendário"
  calendarIds: [
    "primary",           // calendário principal (substitua se necessário)
    // "abc123@group.calendar.google.com",  // adicione mais se precisar
  ],

  // Janela de datas a buscar (ajuste conforme os meses do calendário)
  startDate: new Date("2026-05-01"),
  endDate:   new Date("2026-09-30"),

  // Palavras no título que identificam reuniões (não campanhas) — serão ignoradas
  excludeKeywords: [
    "reunião", "reunion", "meeting", "alinhamento", "sync",
    "review", "revisão", "check-in", "standup",
  ],
};
// ────────────────────────────────────────────────────────────────────

/** Ponto de entrada HTTP — retorna JSONP */
function doGet(e) {
  const cb = (e && e.parameter && e.parameter.callback) || "onBriefings";
  try {
    const data = getBriefings();
    const json = JSON.stringify(data);
    return ContentService
      .createTextOutput(cb + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (err) {
    Logger.log("doGet error: " + err);
    return ContentService
      .createTextOutput(cb + '({"_error":"' + err.message + '"})')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

/** Lê todos os calendários configurados e retorna mapa de briefings */
function getBriefings() {
  const result = {};
  const exclude = CONFIG.excludeKeywords.map(k => k.toLowerCase());

  for (const calId of CONFIG.calendarIds) {
    let cal;
    try {
      cal = calId === "primary"
        ? CalendarApp.getDefaultCalendar()
        : CalendarApp.getCalendarById(calId);
    } catch (e) {
      Logger.log("Calendário não encontrado: " + calId);
      continue;
    }
    if (!cal) continue;

    const events = cal.getEvents(CONFIG.startDate, CONFIG.endDate);

    for (const event of events) {
      const title = event.getTitle().trim();
      if (!title) continue;

      // Pula reuniões e alinhamentos
      const titleLower = title.toLowerCase();
      if (exclude.some(kw => titleLower.includes(kw))) continue;

      const description = event.getDescription() || "";
      const url = extractGoogleUrl(description);
      if (!url) continue;  // só processa eventos com link do Drive/Docs

      const dateStr = Utilities.formatDate(
        event.getStartTime(), Session.getScriptTimeZone(), "dd/MM"
      );

      // Chave = título normalizado (lowercase, sem acentos extras)
      // Guarda a entrada mais recente se o mesmo título aparecer várias vezes
      const key = title;
      result[key] = {
        briefingUrl: url,
        date: dateStr,
        calendar: cal.getName(),
      };
    }
  }

  result["_updatedAt"] = new Date().toISOString();
  return result;
}

/** Extrai o primeiro link Google Docs / Drive de um bloco de texto */
function extractGoogleUrl(text) {
  // Remove HTML tags da descrição (Calendar às vezes retorna HTML)
  const plain = text.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");

  const patterns = [
    /https:\/\/docs\.google\.com\/document\/d\/[A-Za-z0-9_\-]+[^\s"<>]*/,
    /https:\/\/docs\.google\.com\/spreadsheets\/d\/[A-Za-z0-9_\-]+[^\s"<>]*/,
    /https:\/\/docs\.google\.com\/presentation\/d\/[A-Za-z0-9_\-]+[^\s"<>]*/,
    /https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)[A-Za-z0-9_\-]+[^\s"<>]*/,
  ];

  for (const pat of patterns) {
    const m = plain.match(pat);
    if (m) return m[0].replace(/[,;)\]>'"]+$/, ""); // remove pontuação final
  }
  return null;
}

/** Teste manual — rode no editor para ver o resultado no log */
function testBriefings() {
  const data = getBriefings();
  Logger.log("Total de campanhas com briefing: " +
    (Object.keys(data).filter(k => !k.startsWith("_")).length));
  Logger.log(JSON.stringify(data, null, 2));
}

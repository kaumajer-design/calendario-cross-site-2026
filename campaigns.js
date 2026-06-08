/* ╔════════════════════════════════════════════════════════════════╗
   ║  CALENDARIO MULTI-SITE · 2026                                   ║
   ║  Sites: MLB (Brasil), MLA (Argentina), MCO (Colombia), MLC (Chile) ║
   ║  Canal = COLOR · Tipo (Full/Flex/Coleta/XD) = BADGE             ║
   ╚════════════════════════════════════════════════════════════════╝ */

window.SITES = {
  MLB: {
    code: "MLB",
    name: "Brasil",
    flag: "🇧🇷",
    flagColors: { top: "#009C3B", mid: "#FFDF00", text: "#002776" },
    owners: {
      flex:   "Raysa Calmon",
      full:   "Matheus Gonçalves",
      coleta: "Raquel Ribeiro",
      me1:    "Carolina Hemman",
      xd:     "Carolina Hemman",
    },
  },
  MLA: {
    code: "MLA",
    name: "Argentina",
    flag: "🇦🇷",
    flagColors: { top: "#74ACDF", mid: "#FFFFFF", text: "#74ACDF" },
    owners: {
      flex:   "Eloy Segre",
      full:   "Florencia Campos",
      coleta: "Florencia Haefeli",
      xd:     "Eloy Segre",
    },
  },
  MCO: {
    code: "MCO",
    name: "Colombia",
    flag: "🇨🇴",
    flagColors: { top: "#FFCD00", mid: "#003893", text: "#CE1126" },
    owners: {
      flex:   "Juliana Carvajal",
      full:   "Karen Polanco",
      coleta: "Florencia Haefeli",
    },
  },
  MLC: {
    code: "MLC",
    name: "Chile",
    flag: "🇨🇱",
    flagColors: { top: "#FFFFFF", mid: "#0039A6", text: "#D52B1E" },
    owners: {
      // MLC uses ad-hoc owners already encoded in items (Sebas, Diego, Dani, Génesis, Cato)
    },
  },
};

/* Helper: week shells for Junio 2026 */
const W_JUN = [
  { label: "Semana 1", days: [
    { dow: "LUN", date: "01/06" }, { dow: "MAR", date: "02/06" },
    { dow: "MIÉ", date: "03/06" }, { dow: "JUE", date: "04/06" },
    { dow: "VIE", date: "05/06" },
  ]},
  { label: "Semana 2", days: [
    { dow: "LUN", date: "08/06" }, { dow: "MAR", date: "09/06" },
    { dow: "MIÉ", date: "10/06" }, { dow: "JUE", date: "11/06" },
    { dow: "VIE", date: "12/06" },
  ]},
  { label: "Semana 3", days: [
    { dow: "LUN", date: "15/06" }, { dow: "MAR", date: "16/06" },
    { dow: "MIÉ", date: "17/06" }, { dow: "JUE", date: "18/06" },
    { dow: "VIE", date: "19/06" },
  ]},
  { label: "Semana 4", days: [
    { dow: "LUN", date: "22/06" }, { dow: "MAR", date: "23/06" },
    { dow: "MIÉ", date: "24/06" }, { dow: "JUE", date: "25/06" },
    { dow: "VIE", date: "26/06" },
  ]},
  { label: "Semana 5", days: [
    { dow: "LUN", date: "29/06" }, { dow: "MAR", date: "30/06" },
    { dow: "MIÉ", date: "01/07" }, { dow: "JUE", date: "02/07" },
    { dow: "VIE", date: "03/07" },
  ]},
];

/* Make weekly items from a flat campaigns list. Items get distributed by week index. */
function makeMonth(label, weekShells, itemsByWeek) {
  return {
    monthLabel: label,
    weeks: weekShells.map((w, i) => ({ ...w, items: itemsByWeek[i] || [] })),
  };
}

/* ╔══════════════════════════════════════════════╗
   ║ MLB · BRASIL                                  ║
   ╚══════════════════════════════════════════════╝ */
const MLB_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 — 01/06 a 05/06 */
  [
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex e Coleta", briefingUrl: "https://docs.google.com/document/d/1teQv77aB6ige3I3Kmx3A236D54u_uPb6Rd4XNGlXAhA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/15uLSHqIMh5nzOTn-Xo8MS58ULBbxErUZxVqLsGIWVfo", context: "Inicio do mes â€” sellers precisam conhecer o calendario comercial para se preparar e capturar oportunidades de venda." }, // 03/06
    { col: 4, span: 1, holiday: true, name: "Corpus Christi" }, // 04/06
    { col: 5, span: 1, holiday: true, name: "Feriadão" }, // 05/06 (only Flex)
  ],
  /* Semana 2 — 08/06 a 12/06 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Reforço Dia dos Namorados Flex", briefingUrl: "https://docs.google.com/document/d/1CJQKZGRHH42lWGNG3TSOGDahMsNYzUOfjsy5irvB72Y/edit" }, // 08/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Foco Mundial · Full e Flex", briefingUrl: "https://docs.google.com/document/d/19ztRKbRLr1cTl6ENjxRIgbZeWpt5aSqtTMks-3_CDd4/edit" }, // 10/06
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Ativar Publicações Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
  ],
  /* Semana 3 — 15/06 a 19/06 */
  [
    { col: 3, span: 3, ch: "CDN",   types: ["full"], name: "7.7 Foco Mundial CDN", briefingUrl: "https://docs.google.com/document/d/1ldQDs9taYFxiwMFrbOy5eZzpDrIEiu7OgJ4CnME7srM/edit" }, // 17-19/06
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Descontaço apenas Full", briefingUrl: "https://docs.google.com/document/d/1gkqcTszFTa1PyV7uTWs05BKySBd7WaHziE-15TwVVp4/edit" }, // 18/06
    { col: 5, span: 1, ch: "EMAIL", types: ["flex"], name: "Refuerzo Fiestas Juninas Flex", briefingUrl: "https://docs.google.com/document/d/1gAkWSQWVGxPEv-om7GOm_d6xIP6WSUPV-cthBdUo6G0/edit" }, // 19/06
  ],
  /* Semana 4 — 22/06 a 26/06 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Refuerzo 7.7 Foco Mundial Flex" }, // 22/06
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "Férias Multicategoria", briefingUrl: "https://docs.google.com/document/d/1gN8WwLRhm-gwHVvvYp755nrjrgCmtFVQeAeE92zQaYs/edit" }, // 24/06
  ],
  /* Semana 5 — 29/06 a 03/07 */
  [
    { col: 1, span: 1, ch: "PUSH",  types: ["flex"], name: "Descontaço", briefingUrl: "https://docs.google.com/document/d/1YPfT94eW77CTBch68HxfU0-VoYULMl-6NCg73v9Etvk/edit" }, // 29/06
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios · Categorías H&B / Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLA · ARGENTINA                               ║
   ╚══════════════════════════════════════════════╝ */
const MLA_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI", briefing: "Cierre alto (para quienes alcanzaron la meta y continúan recibiendo el beneficio);", targetDesc: "MCO - Comunicaciones Eventos - Campañas MLA - Comunicaciones Eventos - Campañas" }, // 01/06
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI" }, // 01/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Coleta", targetUrl: "https://docs.google.com/spreadsheets/d/15uLSHqIMh5nzOTn-Xo8MS58ULBbxErUZxVqLsGIWVfo", briefing: "comunicar as principais campanhas do mês.", context: "Inicio del mes â€” sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta.", targetDesc: "MCO_NEWSLETTER_0306 MLB_NEWSLETTER_0206" }, // 03/06
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Aviso de Activación", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 03/06
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Full Nueva Zona - Tucumán", owner: ["Florencia Campos", "Brenda Almaraz"] }, // 04/06
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["full"], name: "Full Week 6'", briefingUrl: "https://docs.google.com/document/d/1jja6APgLrt66VhRFKbCXbmLPtmjEE7oYTHmtFFG5efw/edit", briefing: "reforzar el abastecimiento de stock para Full Week por inbound." }, // 08/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Foco Mundial · Full y Flex", briefingUrl: "https://docs.google.com/document/d/19ztRKbRLr1cTl6ENjxRIgbZeWpt5aSqtTMks-3_CDd4/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 10/06
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 5, span: 1, ch: "EMAIL", types: ["flex"], name: "Día del Padre Flex", briefingUrl: "https://docs.google.com/document/d/1iX55Im9TdyZK3RARL_rWSfTHhjxjWJM1EadIAvdCzEE/edit" }, // 12/06
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, holiday: true, name: "Güemes" }, // 15/06
    { col: 1, span: 3, ch: "CDN",   types: ["full","flex"], name: "Refuerzo Día del Padre Full / Flex", targetUrl: "https://docs.google.com/spreadsheets/d/1bPYcHVo9NRiJPHO0wg11pL5k6Dcc_X6dDRKpaKWs1Wk" }, // 15-17/06
    { col: 3, span: 1, ch: "WPP",   types: ["full","flex"], name: "Foco Mundial · Full y Flex", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 17/06
  ],
  /* Semana 4 */
  [
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Status Actual", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "status da meta do seller." }, // 23/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni · Optin New Sellers", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "aviso do projeto para sellers novos." }, // 23/06
  ],
  /* Semana 5 — XD/XDDO */
  [
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios · Categorías H&B / Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MCO · COLOMBIA                                ║
   ╚══════════════════════════════════════════════╝ */
const MCO_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI", briefing: "Cierre alto (para quienes alcanzaron la meta y continúan recibiendo el beneficio);", targetDesc: "MCO - Comunicaciones Eventos - Campañas MLA - Comunicaciones Eventos - Campañas" }, // 01/06
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI" }, // 01/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Coleta", targetUrl: "https://docs.google.com/spreadsheets/d/15uLSHqIMh5nzOTn-Xo8MS58ULBbxErUZxVqLsGIWVfo", briefing: "comunicar as principais campanhas do mês.", context: "Inicio del mes â€” sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta.", targetDesc: "MCO_NEWSLETTER_0306 MLB_NEWSLETTER_0206" }, // 03/06
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Aviso de Activación", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 03/06
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, holiday: true, name: "Corpus Christi" }, // 08/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Promos & Primas · Full & Flex" }, // 09/06
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 3, span: 1, ch: "WPP",   types: ["flex"], name: "Día del Padre Flex · Último llamado", briefingUrl: "https://docs.google.com/document/d/1HT8pT5ms0fLvass5cmAvrCFTzsXI2qoIdla1jENheys/edit" }, // 10/06
    { col: 3, span: 3, ch: "CDN",   types: ["full","flex","coleta"], name: "Refuerzo Mundial · Full, Flex y Coleta" }, // 10-12/06
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, holiday: true, name: "Sagrado Corazón de Jesús" }, // 15/06
    { col: 3, span: 1, holiday: true, name: "Juego Mundial MCO" }, // 17/06
    { col: 3, span: 3, ch: "CDN",   types: ["full"], name: "Refuerzo 7.7 Promos & Primas" }, // 17-19/06
  ],
  /* Semana 4 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "7.7 Refuerzo Promos & Primas" }, // 22/06
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Status Actual", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "status da meta do seller." }, // 23/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni · Optin New Sellers", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "aviso do projeto para sellers novos." }, // 23/06
    { col: 2, span: 1, holiday: true, name: "Juego Mundial MCO" }, // 23/06
  ],
  /* Semana 5 */
  [
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios · Categorías H&B / Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLC · CHILE — pulled from v2 dataset          ║
   ╚══════════════════════════════════════════════╝ */
const MLC_JUN_2026 = {
  monthLabel: "Junio 2026",
  weeks: [
    {
      ...W_JUN[0],
      items: [
        { col: 1, span: 1, ch: "WPP",   types: ["full"], name: "BC Invierno · Seguimiento + 2 Colectas nuevo mes", briefingUrl: "https://docs.google.com/document/d/1a4WfpcTjAnaEtMoF7bG4eRHiTjr-6UntlyUceoNlCuU/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
        { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Colecta", targetUrl: "https://docs.google.com/spreadsheets/d/15uLSHqIMh5nzOTn-Xo8MS58ULBbxErUZxVqLsGIWVfo", briefing: "comunicar as principais campanhas do mês.", context: "Inicio del mes â€” sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta.", targetDesc: "MCO_NEWSLETTER_0306 MLB_NEWSLETTER_0206" }, // 03/06
        { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "BC Cyber - Cierre Bonificación" }, // 05/06
        { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "POC Estrella Value Prop", briefingUrl: "https://docs.google.com/document/d/1bN-OWxaw2MCot8Onf-Nl7tQiWRhdh5SjULZWLuWTSsg/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
      ],
    },
    {
      ...W_JUN[1],
      items: [
        { col: 5, span: 1, ch: "WPP",   types: ["full"], name: "POC Estrella Recordatorio" }, // 12/06
        { col: 3, span: 1, ch: "WPP",   types: ["flex"], name: "Día del Padre Flex · último llamado", briefingUrl: "https://docs.google.com/document/d/11qII0pLscovBP86xDMi8VBjUoOHzH92kGSyqVmoko1U/edit" },
        { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
        { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
        { col: 5, span: 1, ch: "EMAIL", types: ["coleta"], name: "Refuerzo H&B · Colecta" },
        { col: 5, span: 1, ch: "WPP",   types: ["coleta"], name: "Refuerzo H&B · Colecta" },
        { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "Reposición quiebre stock para DDP", briefingUrl: "https://docs.google.com/document/d/1v37j4JX_3cXwOfhzztiQdSu_2p5nZC-YmaciP8db3j8/edit" },
      ],
    },
    {
      ...W_JUN[2],
      items: [
        { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno Seguimiento + Recordatorio colectas / Urgencia", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk", targetDesc: "SELLERS  + Propuesta Calendario | MLC- Free WH SKU Estrella (TBC se haverá alguma atualização com Diego)" },
        { col: 4, span: 1, ch: "EMAIL", types: ["coleta"], name: "Hunting Colecta sábado", briefingUrl: "https://docs.google.com/document/d/1ega9GjyBN-8tIU5GdvvtiYIkZjDTNI0VOUdvO6ClTxU/edit" },
        { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "BC Invierno · Recordatorio últimos días", briefingUrl: "https://docs.google.com/document/d/1a4WfpcTjAnaEtMoF7bG4eRHiTjr-6UntlyUceoNlCuU/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk", briefing: "Los sellers no se abastecen con la agresividad necesaria para asegurar el stock de la temporada de invierno debido al miedo a los costos de almacenamiento prolongado (aging) del inventario remanente. Además, la gestión operativa de metas rígidas por dominio dificulta y ralentiza el ingreso de mercadería. Ofreceremos un retiro de excedentes bonificado a aquellos sellers que cumplan su meta de inbound en el período establecido, buscando asegurar el stock necesario para la temporada. Para facilitar el cumplimiento de la meta, se habilitarán dos colectas bonificadas opcionales mensuales para cada seller participante.", targetDesc: "BBDD INVIERNO.xlsx" },
      ],
    },
    {
      ...W_JUN[3],
      items: [
        { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "POC Estrella Recordatorio" }, // 24/06
        { col: 1, span: 1, ch: "EMAIL", types: ["full"], target: "T1", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
        { col: 1, span: 1, ch: "EMAIL", types: ["full"], target: "T2", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
        { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "Mundial · Full & Flex", briefingUrl: "https://docs.google.com/document/d/1l-Jbe7DQd_W1GJoIOP7XavFU24zJBsDapG8pG_wPLK8/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
        { col: 5, span: 1, ch: "WPP",   types: ["full"], target: "T1", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
        { col: 5, span: 1, ch: "WPP",   types: ["full"], target: "T2", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
      ],
    },
    {
      ...W_JUN[4],
      items: [
        { col: 1, span: 1, holiday: true, name: "São Pedro y São Paulo" },
        { col: 3, span: 1, ch: "WPP",   types: ["full"], target: "T1", name: "BC DDN Inicio", note: "PENDIENTE BRIEFING" },
        { col: 3, span: 1, ch: "WPP",   types: ["full"], target: "T2", name: "BC DDN Inicio", note: "PENDIENTE BRIEFING" },
        { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno cierre · Cumplió", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk", targetDesc: "BBDD INVIERNO.xlsx" }, // 02/07
        { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno cierre · No Cumplió", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk", targetDesc: "BBDD INVIERNO.xlsx" }, // 02/07
        { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "POC Estrella - Status Ahorro WH" }, // 30/06
        { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Activación nuevos dominios H&B / Preferences" }, // 30/06-02/07
      ],
    },
  ],
};

/* ╔══════════════════════════════════════════════╗
   ║ TOP-LEVEL DATA                                ║
   ╚══════════════════════════════════════════════╝ */
/* Empty month placeholder — shows the week shells with no items.
   Replace per-site as briefings come in. */
const EMPTY = (label, weekShells) => makeMonth(label, weekShells, [[],[],[],[],[]]);
const W_EMPTY = (datesByWeek) => datesByWeek.map((wk, i) => ({
  label: "Semana " + (i + 1),
  days: wk.map(([dow, date]) => ({ dow, date })),
}));

/* Generic placeholder shells for upcoming months (Mon–Fri only, simplified) */
const W_JUL = W_EMPTY([
  [["LUN","29/06"],["MAR","30/06"],["MIÉ","01/07"],["JUE","02/07"],["VIE","03/07"]],
  [["LUN","06/07"],["MAR","07/07"],["MIÉ","08/07"],["JUE","09/07"],["VIE","10/07"]],
  [["LUN","13/07"],["MAR","14/07"],["MIÉ","15/07"],["JUE","16/07"],["VIE","17/07"]],
  [["LUN","20/07"],["MAR","21/07"],["MIÉ","22/07"],["JUE","23/07"],["VIE","24/07"]],
  [["LUN","27/07"],["MAR","28/07"],["MIÉ","29/07"],["JUE","30/07"],["VIE","31/07"]],
]);
const W_AGO = W_EMPTY([
  [["LUN","03/08"],["MAR","04/08"],["MIÉ","05/08"],["JUE","06/08"],["VIE","07/08"]],
  [["LUN","10/08"],["MAR","11/08"],["MIÉ","12/08"],["JUE","13/08"],["VIE","14/08"]],
  [["LUN","17/08"],["MAR","18/08"],["MIÉ","19/08"],["JUE","20/08"],["VIE","21/08"]],
  [["LUN","24/08"],["MAR","25/08"],["MIÉ","26/08"],["JUE","27/08"],["VIE","28/08"]],
  [["LUN","31/08"],["MAR","01/09"],["MIÉ","02/09"],["JUE","03/09"],["VIE","04/09"]],
]);
const W_MAY = W_EMPTY([
  [["LUN","04/05"],["MAR","05/05"],["MIÉ","06/05"],["JUE","07/05"],["VIE","08/05"]],
  [["LUN","11/05"],["MAR","12/05"],["MIÉ","13/05"],["JUE","14/05"],["VIE","15/05"]],
  [["LUN","18/05"],["MAR","19/05"],["MIÉ","20/05"],["JUE","21/05"],["VIE","22/05"]],
  [["LUN","25/05"],["MAR","26/05"],["MIÉ","27/05"],["JUE","28/05"],["VIE","29/05"]],
  [["LUN","01/06"],["MAR","02/06"],["MIÉ","03/06"],["JUE","04/06"],["VIE","05/06"]],
]);

const MONTHS_ALL = ["Mayo 2026", "Junio 2026", "Julio 2026", "Agosto 2026"];

function buildSiteMonths(junioData) {
  return {
    "Mayo 2026":   EMPTY("Mayo 2026",   W_MAY),
    "Junio 2026":  junioData,
    "Julio 2026":  EMPTY("Julio 2026",  W_JUL),
    "Agosto 2026": EMPTY("Agosto 2026", W_AGO),
  };
}

window.DATA = {
  defaultSite: "MLB",
  defaultMonth: "Junio 2026",
  months: MONTHS_ALL,
  bySite: {
    MLB: buildSiteMonths(MLB_JUN_2026),
    MLA: buildSiteMonths(MLA_JUN_2026),
    MCO: buildSiteMonths(MCO_JUN_2026),
    MLC: buildSiteMonths(MLC_JUN_2026),
  },
};

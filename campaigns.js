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
    { col: 1, span: 1, ch: “EMAIL”, types: [“full”], name: “BC Benefícios Inbound FDS · Sáb T1”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 01/06
    { col: 1, span: 5, ch: “CDN”,   types: [“full”], name: “BC Benefícios Inbound FDS · Sáb T1”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 01-05/06 CDN
    { col: 2, span: 1, chs: [“EMAIL”,”CDN”], types: [“full”], name: “BC Benefícios Inbound FDS · Dom T2”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 02/06
    { col: 3, span: 1, ch: “EMAIL”, types: [“full”,”flex”,”coleta”], name: “Newsletter Full, Flex e Coleta”, briefingUrl: “https://docs.google.com/document/d/1szQ-8xu5RYkI_CqU9RxZU4BkjB445hNCpv1T_r04Cfg/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1DsvVGL4bgPJ0WIBMQEnSxqPezaoen5s1_cS4C1NASvE/edit”, context: “Inicio do mes â€” sellers precisam conhecer o calendario comercial para se preparar e capturar oportunidades de venda.” }, // 03/06
    { col: 3, span: 3, ch: “WPP”,   types: [“full”], name: “Hunting Item” }, // 03-05/06
    { col: 4, span: 1, holiday: true, name: “Corpus Christi” }, // 04/06
    { col: 5, span: 1, holiday: true, name: “Feriadão” }, // 05/06
    { col: 5, span: 1, ch: “EMAIL”, types: [“full”], name: “Items Forçados a Estrela”, briefingUrl: “https://docs.google.com/document/d/1zfY_xgp75BwfquOvqEd0vXJVMukK6CAHToSBS2f3TDE/edit”, wishlist: true }, // 05/06
    { col: 5, span: 1, chs: [“EMAIL”,”WPP”], types: [“full”], name: “BC Benefícios Inbound FDS · Dom T2”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 05/06
  ],
  /* Semana 2 — 08/06 a 12/06 */
  [
    { col: 1, span: 1, ch: “WPP”,   types: [“flex”], name: “Reforço Dia dos Namorados Flex”, briefingUrl: “https://docs.google.com/document/d/1CJQKZGRHH42lWGNG3TSOGDahMsNYzUOfjsy5irvB72Y/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/10cD3pu0h2isdevoT3NtrmQn8W_dJOBLRc53ffyYA7pc/edit” }, // 08/06
    { col: 1, span: 1, chs: [“EMAIL”,”CDN”], types: [“xd”], name: “Migração J&T D-7 Wave 2”, briefingUrl: “https://docs.google.com/document/d/1ujUpYqvlofJCfhTr7dCloJznA4Ex6ACfQ_GizqmUjUo/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1zN5iO4mgsOKqhl0n5YM445EWQwQL8bENwxVGwPwFmFw/edit”, wishlist: true }, // 08/06
    { col: 2, span: 1, ch: “CDN”,   types: [“xd”], name: “J&T Caso 2: Agência Mudou Endereço”, briefingUrl: “https://docs.google.com/document/d/1sm5EU_DPFX6Qb46UgnWeFwOPLHFbzXzqgQ3Zy0WqUhE/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/10H-hqfTQMku_Xm1BP0J9xWuiMGxmflcK01pJHvWNE84/edit”, wishlist: true }, // 09/06
    { col: 3, span: 1, ch: “EMAIL”, types: [“full”,”flex”], name: “7.7 Foco Mundial · Full e Flex”, briefingUrl: “https://docs.google.com/document/d/1M61xOZjhMkiYjsRHo1YXcAQwGwDqzhEYMvKMqML56Yc/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/16ggLWyk6QsjBg5y6ARY5VPd1WvrPfuQVr_7v1k8lWHM/edit”, briefing: “Ano de Copa do Mundo é uma oportunidade no calendário comercial, gerando alto fluxo de compras. Dar visibilidade aos vendedores sobre a campanha e itens foco.” }, // 10/06
    { col: 4, span: 1, ch: “EMAIL”, types: [“flex”], name: “Ativar Publicações Flex”, briefingUrl: “https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit” }, // 11/06
    { col: 4, span: 1, ch: “WPP”,   types: [“flex”], name: “Ativar Publicações Flex”, briefingUrl: “https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit” }, // 11/06
    { col: 4, span: 1, chs: [“CDN”,”WPP”], types: [“full”], name: “Items Forçados a Estrela”, briefingUrl: “https://docs.google.com/document/d/1zfY_xgp75BwfquOvqEd0vXJVMukK6CAHToSBS2f3TDE/edit”, wishlist: true }, // 11/06
    { col: 4, span: 1, ch: “EMAIL”, types: [“flex”], name: “Forçar Flex · Ativação Massiva de Itens”, briefingUrl: “https://docs.google.com/document/d/1Jwsmgkp0FgNl8dMP6_HHjPWR3sduEQI33RhTghS4HZU/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1fnIMxxN9i3gLD0y01vFt56_hCEI247frhmh5lOl1hiU/edit”, wishlist: true }, // 11/06
    { col: 5, span: 1, ch: “WPP”,   types: [“full”], name: “BC Benefícios Inbound FDS · Dom T2”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 12/06
  ],
  /* Semana 3 — 15/06 a 19/06 */
  [
    { col: 1, span: 1, chs: [“EMAIL”,”CDN”], types: [“xd”], name: “Migração J&T Lançamento Wave 2”, briefingUrl: “https://docs.google.com/document/d/1ujUpYqvlofJCfhTr7dCloJznA4Ex6ACfQ_GizqmUjUo/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1zN5iO4mgsOKqhl0n5YM445EWQwQL8bENwxVGwPwFmFw/edit”, wishlist: true }, // 15/06
    { col: 1, span: 1, ch: “EMAIL”, types: [“full”], name: “Bloqueio Colchões”, briefingUrl: “https://docs.google.com/document/d/1AVT4zRxIhQfBORI0itNDT6CSOqxoIGsJkDyV_mTuaIA/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1QfqAV-CkXpauzkUZRzagw0Rwl7abFE6zy3nd1OE92mw/edit”, wishlist: true }, // 15/06
    { col: 3, span: 3, ch: “CDN”,   types: [“full”], name: “7.7 Foco Mundial CDN”, briefingUrl: “https://docs.google.com/document/d/19ztRKbRLr1cTl6ENjxRIgbZeWpt5aSqtTMks-3_CDd4/edit” }, // 17-19/06
    { col: 4, span: 1, ch: “EMAIL”, types: [“full”], name: “Descontaço apenas Full”, briefingUrl: “https://docs.google.com/document/d/1gkqcTszFTa1PyV7uTWs05BKySBd7WaHziE-15TwVVp4/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1v7SS8o7v_9KmG6weyXaX6gqkVNTi1XPYHwO0yUI2j9s/edit”, briefing: “o Descontaço é um dos eventos sazonais do Mercado Livre, oferecendo visibilidade na campanha, entrega rápida e elegibilidade ao frete grátis aos vendedores.” }, // 18/06
    { col: 5, span: 1, ch: “EMAIL”, types: [“flex”], name: “Refuerzo Fiestas Juninas Flex”, briefingUrl: “https://docs.google.com/document/d/1ZfuE1_KfJ_MiOM5xBxiMmB3MpTsgCS5w8WO515Zh5EE/edit” }, // 19/06
    { col: 5, span: 1, ch: “WPP”,   types: [“full”], name: “BC Benefícios Inbound FDS · Dom T2”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 19/06
  ],
  /* Semana 4 — 22/06 a 26/06 */
  [
    { col: 1, span: 1, ch: “WPP”,   types: [“flex”], name: “Refuerzo 7.7 Foco Mundial Flex”, briefingUrl: “https://docs.google.com/document/d/19ztRKbRLr1cTl6ENjxRIgbZeWpt5aSqtTMks-3_CDd4/edit”, targetUrl: “https://docs.google.com/spreadsheets/d/1qEjiZdPiAvJM5Mfcv9cJHukdSFN0M5Edt-QzjhBH8wI/edit” }, // 22/06
    { col: 3, span: 1, ch: “WPP”,   types: [“full”], name: “Férias Multicategoria”, briefingUrl: “https://docs.google.com/document/d/1gN8WwLRhm-gwHVvvYp755nrjrgCmtFVQeAeE92zQaYs/edit” }, // 24/06
    { col: 5, span: 1, ch: “WPP”,   types: [“full”], name: “BC Benefícios Inbound FDS · Dom T2”, briefingUrl: “https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit”, wishlist: true }, // 26/06
  ],
  /* Semana 5 — 29/06 a 03/07 */
  [
    { col: 1, span: 1, ch: "PUSH",  types: ["flex"], name: "Descontaço Apenas Flex", briefingUrl: "https://docs.google.com/document/d/1YPfT94eW77CTBch68HxfU0-VoYULMl-6NCg73v9Etvk/edit" }, // 29/06
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Categorias H&B" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLA · ARGENTINA                               ║
   ╚══════════════════════════════════════════════╝ */
const MLA_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta", briefingUrl: "https://docs.google.com/document/d/1bPTIVOwI2buK9TF4LQ5jU1qb25TNd033eajBAxYh-lA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI", briefing: "Cierre alto (para quienes alcanzaron la meta y continúan recibiendo el beneficio);", targetDesc: "MCO - Comunicaciones Eventos - Campañas MLA - Comunicaciones Eventos - Campañas" }, // 01/06
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja", briefingUrl: "https://docs.google.com/document/d/1bPTIVOwI2buK9TF4LQ5jU1qb25TNd033eajBAxYh-lA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI" }, // 01/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Coleta", briefingUrl: "https://docs.google.com/document/d/1szQ-8xu5RYkI_CqU9RxZU4BkjB445hNCpv1T_r04Cfg/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1DsvVGL4bgPJ0WIBMQEnSxqPezaoen5s1_cS4C1NASvE/edit", briefing: "comunicar as principais campanhas do mês.", context: "Inicio del mes â€” sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta.", targetDesc: "MCO_NEWSLETTER_0306 MLB_NEWSLETTER_0206" }, // 03/06
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Aviso de Activación", briefingUrl: "https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 03/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Cierre BC WH + Col Feriados", briefingUrl: "https://docs.google.com/document/d/1aWQHK0Kv8zoaz6opkUsskWf1F33Hwb76zq3dnu1QJzk/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ/edit", wishlist: true }, // 02/06
    { col: 3, span: 3, ch: "WPP",   types: ["full"], name: "Hunting Item", briefingUrl: "https://docs.google.com/document/d/1w6D9ldjgu_G9Yq35JLFPnihX2EmTts3-FFLy7iCJ-BE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1HymuOYTyIgjEJVNa2mOBW-kganmKKWt5em8Cy1lSfuw/edit" }, // 03-05/06
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Nuevas Zonas de Colecta Full - Tucumán - Sin Apagado SPD", briefingUrl: "https://docs.google.com/document/d/1aZs8NuNnt7FFwqusgF0SCPBnIXow8eRiFe7eUFA0UjA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1bPYcHVo9NRiJPHO0wg11pL5k6Dcc_X6dDRKpaKWs1Wk/edit", owner: ["Florencia Campos", "Brenda Almaraz"] }, // 04/06
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Nuevas Zonas de Colecta Full - Tucumán - Apagado SPD", briefingUrl: "https://docs.google.com/document/d/1aZs8NuNnt7FFwqusgF0SCPBnIXow8eRiFe7eUFA0UjA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1bPYcHVo9NRiJPHO0wg11pL5k6Dcc_X6dDRKpaKWs1Wk/edit", owner: ["Florencia Campos", "Brenda Almaraz"] }, // 04/06
  ],
  /* Semana 2 */
  [
    { col: 1, span: 5, ch: "EMAIL", types: ["full"], name: "Risky Churn T1", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 08-12/06
    { col: 1, span: 5, ch: "EMAIL", types: ["full"], name: "Risky Churn T2", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 08-12/06
    { col: 1, span: 1, ch: "WPP",   types: ["full"], name: "Full Week 6'", briefingUrl: "https://docs.google.com/document/d/1jja6APgLrt66VhRFKbCXbmLPtmjEE7oYTHmtFFG5efw/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1Q52GGx7Vip6dFhnOfV1P1Bpg-CvmASA-uXW1PXNvra8/edit", briefing: "reforzar el abastecimiento de stock para Full Week por inbound." }, // 08/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Foco Mundial · Full y Flex", briefingUrl: "https://docs.google.com/document/d/1M61xOZjhMkiYjsRHo1YXcAQwGwDqzhEYMvKMqML56Yc/edit", targetUrl: "https://docs.google.com/spreadsheets/d/16ggLWyk6QsjBg5y6ARY5VPd1WvrPfuQVr_7v1k8lWHM/edit", briefing: "Ano de Copa do Mundo é uma oportunidade no calendário comercial, gerando alto fluxo de compras. Dar visibilidade aos vendedores sobre a campanha e itens foco." }, // 10/06
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 5, span: 1, ch: "EMAIL", types: ["flex"], name: "DDP Flex", briefingUrl: "https://docs.google.com/document/d/1iX55Im9TdyZK3RARL_rWSfTHhjxjWJM1EadIAvdCzEE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1zar9vpbvG66Mjf9_pa8hKP5PRwzBf5k8MOc_rDWcQoo/edit" }, // 12/06
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Cierre BC WH + Col · Target Mayo", briefingUrl: "https://docs.google.com/document/d/1aWQHK0Kv8zoaz6opkUsskWf1F33Hwb76zq3dnu1QJzk/edit", targetUrl: "https://docs.google.com/spreadsheets/d/18j9po-lQ2ZUQoiGzyHR6elgdzMiotBEE38_gkdSpUxE/edit", wishlist: true }, // 12/06
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, holiday: true, name: "Güemes" }, // 15/06
    { col: 1, span: 3, ch: "CDN",   types: ["flex"], name: "Refuerzo DDP Flex", briefingUrl: "https://docs.google.com/document/d/1iX55Im9TdyZK3RARL_rWSfTHhjxjWJM1EadIAvdCzEE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1bPYcHVo9NRiJPHO0wg11pL5k6Dcc_X6dDRKpaKWs1Wk" }, // 15-17/06
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Risky Churn T1", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 16/06
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Risky Churn T2", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 16/06
    { col: 3, span: 1, ch: "WPP",   types: ["full","flex"], name: "Foco Mundial · Full y Flex", briefingUrl: "https://docs.google.com/document/d/1M61xOZjhMkiYjsRHo1YXcAQwGwDqzhEYMvKMqML56Yc/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1h8Ar_aweDHgXaZDpZNCv6Z-JQqRDP7E_TTyUHMpzM8E/edit", briefing: "El año de la Copa del Mundo es una oportunidad en el calendario comercial, generando un alto flujo de compras. Dar visibilidad a los vendedores sobre la campaña." }, // 17/06
  ],
  /* Semana 4 */
  [
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Status Actual", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "status da meta do seller." }, // 23/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni · Optin New Sellers", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "aviso do projeto para sellers novos." }, // 23/06
  ],
  /* Semana 5 — XD/XDDO */
  [
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Categorias H&B" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MCO · COLOMBIA                                ║
   ╚══════════════════════════════════════════════╝ */
const MCO_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta", briefingUrl: "https://docs.google.com/document/d/1bPTIVOwI2buK9TF4LQ5jU1qb25TNd033eajBAxYh-lA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI", briefing: "Cierre alto (para quienes alcanzaron la meta y continúan recibiendo el beneficio);", targetDesc: "MCO - Comunicaciones Eventos - Campañas MLA - Comunicaciones Eventos - Campañas" }, // 01/06
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja", briefingUrl: "https://docs.google.com/document/d/1bPTIVOwI2buK9TF4LQ5jU1qb25TNd033eajBAxYh-lA/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1Ki05CLWwCC0VLUtjMavL3fWlBDesfNX5oEufr9TF4aI" }, // 01/06
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Coleta", briefingUrl: "https://docs.google.com/document/d/1szQ-8xu5RYkI_CqU9RxZU4BkjB445hNCpv1T_r04Cfg/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1DsvVGL4bgPJ0WIBMQEnSxqPezaoen5s1_cS4C1NASvE/edit", briefing: "comunicar as principais campanhas do mês.", context: "Inicio del mes â€” sellers deben conocer el calendario comercial para prepararse y capturar oportunidades de venta.", targetDesc: "MCO_NEWSLETTER_0306 MLB_NEWSLETTER_0206" }, // 03/06
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Aviso de Activación", briefingUrl: "https://docs.google.com/document/d/1V6BYIrAPZDWBXM6sXeebyW2_fZ3FJA1bgEk58ktJE_Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 03/06
    { col: 3, span: 3, ch: "WPP",   types: ["full"], name: "Hunting Item", briefingUrl: "https://docs.google.com/document/d/1w6D9ldjgu_G9Yq35JLFPnihX2EmTts3-FFLy7iCJ-BE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1HymuOYTyIgjEJVNa2mOBW-kganmKKWt5em8Cy1lSfuw/edit" }, // 03-05/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Recordatorio Beneficio 20% FVF", briefingUrl: "https://docs.google.com/document/d/1FDPw3IgBBegCY3cHvGwp0bI0psfF3Jzze1Iizg_F2QY/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1_wdglKTtn4RMXcmBRGI6IpCZ2SN5fXPUf33azSICnIA/edit", wishlist: true }, // 04/06
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, holiday: true, name: "Corpus Christi" }, // 08/06
    { col: 2, span: 2, chs: ["EMAIL","CDN"], types: ["full"], name: "Risky Churn T3", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 09-10/06
    { col: 4, span: 1, ch: "WPP",   types: ["full"], name: "BC Lanzamiento Retiro Bonificado", briefingUrl: "https://docs.google.com/document/d/11TU6D7oACqDKdpzQreWGUQllT6kEEz4M2g6ajCQ2hd0/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1BxIZrsOaL8lHynTOQzumizgbxNTq1zj4kcvD4X1AJ6Y/edit", wishlist: true }, // 11/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Promos & Primas · Full & Flex", briefingUrl: "https://docs.google.com/document/d/18V4UbeQwlmkBdXav7rCoqkwWuq0sF5ETJ6qAfgvDVjE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1xTPnkCyapr1DzWH5ujXqlONLP8PavTFRAmsW-hQI5t4/edit", briefing: "El 24 de junio al 8 de julio se realiza la campaña 7.7 Promos & Primas, impulsada por el pago de la prima de mitad de año." }, // 09/06
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" }, // 11/06
    { col: 3, span: 1, ch: "WPP",   types: ["flex"], name: "Refuerzo DDP Flex", briefingUrl: "https://docs.google.com/document/d/1HT8pT5ms0fLvass5cmAvrCFTzsXI2qoIdla1jENheys/edit" }, // 10/06
    { col: 3, span: 3, ch: "CDN",   types: ["full","flex","coleta"], name: "Refuerzo Mundial · Full, Flex y Coleta", briefingUrl: "https://docs.google.com/document/d/1myeussgOoWUt4AeVpEFitdBR0TptCQ8KGl2YSuDMpYE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1xcwiKTvC-TrbKyxqwWTVvL1whQ1QMSxsbsmW-8KVeCg/edit", briefing: "Se acerca uno de los torneos de fútbol más esperados del mundo. Los sellers con Full, Flex y Coletas tienen una oportunidad clave para aumentar sus ventas." }, // 10-12/06
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, holiday: true, name: "Sagrado Corazón de Jesús" }, // 15/06
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Risky Churn T3", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true }, // 16/06
    { col: 3, span: 1, holiday: true, name: "Juego Mundial MCO" }, // 17/06
    { col: 3, span: 3, ch: "CDN",   types: ["full"], name: "Refuerzo 7.7 Promos & Primas", briefingUrl: "https://docs.google.com/document/d/18V4UbeQwlmkBdXav7rCoqkwWuq0sF5ETJ6qAfgvDVjE/edit" }, // 17-19/06
  ],
  /* Semana 4 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Refuerzo Promos & Primas Flex", briefingUrl: "https://docs.google.com/document/d/1r9BAeTGlGaGmCEJ_IqFlkBr6dYbmFRPZuvHJ69j18Bc/edit", briefing: "Refuerzo para sellers con Full, en el marco de la campaña Fechas Dobles 7/7 — Promos & Primas. Del 24 de junio al 8 de julio, compradores activos con las mejores ofertas." }, // 22/06
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni · Status Actual", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "status da meta do seller." }, // 23/06
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni · Optin New Sellers", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ", briefing: "aviso do projeto para sellers novos." }, // 23/06
    { col: 2, span: 1, holiday: true, name: "Juego Mundial MCO" }, // 23/06
  ],
  /* Semana 5 */
  [
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Preferences", targetUrl: "https://docs.google.com/spreadsheets/d/1o8oWGq7vW60jFNTUcjIsycGHoYUmn5naabJSA8ibZBQ" }, // 30/06-02/07
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Ativação Novos Domínios Categorias H&B" }, // 30/06-02/07
  ],
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLC · CHILE — pulled from v2 dataset          ║
   ╚══════════════════════════════════════════════╝ */
const MLC_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  [
    { col: 1, span: 1, ch: "CDN",   types: ["full"], name: "BC POC Free Warehouse SKU Estrella", briefingUrl: "https://docs.google.com/document/d/1aoDqK5WVv0lYv1GY6Gxm337vJ-lDTPMRvg-p_vOernQ/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk/edit", wishlist: true },
    { col: 1, span: 1, ch: "WPP",   types: ["full"], name: "BC Invierno - Seguimiento", briefingUrl: "https://docs.google.com/document/d/1a4WfpcTjAnaEtMoF7bG4eRHiTjr-6UntlyUceoNlCuU/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
    { col: 3, span: 3, ch: "WPP",   types: ["full"], name: "Hunting Item", briefingUrl: "https://docs.google.com/document/d/1w6D9ldjgu_G9Yq35JLFPnihX2EmTts3-FFLy7iCJ-BE/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1HymuOYTyIgjEJVNa2mOBW-kganmKKWt5em8Cy1lSfuw/edit" },
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex y Colecta", briefingUrl: "https://docs.google.com/document/d/1szQ-8xu5RYkI_CqU9RxZU4BkjB445hNCpv1T_r04Cfg/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1DsvVGL4bgPJ0WIBMQEnSxqPezaoen5s1_cS4C1NASvE/edit" },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "BC Cyber - Cierre Bonificacion", briefingUrl: "https://docs.google.com/document/d/1cYaxnyOJWSEEiMOYZjdfbMlWvc6kYY-t6F8OFx5WgBs/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1PWrbNpSbshFm7FMWYq2dbToTlY8UGLTgB6NW22Y0cXw/edit" },
  ],
  [
    { col: 1, span: 5, chs: ["EMAIL","CDN"], types: ["full"], name: "Risky Churn T1", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true },
    { col: 1, span: 5, chs: ["EMAIL","CDN"], types: ["full"], name: "Risky Churn T2", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true },
    { col: 5, span: 1, chs: ["WPP","EMAIL"], types: ["full"], name: "BC Reminder POC Free Warehouse", briefingUrl: "https://docs.google.com/document/d/1aoDqK5WVv0lYv1GY6Gxm337vJ-lDTPMRvg-p_vOernQ/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk/edit", wishlist: true },
    { col: 3, span: 1, ch: "WPP",   types: ["flex"], name: "Dia del Padre Flex - ultimo llamado", briefingUrl: "https://docs.google.com/document/d/11qII0pLscovBP86xDMi8VBjUoOHzH92kGSyqVmoko1U/edit" },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" },
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Activar Publicaciones Flex", briefingUrl: "https://docs.google.com/document/d/1pQwL8ewKRb4NwvY6qOc9tIHi9XyzJO0LXhRPxI5lRkc/edit" },
    { col: 5, span: 1, ch: "EMAIL", types: ["xd"],   name: "Refuerzo H&B", briefingUrl: "https://docs.google.com/document/d/17IlaH34m7TXfG9WUhJI35j9KGbK0s2bh1xZG8ruwilM/edit" },
    { col: 5, span: 1, ch: "WPP",   types: ["xd"],   name: "Refuerzo H&B", briefingUrl: "https://docs.google.com/document/d/17IlaH34m7TXfG9WUhJI35j9KGbK0s2bh1xZG8ruwilM/edit" },
    { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "Reposicion quiebre stock para DDP", briefingUrl: "https://docs.google.com/document/d/1v37j4JX_3cXwOfhzztiQdSu_2p5nZC-YmaciP8db3j8/edit" },
  ],
  [
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Risky Churn T1", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true },
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Risky Churn T2", briefingUrl: "https://docs.google.com/document/d/1cgi1ram-oOq2L7H-LX25DQmp2TizbYBxGUpnftHWx-Y/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1R_8AB82roPZB_3ZYRyOkIZcFuN8xABMHN_RfPvT0sB0/edit", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno Seguimiento + Recordatorio colectas", briefingUrl: "https://docs.google.com/document/d/1a4WfpcTjAnaEtMoF7bG4eRHiTjr-6UntlyUceoNlCuU/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
    { col: 4, span: 1, ch: "EMAIL", types: ["xd"],   name: "Hunting Colecta sabado", briefingUrl: "https://docs.google.com/document/d/1ega9GjyBN-8tIU5GdvvtiYIkZjDTNI0VOUdvO6ClTxU/edit" },
    { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "BC Invierno - Recordatorio ultimos dias", briefingUrl: "https://docs.google.com/document/d/1a4WfpcTjAnaEtMoF7bG4eRHiTjr-6UntlyUceoNlCuU/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
  ],
  [
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "POC Estrella Recordatorio", briefingUrl: "https://docs.google.com/document/d/1bN-OWxaw2MCot8Onf-Nl7tQiWRhdh5SjULZWLuWTSsg/edit" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], target: "T1", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], target: "T2", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "Mundial - Full y Flex", briefingUrl: "https://docs.google.com/document/d/1l-Jbe7DQd_W1GJoIOP7XavFU24zJBsDapG8pG_wPLK8/edit", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
    { col: 5, span: 1, ch: "WPP",   types: ["full"], target: "T1", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
    { col: 5, span: 1, ch: "WPP",   types: ["full"], target: "T2", name: "BC DDN Anuncio", note: "PENDIENTE BRIEFING", briefingUrl: "https://docs.google.com/document/d/1mI7xhUISxS-nmcrEeKhghHjLpnin4Qzh8wp068BnRw0/edit" },
  ],
  [
    { col: 1, span: 1, holiday: true, name: "Sao Pedro y Sao Paulo" },
    { col: 3, span: 1, ch: "WPP",   types: ["full"], target: "T1", name: "BC DDN Inicio", note: "PENDIENTE BRIEFING" },
    { col: 3, span: 1, ch: "WPP",   types: ["full"], target: "T2", name: "BC DDN Inicio", note: "PENDIENTE BRIEFING" },
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno cierre - Cumplio", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno cierre - No Cumplio", targetUrl: "https://docs.google.com/spreadsheets/d/1lKU2kZV07O4BjD00L5XMPaXJX1L_R39rNKjkUz4fcKk" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "POC Estrella - Status Ahorro WH", briefingUrl: "https://docs.google.com/document/d/1bN-OWxaw2MCot8Onf-Nl7tQiWRhdh5SjULZWLuWTSsg/edit" },
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Activacion nuevos dominios Preferences" },
    { col: 2, span: 3, ch: "CDN",   types: ["coleta"], name: "Activacion nuevos dominios H&B" },
  ],
]);

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

/* ── JULIO 2026 ─────────────────────────────────────────────────────────── */
const MLB_JUL_2026 = makeMonth("Julio 2026", W_JUL, [
  /* Semana 1 — 29/06 a 03/07 */
  [
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex e Coleta" }, // 01/07
    { col: 3, span: 3, ch: "CDN",   types: ["full","flex"], name: "Refuerzo Copa do Mundo" }, // 01/07–03/07
  ],
  /* Semana 2 — 06/07 a 10/07 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "8.8 DDP" }, // 06/07
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Revisión de Férias VP&A" }, // 06/07
    { col: 3, span: 1, ch: "EMAIL", types: ["flex"], name: "Férias Coisas de Crianca (T&B)" }, // 08/07
    { col: 4, span: 1, holiday: true, name: "Feriado São Paulo Revolución Constitucionalista" }, // 09/07
    { col: 4, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 09/07
  ],
  /* Semana 3 — 13/07 a 17/07 */
  [
    { col: 2, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 14/07
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
  ],
  /* Semana 4 — 20/07 a 24/07 */
  [
    { col: 4, span: 1, ch: "WPP",   types: ["full","flex"], name: "8.8 DDP" }, // 23/07
  ],
  /* Semana 5 — 27/07 a 31/07 */
  [],
]);

const MLA_JUL_2026 = makeMonth("Julio 2026", W_JUL, [
  /* Semana 1 — 29/06 a 03/07 */
  [
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex e Coleta" }, // 01/07
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta" }, // 02/07
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja" }, // 02/07
    { col: 5, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni Activación" }, // 03/07
    { col: 5, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 03/07
  ],
  /* Semana 2 — 06/07 a 10/07 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Salí a la Ruta" }, // 06/07
    { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "Liquidación moda invierno" }, // 06/07–08/07
    { col: 2, span: 1, ch: "WPP",   types: ["full"], name: "Full Week 7" }, // 07/07
    { col: 2, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 07/07
    { col: 4, span: 1, holiday: true, name: "Feriado Día de la Independencia" }, // 09/07
    { col: 5, span: 1, holiday: true, name: "Feriado Puente" }, // 10/07
  ],
  /* Semana 3 — 13/07 a 17/07 */
  [
    { col: 2, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 14/07
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "8.8 DDN" }, // 15/07
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
  ],
  /* Semana 4 — 20/07 a 24/07 */
  [
    { col: 4, span: 1, ch: "WPP",   types: ["full"], name: "Colecta Boni Status Actual" }, // 23/07
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Optin New Sellers" }, // 23/07
  ],
  /* Semana 5 — 27/07 a 31/07 */
  [
    { col: 2, span: 3, ch: "CDN",   types: ["full"], name: "Full Week 8" }, // 28/07–30/07
  ],
]);

const MCO_JUL_2026 = makeMonth("Julio 2026", W_JUL, [[], [], [], [], []]);

const MLC_JUL_2026 = makeMonth("Julio 2026", W_JUL, [
  /* Semana 1 — 29/06 a 03/07 */
  [
    { col: 3, span: 1, ch: "WPP",   types: ["full"], name: "BC DDN - Inicio" }, // 01/07
    { col: 3, span: 3, ch: "CDN",   types: ["full"], name: "BC DDN - Inicio" }, // 01/07–03/07
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex e Coleta" }, // 01/07
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno - Cumplió" }, // 02/07
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "BC Invierno - No Cumplió" }, // 02/07
  ],
  /* Semana 2 — 06/07 a 10/07 */
  [
    { col: 1, span: 1, ch: "PUSH",  types: ["full"], name: "POC Estrella Value Prop" }, // 06/07
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "Black Week" }, // 07/07
    { col: 4, span: 1, ch: "WPP",   types: ["full","flex"], name: "Toys, Parties & Babies: Especial Vacaciones Invierno" }, // 09/07
  ],
  /* Semana 3 — 13/07 a 17/07 */
  [
    { col: 1, span: 3, ch: "CDN",   types: ["full"], name: "POC Estrella Value Prop" }, // 13/07–15/07
    { col: 3, span: 3, ch: "CDN",   types: ["full","flex"], name: "Black Week" }, // 15/07–17/07
    { col: 4, span: 1, holiday: true, name: "Feriado Solemnidad de la Virgen del Carmen, Reina y Patrona de Chile" }, // 16/07
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
    { col: 5, span: 1, ch: "WPP",   types: ["full"], name: "BC DDN - Status" }, // 17/07
  ],
  /* Semana 4 — 20/07 a 24/07 */
  [
    { col: 1, span: 1, ch: "WPP",   types: ["full"], name: "POC Estrella Value Prop" }, // 20/07
    { col: 1, span: 1, ch: "EMAIL", types: ["full","flex"], name: "PPS: Fechas dobles 8.8 DDN" }, // 20/07
  ],
  /* Semana 5 — 27/07 a 31/07 */
  [],
]);

function buildSiteMonths(junioData, julioData) {
  return {
    "Mayo 2026":   EMPTY("Mayo 2026",   W_MAY),
    "Junio 2026":  junioData,
    "Julio 2026":  julioData !== undefined ? julioData : EMPTY("Julio 2026", W_JUL),
    "Agosto 2026": EMPTY("Agosto 2026", W_AGO),
  };
}

window.DATA = {
  defaultSite: "MLB",
  defaultMonth: "Junio 2026",
  months: MONTHS_ALL,
  bySite: {
    MLB: buildSiteMonths(MLB_JUN_2026, MLB_JUL_2026),
    MLA: buildSiteMonths(MLA_JUN_2026, MLA_JUL_2026),
    MCO: buildSiteMonths(MCO_JUN_2026, MCO_JUL_2026),
    MLC: buildSiteMonths(MLC_JUN_2026, MLC_JUL_2026),
  },
};


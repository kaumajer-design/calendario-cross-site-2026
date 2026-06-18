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
      xd:     "Raquel Ribeiro",
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
      xd:     "Florencia Haefeli",
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
      xd:     "Florencia Haefeli",
    },
  },
  MLC: {
    code: "MLC",
    name: "Chile",
    flag: "🇨🇱",
    flagColors: { top: "#FFFFFF", mid: "#0039A6", text: "#D52B1E" },
    owners: {
      xd: "Daniella Rebolledo",
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
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Sabado Target 1", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Sabado Target 1", wishlist: true },
    { col: 2, span: 1, ch: "CDN", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex","xd"], name: "Newsletter" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Hunting Item" },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Items Forçados a Estrela", wishlist: true },
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["xd"], name: "Migração a J&t D-7 Wave 2", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["xd"], name: "Migração a J&t D-7 Wave 2", wishlist: true },
    { col: 1, span: 1, ch: "WPP", types: ["flex"], name: "Refuerzo Dia dos Namorados" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "J&t Caso 2: : Agencia Mudou Seu Endereço / Fechou", wishlist: true },
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Mundial Full e Flex" },
    { col: 4, span: 1, ch: "WPP", types: ["full"], name: "Items Forçados a Estrela", wishlist: true },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Forçar Flex | Ativação Massiva de Itens", wishlist: true },
    { col: 4, span: 1, ch: "CDN", types: ["full"], name: "Items Forçados a Estrela", wishlist: true },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Bloqueio Colchões", wishlist: true },
    { col: 1, span: 1, ch: "CDN", types: ["xd"], name: "Migração a J&t Lançamento Wave 2", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["xd"], name: "Migração a J&t Lançamento Wave 2", wishlist: true },
    { col: 3, span: 1, ch: "CDN", types: ["full"], name: "7.7 Foco Mundial" },
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Descontaço Apenas Full" },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
    { col: 5, span: 1, ch: "EMAIL", types: ["flex"], name: "Refuerzo Fiestas Juninas" },
  ],
  /* Semana 4 */
  [
    { col: 1, span: 1, ch: "WPP", types: ["flex"], name: "Refuerzo 7.7 Foco Mundial Flex" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Férias Multicategoria" },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex" }, // 25/06
    { col: 4, span: 1, ch: "WPP", types: ["flex"], name: "Ativar Publicações Flex" }, // 25/06
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Domingo Target 2", wishlist: true },
  ],
  /* Semana 5 */
  [
    { col: 1, span: 1, ch: "PUSH", types: ["flex"], name: "Descontaço Apenas Flex" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Categorias H&b" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Preferences" },
  ]
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLA · ARGENTINA                               ║
   ╚══════════════════════════════════════════════╝ */
const MLA_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Cierre Bc Wh + Col Feriados y Lunes/martes Abril", wishlist: true },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex","xd"], name: "Newsletter" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Hunting Item" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Colecta Boni Aviso de Activación" },
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Nuevas Zonas de Colecta Full - Tucumán - Apagado Spd" },
    { col: 4, span: 1, ch: "EMAIL", types: ["full"], name: "Nuevas Zonas de Colecta Full - Tucumán - Sin Apagado Spd" },
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 1, span: 1, ch: "WPP", types: ["full"], name: "Full Week 6´" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 3, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Foco Mundial Full y Flex" },
    { col: 4, span: 1, ch: "WPP", types: ["flex"], name: "Activar Publicaciones Flex" },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex" },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Cierre Bc Wh + Col - Target Mayo", wishlist: true },
    { col: 5, span: 1, ch: "EMAIL", types: ["flex"], name: "Ddp Flex" },
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["flex"], name: "Refuerzo Ddp Flex" },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 3, span: 1, ch: "WPP", types: ["full","flex"], name: "7.7 Foco Mundial Full y Flex" },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Cashback Retiros Non Totable", wishlist: true },
  ],
  /* Semana 4 */
  [
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Optin New Sellers" },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Colecta Boni Status Actual" },
  ],
  /* Semana 5 */
  [
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Categorias H&b" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Preferences" },
  ]
]);

/* ╔══════════════════════════════════════════════╗
   ║ MCO · COLOMBIA                                ║
   ╚══════════════════════════════════════════════╝ */
const MCO_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Baja" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Alta" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex","xd"], name: "Newsletter" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Hunting Item" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Colecta Boni Aviso de Activación" },
    { col: 4, span: 1, ch: "WPP", types: ["flex"], name: "Recordatorio Beneficio 20% Fvf", wishlist: true },
  ],
  /* Semana 2 */
  [
    { col: 2, span: 1, ch: "CDN", types: ["full"], name: "Risky Churn Target 3", wishlist: true },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Risky Churn Target 3", wishlist: true },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex"], name: "7.7 Promos & Primas Full & Flex" },
    { col: 3, span: 1, ch: "WPP", types: ["flex"], name: "Refuerzo Ddp Flex" },
    { col: 3, span: 1, ch: "CDN", types: ["full","flex"], name: "Refuerzo Mundial Full, Flex y Coleta" },
    { col: 4, span: 1, ch: "WPP", types: ["full"], name: "Bc- Lanzamiento Retiro Bonificado Regreso a Clases", wishlist: true },
    { col: 4, span: 1, ch: "WPP", types: ["flex"], name: "Activar Publicaciones Flex" },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex" },
  ],
  /* Semana 3 */
  [
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Risky Churn Target 3", wishlist: true },
    { col: 3, span: 1, ch: "CDN", types: ["full"], name: "Refuerzo 7.7 Promos & Primas" },
  ],
  /* Semana 4 */
  [
    { col: 1, span: 1, ch: "WPP", types: ["flex"], name: "Refuerzo Promos & Primas Flex" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Colecta Boni Optin New Sellers" },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Colecta Boni Status Actual" },
  ],
  /* Semana 5 */
  [
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Categorias H&b" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Preferences" },
  ]
]);

/* ╔══════════════════════════════════════════════╗
   ║ MLC · CHILE — pulled from v2 dataset          ║
   ╚══════════════════════════════════════════════╝ */
const MLC_JUN_2026 = makeMonth("Junio 2026", W_JUN, [
  /* Semana 1 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Bc - Poc Free Warehouse Sku Estrella", wishlist: true },
    { col: 1, span: 1, ch: "WPP", types: ["full"], name: "Bc Invierno Seguimiento + 2 Colectas Nuevo Mes" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full","flex","xd"], name: "Newsletter" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Hunting Item" },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Cyber - Cierre Bonificación" },
  ],
  /* Semana 2 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Reposición Quiebre Stock Para Ddp" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 3, span: 1, ch: "WPP", types: ["flex"], name: "Día del Padre Flex Último Llamado" },
    { col: 4, span: 1, ch: "WPP", types: ["flex"], name: "Activar Publicaciones Flex" },
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Publicaciones Flex" },
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Bc - Reminder Poc Free Warehouse Sku Estrella", wishlist: true },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc - Reminder Poc Free Warehouse Sku Estrella", wishlist: true },
    { col: 5, span: 1, ch: "EMAIL", types: ["xd"], name: "Refuerzo H&b" },
    { col: 5, span: 1, ch: "WPP", types: ["xd"], name: "Refuerzo H&b" },
  ],
  /* Semana 3 */
  [
    { col: 1, span: 1, ch: "CDN", types: ["full"], name: "Bc Invierno Recordatorio Ùltimos Dias" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Invierno Seguimiento + Recordatorio Colectas/urgencia" },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Risky Churn Target 2", wishlist: true },
    { col: 2, span: 1, ch: "WPP", types: ["full"], name: "Risky Churn Target 1", wishlist: true },
    { col: 4, span: 1, ch: "EMAIL", types: ["xd"], name: "Hunting Colecta Sábado" },
  ],
  /* Semana 4 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Ddn Anuncio Target 2" },
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Ddn Anuncio Target 1" },
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Mundial Full & Flex" },
    { col: 3, span: 1, ch: "WPP", types: ["full"], name: "Poc Estrella Recordatorio" },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Ddn Anuncio Target 2" },
    { col: 5, span: 1, ch: "WPP", types: ["full"], name: "Bc Ddn Anuncio Target 1" },
  ],
  /* Semana 5 */
  [
    { col: 2, span: 1, ch: "EMAIL", types: ["full"], name: "Poc Estrella Status Ahorro Wh" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Categorias H&b" },
    { col: 2, span: 1, ch: "CDN", types: ["xd"], name: "Ativação de Novos Domínios Preferences" },
  ]
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
    { col: 4, span: 1, ch: "CDN",   types: ["full","flex"], name: "Refuerzo Copa do Mundo" }, // 02/07
    { col: 5, span: 1, ch: "EMAIL", types: ["full","flex","coleta"], name: "Newsletter Full, Flex e Coleta" }, // 03/07
    { col: 5, span: 1, ch: "EMAIL", types: ["full"], name: "Bc Benefícios Inbound Finais de Semana Sabado" }, // 03/07
  ],
  /* Semana 2 — 06/07 a 10/07 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["full"], name: "8.8 DDP" }, // 06/07
    { col: 1, span: 1, ch: "WPP",   types: ["flex"], name: "Revisión de Férias VP&A" }, // 06/07
    { col: 4, span: 1, holiday: true, name: "Feriado São Paulo Revolución Constitucionalista" }, // 09/07
    { col: 4, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 09/07
  ],
  /* Semana 3 — 13/07 a 17/07 */
  [
    { col: 1, span: 1, ch: "EMAIL", types: ["flex"], name: "Férias Coisas de Crianca (T&B)" }, // 13/07
    { col: 2, span: 1, holiday: true, name: "Partido Mundial (a definir)" }, // 14/07
    { col: 4, span: 1, ch: "EMAIL", types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
    { col: 4, span: 1, ch: "WPP",   types: ["flex"], name: "Ativar Publicações Flex" }, // 16/07
  ],
  /* Semana 4 — 20/07 a 24/07 */
  [
    { col: 2, span: 1, ch: "EMAIL", types: ["flex"], name: "Activar Flex Sábados" }, // 21/07
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


/* global React, ReactDOM */
const { useMemo, useState } = React;

/* ─── Channel palette ───────────────────────────────────────── */
const CHANNELS = {
  CDN:   { label: "CDN",       bg: "#FF5C7A", fg: "#FFFFFF" },
  WPP:   { label: "WhatsApp",  bg: "#00C853", fg: "#FFFFFF" },
  PUSH:  { label: "Push",      bg: "#FF7733", fg: "#FFFFFF" },
  EMAIL: { label: "Email",     bg: "#3483FA", fg: "#FFFFFF" },
  SA:    { label: "SA",        bg: "#00BCD4", fg: "#FFFFFF" },
  TBD:   { label: "A definir", bg: "#FFE600", fg: "#1A1A1A" },
};

/* ─── Type pills ─────────────────────────────────────────────── */
const TYPES = {
  full:   { label: "Full",   bg: "#00A650", fg: "#FFFFFF" },
  flex:   { label: "Flex",   bg: "#FFE600", fg: "#1A1A1A" },
  coleta: { label: "Coleta", bg: "#1A1A1A", fg: "#FFE600" },
  xd:     { label: "XD/XDDO",bg: "#6B4FE0", fg: "#FFFFFF" },
  me1:    { label: "ME1",    bg: "#9C27B0", fg: "#FFFFFF" },
};

/* Beneficio: campañas que empiezan con BC o POC */
const isBeneficio = (item) => /^(BC|POC)\b/i.test(item.name || "");

/* Owner resolver: depends on the site's owner table.
   - MLC keeps its legacy in-item owner rules (Sebas/Diego/Dani/Génesis/Cato).
   - Other sites: by type, look up the responsible from site.owners.
*/
const ownersOf = (item, site) => {
  if (item.owner) return Array.isArray(item.owner) ? item.owner : [item.owner];
  const n = item.name || "";
  if (site && site.code === "MLC") {
    if (/^BC\b/i.test(n))  return ["Sebastian Carrasco"];
    if (/^POC\b/i.test(n)) return ["Diego Farcuh"];
    const out = [];
    const t = item.types || [];
    if (t.includes("coleta")) out.push("Daniela Rebolledo");
    if (t.includes("full"))   out.push("Genesis Cayupi");
    if (t.includes("flex"))   out.push("Ricardo Bacarrezza");
    return out;
  }
  if (!site || !site.owners) return [];
  const out = [];
  const t = item.types || [];
  // Stable order: full → flex → coleta → xd/me1
  if (t.includes("full")   && site.owners.full)   out.push(site.owners.full);
  if (t.includes("flex")   && site.owners.flex)   out.push(site.owners.flex);
  if (t.includes("coleta") && site.owners.coleta) out.push(site.owners.coleta);
  if (t.includes("xd")     && site.owners.xd)     out.push(site.owners.xd);
  if (t.includes("me1")    && site.owners.me1)    out.push(site.owners.me1);
  return out;
};

/* short, friendly label for chip rows */
const shortName = (full) => {
  if (!full) return "";
  const [a, b] = full.split(/\s+/);
  return b ? a + " " + b[0] + "." : a;
};
const initials = (full) => {
  if (!full) return "?";
  const parts = full.split(/\s+/).filter(Boolean);
  return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
};

function TypePill({ kind }) {
  const t = TYPES[kind]; if (!t) return null;
  return <span className="tpill" style={{ background: t.bg, color: t.fg }}>{t.label}</span>;
}

/* ─── Campaign card ──────────────────────────────────────────── */
function CampaignCard({ item, site, onOpen }) {
  if (item.holiday) {
    const isMundial = /Juego Mundial/i.test(item.name || "");
    const emoji = isMundial ? "⚽" : "🎉";
    return (
      <div className="campaign campaign--holiday"
           style={{ gridColumn: `${item.col} / span ${item.span}`, gridRow: item._row }}>
        <span className="campaign__name">{emoji} {item.name}</span>
        {!isMundial && <span className="campaign__sub">Feriado</span>}
      </div>
    );
  }
  const chKeys = Array.isArray(item.chs) && item.chs.length > 0 ? item.chs : [item.ch];
  const channels = chKeys.map(k => CHANNELS[k] || CHANNELS.TBD);
  const primary = channels[0];
  const isLight = primary.fg === "#1A1A1A";
  const beneficio = isBeneficio(item);
  const owners = ownersOf(item, site);
  const multi = channels.length > 1;

  const bg = multi
    ? (() => {
        const step = 100 / channels.length;
        const stops = channels.map((c, i) => `${c.bg} ${i * step}% ${(i + 1) * step}%`).join(", ");
        return `linear-gradient(135deg, ${stops})`;
      })()
    : primary.bg;

  return (
    <button
      type="button"
      onClick={() => onOpen && onOpen(item)}
      className={"campaign" + (chKeys[0] === "TBD" ? " is-tbd" : "") + (beneficio ? " is-beneficio" : "") + (multi ? " is-multi" : "")}
      style={{
        gridColumn: `${item.col} / span ${item.span}`,
        gridRow: item._row,
        background: bg,
        color: primary.fg,
      }}
      title={"Ver detalle — " + item.name}
    >
      <div className="campaign__head">
        <div className="campaign__pills">
          {(item.types || []).map((t, i) => <TypePill key={i} kind={t} />)}
          {item.target && (
            <span className="tpill tpill--target"
                  style={{ background: isLight ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)",
                           color:      isLight ? "#FFFFFF"          : "#1A1A1A" }}
                  title={"Target " + item.target.replace(/^T/, "")}>
              {item.target}
            </span>
          )}
        </div>
        {beneficio && (
          <span className="campaign__star" aria-label="Beneficio"
                style={{ color: isLight ? "#1A1A1A" : "#FFE600" }}>★</span>
        )}
      </div>
      <div className="campaign__name">{item.name}</div>
      <div className="campaign__foot">
        {channels.map((c, i) => (
          <span key={i} className="campaign__channel"
                style={{ background: c.fg === "#1A1A1A" ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.25)",
                         color: c.fg === "#1A1A1A" ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.98)",
                         boxShadow: multi ? `inset 0 0 0 1px ${c.bg}` : "none" }}>
            {c.label}
          </span>
        ))}
        {owners.map((o, i) => (
          <span key={i} className="campaign__owner"
                style={{ background: isLight ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)",
                         color:      isLight ? "#FFFFFF"          : "#1A1A1A" }}
                title={"Responsable: " + o}>
            <span className="campaign__owner-ic" aria-hidden="true">@</span>{shortName(o)}
          </span>
        ))}
        {item.note && (
          <span className="campaign__note">⚠ {item.note}</span>
        )}
      </div>
    </button>
  );
}

/* ─── Lane packing ──────────────────────────────────────────── */
function packLanes(items) {
  const result = items.map((it) => ({ ...it, _row: null }));
  const lanes = [];
  for (const it of result) {
    let r = 0;
    while (true) {
      if (!lanes[r]) lanes[r] = [];
      const clash = lanes[r].some(o => !(it.col + it.span <= o.col || o.col + o.span <= it.col));
      if (!clash) { lanes[r].push({ col: it.col, span: it.span }); it._row = r + 1; break; }
      r++; if (r > 40) { it._row = r + 1; break; }
    }
  }
  return result;
}

/* ─── Week block ─────────────────────────────────────────────── */
function Week({ week, site, channelFilters, typeFilters, beneficiosOnly, responsableFilters, onOpen }) {
  const visible = useMemo(() => {
    const hasCh   = channelFilters.size > 0;
    const hasType = typeFilters.size > 0;
    const hasResp = responsableFilters.size > 0;
    return week.items.filter(it => {
      if (it.holiday) return true;
      if (beneficiosOnly && !isBeneficio(it)) return false;
      if (hasCh) {
        const keys = Array.isArray(it.chs) && it.chs.length > 0 ? it.chs : [it.ch];
        if (!keys.some(k => channelFilters.has(k))) return false;
      }
      if (hasType && !(it.types || []).some(t => typeFilters.has(t))) return false;
      if (hasResp && !ownersOf(it, site).some(o => responsableFilters.has(o))) return false;
      return true;
    });
  }, [week, site, channelFilters, typeFilters, beneficiosOnly, responsableFilters]);

  const placed = useMemo(() => packLanes(visible), [visible]);
  const totalRows = Math.max(1, ...placed.map(p => p._row || 1));

  return (
    <section className="week" data-screen-label={week.label}>
      <div className="week__header">
        {week.days.map((d, i) => (
          <div className="dayhead" key={i}>
            <span className="dayhead__dow">{d.dow}</span>
            <span className="dayhead__date">{d.date}</span>
          </div>
        ))}
      </div>
      <div className="week__grid"
           style={{ gridTemplateRows: `repeat(${totalRows}, minmax(78px, auto))` }}>
        {placed.map((it, i) => <CampaignCard key={i} item={it} site={site} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

/* ─── Filter chip ────────────────────────────────────────────── */
function FilterChip({ active, onClick, color, label, count, dark, swatchClass }) {
  return (
    <button className={"fchip" + (active ? " is-active" : "")} onClick={onClick}>
      <span className={"fchip__sw " + (swatchClass || "")}
            style={{ background: color, color: dark ? "#1A1A1A" : "#FFFFFF" }}>
        {label[0]}
      </span>
      <span className="fchip__lbl">{label}</span>
      <span className="fchip__n">{count}</span>
    </button>
  );
}

/* ─── Country flag SVGs (20×14) ───────────────────────────── */
function Flag({ code }) {
  const common = { width: 20, height: 14, viewBox: "0 0 20 14", "aria-hidden": true };
  switch (code) {
    case "MLB": return (
      <svg {...common}>
        <rect width="20" height="14" fill="#009C3B"/>
        <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FEDF00"/>
        <circle cx="10" cy="7" r="2.6" fill="#002776"/>
      </svg>
    );
    case "MLA": return (
      <svg {...common}>
        <rect width="20" height="4.67" fill="#74ACDF"/>
        <rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/>
        <rect y="9.33" width="20" height="4.67" fill="#74ACDF"/>
        <circle cx="10" cy="7" r="1.2" fill="#F6B40E"/>
      </svg>
    );
    case "MCO": return (
      <svg {...common}>
        <rect width="20" height="7" fill="#FFCD00"/>
        <rect y="7" width="20" height="3.5" fill="#003893"/>
        <rect y="10.5" width="20" height="3.5" fill="#CE1126"/>
      </svg>
    );
    case "MLC": return (
      <svg {...common}>
        <rect width="20" height="7" fill="#FFFFFF"/>
        <rect y="7" width="20" height="7" fill="#D52B1E"/>
        <rect width="6.5" height="7" fill="#0039A6"/>
        <polygon fill="#FFFFFF"
          points="3.25,1.7 3.78,3.32 5.49,3.32 4.11,4.32 4.64,5.95 3.25,4.94 1.86,5.95 2.39,4.32 1.01,3.32 2.72,3.32"/>
      </svg>
    );
    default: return null;
  }
}

/* ─── Site / Month switcher (top toolbar) ───────────────────── */
function SiteSwitcher({ sites, site, setSite, months, month, setMonth }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="siteswitcher">
      <div className="siteswitcher__group">
        <span className="siteswitcher__label">Site</span>
        <div className="sitetabs" role="tablist">
          {Object.values(sites).map(s => (
            <button key={s.code}
                    className={"sitetab" + (s.code === site.code ? " is-active" : "")}
                    onClick={() => setSite(s.code)}
                    role="tab" aria-selected={s.code === site.code}>
              <span className="sitetab__flag"><Flag code={s.code} /></span>
              <span className="sitetab__code">{s.code}</span>
              <span className="sitetab__name">{s.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="siteswitcher__group">
        <span className="siteswitcher__label">Mes</span>
        <div className={"monthselect" + (open ? " is-open" : "")}>
          <button className="monthselect__trigger"
                  onClick={() => setOpen(o => !o)}
                  aria-expanded={open}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M3 8h14" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span>{month}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open && (
            <>
              <div className="monthselect__scrim" onClick={() => setOpen(false)}></div>
              <ul className="monthselect__menu" role="listbox">
                {months.map(m => (
                  <li key={m}>
                    <button className={"monthselect__opt" + (m === month ? " is-active" : "")}
                            onClick={() => { setMonth(m); setOpen(false); }}
                            role="option" aria-selected={m === month}>
                      <span>{m}</span>
                      {m === month && (
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                          <path d="M2 7.5l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────────────── */
function Header({ site, month, stats,
                  channelFilters, toggleChannel, clearChannels,
                  typeFilters, toggleType, clearTypes,
                  beneficiosOnly, setBeneficiosOnly,
                  responsableFilters, toggleResponsable, clearResponsables,
                  anyFilterActive, clearAllFilters }) {
  return (
    <header className="cal-header">
      <div className="cal-header__top">
        <div className="cal-header__brand">
          <div>
            <div className="cal-header__eyebrow">
              <span className="cal-header__flagwrap"><Flag code={site.code} /></span>
              Mercado Libre · {site.code}
              <span className="cal-header__flagsep">·</span>
              <span className="cal-header__flagname">{site.name}</span>
            </div>
            <h1 className="cal-header__title">Calendario {month}</h1>
            <div className="cal-header__sub">{
              (() => {
                const parts = ["Full", "Flex", "Coleta"];
                const o = site.owners || {};
                if (o.xd)  parts.push("XD/XDDO");
                if (o.me1) parts.push("ME1");
                return parts.join(" · ") + " — unificadas por canal";
              })()
            }</div>
          </div>
        </div>
        <div className="cal-header__meta">
          <div className="cal-header__metarow">
            <div className="meta__rowlabel">Total</div>
            <div className="meta__item"><span className="meta__n">{stats.total}</span> acciones</div>
            <div className="meta__sep"></div>
            <div className="meta__item"><span className="meta__n">{stats.full}</span> Full</div>
            <div className="meta__item"><span className="meta__n">{stats.flex}</span> Flex</div>
            <div className="meta__item"><span className="meta__n">{stats.coleta}</span> Coleta</div>
            {stats.byType.xd > 0 && (
              <div className="meta__item"><span className="meta__n">{stats.byType.xd}</span> XD</div>
            )}
            {stats.beneficios > 0 && (
              <>
                <div className="meta__sep"></div>
                <div className="meta__item"><span className="meta__n">{stats.beneficios}</span> <span style={{color:"#E8A100"}}>★</span> Beneficios</div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="cal-header__filters">
        <div className="filterset">
          <div className="filterset__label">Canal</div>
          <div className="filterset__chips">
            <button className={"fchip fchip--all" + (channelFilters.size === 0 ? " is-active" : "")}
                    onClick={clearChannels}>Todos</button>
            {Object.entries(CHANNELS).map(([key, c]) => (
              <FilterChip key={key}
                active={channelFilters.has(key)}
                onClick={() => toggleChannel(key)}
                color={c.bg}
                label={c.label}
                count={stats.byChannel[key] || 0}
                dark={c.fg === "#1A1A1A"}
                swatchClass={key === "TBD" ? "fchip__sw--striped" : ""} />
            ))}
          </div>
        </div>

        <div className="filterset">
          <div className="filterset__label">Tipo</div>
          <div className="filterset__chips">
            <button className={"fchip fchip--all" + (typeFilters.size === 0 && !beneficiosOnly ? " is-active" : "")}
                    onClick={() => { clearTypes(); setBeneficiosOnly(false); }}>Todos</button>
            {Object.entries(TYPES).map(([key, t]) => {
              const n = stats.byType[key] || 0;
              if (n === 0 && !typeFilters.has(key)) return null;
              return (
                <FilterChip key={key}
                  active={typeFilters.has(key)}
                  onClick={() => toggleType(key)}
                  color={t.bg}
                  label={t.label}
                  count={n}
                  dark={t.fg === "#1A1A1A"} />
              );
            })}
            {stats.beneficios > 0 && (
              <button className={"fchip fchip--beneficio" + (beneficiosOnly ? " is-active" : "")}
                      onClick={() => setBeneficiosOnly(!beneficiosOnly)}
                      title="Mostrar solo BC y POC">
                <span className="fchip__sw fchip__sw--star">★</span>
                <span className="fchip__lbl">Beneficios</span>
                <span className="fchip__n">{stats.beneficios}</span>
              </button>
            )}
          </div>
        </div>
        <div className="filterset">
          <div className="filterset__label">Responsable</div>
          <div className="filterset__chips">
            <button className={"fchip fchip--all" + (responsableFilters.size === 0 ? " is-active" : "")}
                    onClick={clearResponsables}>Todos</button>
            {Object.entries(stats.byResponsable)
              .sort((a, b) => b[1] - a[1])
              .map(([name, n]) => (
              <button key={name}
                      className={"fchip fchip--responsable" + (responsableFilters.has(name) ? " is-active" : "")}
                      onClick={() => toggleResponsable(name)}>
                <span className="fchip__sw fchip__sw--avatar">{initials(name)}</span>
                <span className="fchip__lbl">{shortName(name)}</span>
                <span className="fchip__n">{n}</span>
              </button>
            ))}
            {anyFilterActive && (
              <button className="fchip fchip--clear" onClick={clearAllFilters}
                      title="Limpiar todos los filtros">
                ✕ Limpiar todo
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── Campaign Detail Modal ─────────────────────────────────── */
function CampaignDetail({ item, site, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const chKeys = Array.isArray(item.chs) && item.chs.length > 0 ? item.chs : [item.ch];
  const channels = chKeys.map(k => CHANNELS[k] || CHANNELS.TBD);
  const owners = ownersOf(item, site);
  const beneficio = isBeneficio(item);

  // Find the day(s) from col/span on a virtual 5-day week (LUN..VIE)
  const days = ["LUN","MAR","MIÉ","JUE","VIE"];
  const dayRange = (() => {
    if (!item.col) return null;
    const start = days[item.col - 1];
    const end   = days[Math.min(4, item.col - 1 + (item.span || 1) - 1)];
    return item.span > 1 ? `${start} → ${end}` : start;
  })();

  const fallback = (s) => s ? s : (
    <span className="cdetail__empty">— Sin información cargada todavía —</span>
  );

  return (
    <div className="cdetail__scrim" onClick={onClose}>
      <div className="cdetail" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="cdetail__head"
             style={{ background: channels[0].bg, color: channels[0].fg }}>
          <div className="cdetail__headtop">
            <div className="cdetail__pills">
              {(item.types || []).map((t, i) => <TypePill key={i} kind={t} />)}
              {item.target && (
                <span className="tpill tpill--target"
                      style={{ background: channels[0].fg === "#1A1A1A" ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)",
                               color:      channels[0].fg === "#1A1A1A" ? "#FFFFFF" : "#1A1A1A" }}>
                  {item.target}
                </span>
              )}
              {beneficio && (
                <span className="cdetail__star"
                      style={{ color: channels[0].fg === "#1A1A1A" ? "#1A1A1A" : "#FFE600" }}>
                  ★ Beneficio
                </span>
              )}
            </div>
            <button className="cdetail__close" onClick={onClose}
                    aria-label="Cerrar"
                    style={{ color: channels[0].fg }}>✕</button>
          </div>
          <h2 className="cdetail__title">{item.name}</h2>
          <div className="cdetail__metaline">
            {channels.map((c, i) => (
              <span key={i} className="cdetail__channeltag"
                    style={{ background: c.fg === "#1A1A1A" ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.25)",
                             color: c.fg === "#1A1A1A" ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.98)" }}>
                {c.label}
              </span>
            ))}
            {dayRange && <span className="cdetail__metasep">·</span>}
            {dayRange && <span className="cdetail__metaday">{dayRange}</span>}
            <span className="cdetail__metasep">·</span>
            <span className="cdetail__metasite">
              <span className="cdetail__metaflag"><Flag code={site.code} /></span>
              {site.code} · {site.name}
            </span>
          </div>
        </div>

        <div className="cdetail__body">
          <section className="cdetail__sect">
            <div className="cdetail__sectlabel">
              <span className="cdetail__icon" aria-hidden="true">📋</span>
              Contexto
            </div>
            <div className="cdetail__sectbody">
              {fallback(item.context)}
            </div>
          </section>

          <section className="cdetail__sect">
            <div className="cdetail__sectlabel">
              <span className="cdetail__icon" aria-hidden="true">🎯</span>
              Target
            </div>
            <div className="cdetail__sectbody">
              {item.target && (
                <span className="cdetail__targetchip">Target {item.target.replace(/^T/, "")}</span>
              )}
              {fallback(item.targetDesc)}
            </div>
          </section>

          <section className="cdetail__sect">
            <div className="cdetail__sectlabel">
              <span className="cdetail__icon" aria-hidden="true">📝</span>
              Briefing
            </div>
            <div className="cdetail__sectbody">
              {item.note && (
                <div className="cdetail__alert">⚠ {item.note}</div>
              )}
              {fallback(item.briefing)}
              {item.briefingUrl && (
                <a href={item.briefingUrl} target="_blank" rel="noreferrer"
                   className="cdetail__link">Abrir briefing ↗</a>
              )}
            </div>
          </section>

          {owners.length > 0 && (
            <section className="cdetail__sect cdetail__sect--owners">
              <div className="cdetail__sectlabel">
                <span className="cdetail__icon" aria-hidden="true">👤</span>
                Responsables
              </div>
              <div className="cdetail__owners">
                {owners.map((o, i) => (
                  <div key={i} className="cdetail__owner">
                    <span className="cdetail__avatar">{initials(o)}</span>
                    <span className="cdetail__ownername">{o}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── App root ──────────────────────────────────────────────── */
function App() {
  const sitesAll = window.SITES;
  const dataAll  = window.DATA;
  const [siteCode, setSiteCode] = useState(dataAll.defaultSite);
  const [month, setMonth]       = useState(dataAll.defaultMonth);

  const site = sitesAll[siteCode];
  const data = (dataAll.bySite[siteCode] || {})[month] || { weeks: [] };

  // Reset filters when switching site to avoid stale responsable filters
  const [channelFilters, setChannelFilters]         = useState(() => new Set());
  const [typeFilters, setTypeFilters]               = useState(() => new Set());
  const [responsableFilters, setResponsableFilters] = useState(() => new Set());
  const [beneficiosOnly, setBeneficiosOnly]         = useState(false);
  const [selectedItem, setSelectedItem]             = useState(null);

  const setSite = (code) => {
    setSiteCode(code);
    setResponsableFilters(new Set()); // owners are site-specific
  };

  const toggleIn = (setter) => (val) => setter(prev => {
    const next = new Set(prev);
    if (next.has(val)) next.delete(val); else next.add(val);
    return next;
  });
  const clearSet = (setter) => () => setter(new Set());
  const toggleChannel     = toggleIn(setChannelFilters);
  const toggleType        = toggleIn(setTypeFilters);
  const toggleResponsable = toggleIn(setResponsableFilters);
  const clearChannels     = clearSet(setChannelFilters);
  const clearTypes        = clearSet(setTypeFilters);
  const clearResponsables = clearSet(setResponsableFilters);
  const anyFilterActive = channelFilters.size > 0 || typeFilters.size > 0 || responsableFilters.size > 0 || beneficiosOnly;
  const clearAllFilters = () => {
    setChannelFilters(new Set()); setTypeFilters(new Set()); setResponsableFilters(new Set()); setBeneficiosOnly(false);
  };

  const stats = useMemo(() => {
    const s = { total: 0, full: 0, flex: 0, coleta: 0, beneficios: 0,
                byChannel: {}, byType: {}, byResponsable: {} };
    for (const w of data.weeks) {
      for (const it of w.items) {
        if (it.holiday) continue;
        s.total++;
        if (isBeneficio(it)) s.beneficios++;
        const owners = ownersOf(it, site);
        for (const owner of owners) {
          s.byResponsable[owner] = (s.byResponsable[owner] || 0) + 1;
        }
        const chKeys = Array.isArray(it.chs) && it.chs.length > 0 ? it.chs : [it.ch];
        for (const k of chKeys) {
          s.byChannel[k] = (s.byChannel[k] || 0) + 1;
        }
        for (const t of (it.types || [])) {
          s.byType[t] = (s.byType[t] || 0) + 1;
          if (t === "full") s.full++;
          if (t === "flex") s.flex++;
          if (t === "coleta") s.coleta++;
        }
      }
    }
    return s;
  }, [data, site]);

  return (
    <div className="cal-root">
      <SiteSwitcher
        sites={sitesAll}
        site={site} setSite={setSite}
        months={dataAll.months}
        month={month} setMonth={setMonth} />
      <Header
        site={site} month={month} stats={stats}
        channelFilters={channelFilters} toggleChannel={toggleChannel} clearChannels={clearChannels}
        typeFilters={typeFilters} toggleType={toggleType} clearTypes={clearTypes}
        beneficiosOnly={beneficiosOnly} setBeneficiosOnly={setBeneficiosOnly}
        responsableFilters={responsableFilters} toggleResponsable={toggleResponsable} clearResponsables={clearResponsables}
        anyFilterActive={anyFilterActive} clearAllFilters={clearAllFilters}
      />
      <main className="cal-body" key={siteCode + month}>
        {data.weeks.map((w, i) => (
          <Week key={i} week={w} site={site}
                channelFilters={channelFilters}
                typeFilters={typeFilters}
                beneficiosOnly={beneficiosOnly}
                responsableFilters={responsableFilters}
                onOpen={setSelectedItem} />
        ))}
      </main>
      <footer className="cal-foot">
        <span className="cal-foot__hint">
          <strong>Canal = color</strong> · Tipo (Full / Flex / Coleta{site.owners?.xd ? " / XD" : ""}{site.owners?.me1 ? " / ME1" : ""}) en píldoras · 
          <span className="cal-foot__star">★</span> Beneficios (BC / POC)
        </span>
        <span className="cal-foot__site">{site.code} · {site.name}</span>
      </footer>
      {selectedItem && (
        <CampaignDetail item={selectedItem} site={site} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

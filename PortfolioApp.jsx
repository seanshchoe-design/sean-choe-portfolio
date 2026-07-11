/* global React */
/* Sean Choe portfolio — full click-through app, recreated from the design system
   UI kit. Registers window.PortfolioApp for the DC shell to mount. */

const DS = () => window.SeanChoePortfolioDesignSystem_9019b6 || {};

/* ------------------------------------------------------------------ */
/* Content model (from the design system's data.js)                    */
/* ------------------------------------------------------------------ */
window.SCP_DATA = window.SCP_DATA || {
  designer: {
    name: "Sean Choe",
    role: "Staff Product Designer",
    location: "New York",
    lead:
      "I design payments, commerce, and workspace products. Recently focused on AI-native product work and the moments where money changes hands.",
  },
  work: [
    {
      slug: "cedar", company: "Cedar", title: "Patient payments, reimagined",
      role: "Staff Product Designer", year: "2024", accent: "#E0653C",
      tags: ["Payments", "AI-native"],
      summary: "A ground-up redesign of how patients understand and pay medical bills, plus an AI assistant that explains charges in plain language.",
      discipline: "Product design, payments, design systems",
      stats: [
        { value: "38%", label: "Faster to pay", caption: "Median time from open to paid bill." },
        { value: "$1.2B", label: "Volume processed", caption: "Annualized on the new flow." },
        { value: "+22", label: "NPS", caption: "Post-payment survey lift." },
      ],
      overview: "Cedar helps hospitals and patients settle bills without the dread. The old flow buried the amount due under insurance jargon and dead ends. I led design on a rebuild that puts the number, the reason, and the next step in the first screen, then layers an AI assistant on top for the questions statements never answer.",
      problem: "Patients abandoned the flow because they could not tell what they owed or why. Support tickets were dominated by two questions: what is this charge, and can I pay it over time.",
      approach: "We restructured the bill around a single clear amount, a plain-language line-item breakdown, and one obvious action. The AI assistant reads the actual claim and answers in the patient's words, then hands off to a payment plan when the balance is large.",
      quote: { text: "The new flow made the bill feel like something you could actually act on, not a wall to climb.", cite: "Product lead", role: "Cedar Payments" },
    },
    {
      slug: "chewy", company: "Chewy", title: "Pharmacy checkout & autoship",
      role: "Staff Product Designer", year: "2023", accent: "#4C7FB8",
      tags: ["E-commerce", "Checkout"],
      summary: "Cutting friction from prescription reorders and autoship so pet parents never run out of the medication their animal depends on.",
      discipline: "E-commerce, checkout, subscriptions",
      stats: [
        { value: "31%", label: "Fewer drop-offs", caption: "At the prescription approval step." },
        { value: "2.4x", label: "Autoship adoption", caption: "For eligible pharmacy orders." },
      ],
      overview: "Chewy Pharmacy sits between a retail cart and a regulated prescription. I owned the checkout and autoship experience, threading vet approvals and refill timing into a flow that still feels like Chewy.",
      problem: "Prescription orders stalled while waiting on vet approval, and pet parents could not tell whether their order was actually going through.",
      approach: "We made approval status a first-class, tracked state, prompted autoship at the moment of proven intent, and wrote copy that reassures without burying the medical detail.",
      quote: { text: "Autoship stopped being a checkbox and started being a promise we could keep.", cite: "Group PM", role: "Chewy Pharmacy" },
    },
    {
      slug: "wework", company: "WeWork", title: "Member workspace app",
      role: "Senior Product Designer", year: "2022", accent: "#6E6BC4",
      tags: ["Workspace", "Mobile"],
      summary: "The daily app members use to book rooms, open doors, and get help across every building in the network.",
      discipline: "Mobile product design, spatial UX",
      stats: [
        { value: "1.1M", label: "Monthly bookings", caption: "Rooms and desks across the network." },
        { value: "4.8", label: "App Store rating", caption: "Up from 3.9 pre-redesign." },
      ],
      overview: "The member app was the connective tissue of a physical network. I led design on a rebuild that made booking, access, and support feel like one product instead of three.",
      problem: "Members juggled separate tools for booking, building access, and support, and none of them agreed with each other.",
      approach: "We unified the three around a location-aware home that surfaces the next thing you need, whether that is your 2pm room, the door in front of you, or a person to ask.",
      quote: { text: "It finally felt like the building and the app were the same company.", cite: "Head of Product", role: "WeWork" },
    },
    {
      slug: "coach", company: "Coach", title: "Commerce redesign",
      role: "Senior Product Designer", year: "2021", accent: "#B5893C",
      tags: ["E-commerce", "Retail"],
      summary: "A refreshed shopping experience that carries the weight of a heritage leather house into a fast, modern storefront.",
      discipline: "E-commerce, brand-led product design",
      stats: [
        { value: "18%", label: "Conversion lift", caption: "On the redesigned product page." },
        { value: "40%", label: "Faster PDP", caption: "Largest contentful paint." },
      ],
      overview: "Coach needed a storefront that felt as considered as the product. I partnered with brand and engineering to rebuild the product page and cart around craft and clarity.",
      problem: "The old storefront treated a heritage leather good like a generic SKU, with slow pages and cluttered detail views.",
      approach: "We gave the product room to breathe, foregrounded material and craft, and rebuilt the page for speed so the experience matched the object.",
      quote: { text: "The page finally respects the product the way the store does.", cite: "Creative Director", role: "Coach" },
    },
    {
      slug: "met", company: "The Met", title: "Collection experience",
      role: "Product Designer", year: "2020", accent: "#3E8E7E",
      tags: ["Cultural", "Web"],
      summary: "A way to wander the Metropolitan Museum of Art's online collection that feels closer to a gallery than a database.",
      discipline: "Editorial product design, discovery",
      stats: [
        { value: "3.2x", label: "Objects per visit", caption: "Depth of collection browsing." },
        { value: "490K", label: "Objects", caption: "Open-access works made explorable." },
      ],
      overview: "The Met's online collection held nearly half a million objects behind search boxes and filters. I designed a browsing experience that lets curiosity, not query syntax, lead.",
      problem: "Visitors could find an object they already knew, but had no good way to wander and discover.",
      approach: "We built editorial entry points, generous imagery, and gentle connections between works so one object leads to the next the way a gallery does.",
      quote: { text: "It gave the collection a sense of place again.", cite: "Digital Curator", role: "The Met" },
    },
  ],
  fun: [
    { title: "Leather goods", medium: "Hand-cut, saddle-stitched", note: "Wallets and totes made at the bench on weekends. Vegetable-tanned, no hardware I did not set myself.", accent: "#B5893C" },
    { title: "Jewelry", medium: "Lost-wax casting, silver", note: "Small cast pieces. An excuse to design something you finish in a day and can hold.", accent: "#9A9995" },
    { title: "Industrial design", medium: "Objects & furniture", note: "One-off objects and a chair or two. Where the interest in materials and payments both started.", accent: "#6E6D69" },
    { title: "Fashion design", medium: "Patternmaking, natural fibers", note: "Cut-and-sew garments drafted from scratch. Learning where structure ends and drape begins.", accent: "#8A7A6A" },
  ],
};

/* ------------------------------------------------------------------ */
/* Wordmark (type-set — no logo file was provided)                     */
/* ------------------------------------------------------------------ */
function Wordmark({ height = 22 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let alive = true;
    fetch((window.__resources && window.__resources.wordmark) || "assets/wordmark.svg").then((r) => r.text()).then((txt) => {
      if (!alive || !ref.current) return;
      txt = txt.replace(/fill="#000000"/g, "").replace("<svg ", "<svg style=\"height:100%;width:auto;display:block;fill:currentColor\" ");
      ref.current.innerHTML = txt;
    }).catch(() => {});
    return () => { alive = false; };
  }, []);
  return <span ref={ref} aria-label="Sean Choe" role="img" style={{ display: "inline-block", height: height, color: "var(--text-primary)" }} />;
}

/* ------------------------------------------------------------------ */
/* Chrome: Nav + Footer                                                */
/* ------------------------------------------------------------------ */
function Nav({ route, go, fidget, setFidget }) {
  const { ThemeToggle } = DS();
  const [isMobile, setIsMobile] = React.useState(() => (typeof window !== "undefined" ? window.innerWidth <= 640 : false));
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const items = [["home", "Home"], ["canvas", "Work", true], ["fun", "Fun"], ["about", "About"]];
  const activeSection = (route.name === "case" || route.name === "work") ? "canvas" : (route.name === "resume" ? "about" : route.name);
  const canvasIndex = items.findIndex(([id]) => id === "canvas");
  const activeIndex = fidget ? canvasIndex : Math.max(0, items.findIndex(([id]) => id === activeSection));

  const listRef = React.useRef(null);
  const btnRefs = React.useRef([]);
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [pill, setPill] = React.useState(null);
  const targetIndex = hoverIndex == null ? activeIndex : hoverIndex;

  React.useLayoutEffect(() => {
    const btn = btnRefs.current[targetIndex];
    const list = listRef.current;
    if (!btn || !list) return;
    setPill({ left: btn.offsetLeft, top: btn.offsetTop, width: btn.offsetWidth, height: btn.offsetHeight });
  }, [targetIndex, route.name, fidget]);

  const bar = isMobile
    ? { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12, padding: "14px clamp(1rem, 4vw, 1.5rem)", pointerEvents: "none" }
    : { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px clamp(1.25rem, 5vw, 4rem)", pointerEvents: "none" };
  const topRow = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 };
  const brand = { display: "flex", alignItems: "baseline", gap: 8, cursor: "pointer", background: "none", border: "none", padding: 0, pointerEvents: "auto" };
  const links = isMobile
    ? { pointerEvents: "auto", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, padding: 6, alignSelf: "center", background: "color-mix(in srgb, var(--surface-1) 55%, transparent)", backdropFilter: "blur(18px) saturate(180%)", WebkitBackdropFilter: "blur(18px) saturate(180%)", borderRadius: 999, border: "1px solid color-mix(in srgb, var(--text-primary) 14%, transparent)", boxShadow: "0 10px 34px -12px rgba(0,0,0,0.45), inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent), inset 0 -1px 1px color-mix(in srgb, #000 18%, transparent)" }
    : { pointerEvents: "auto", position: "absolute", left: "50%", top: 14, transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 4, padding: 6, background: "color-mix(in srgb, var(--surface-1) 55%, transparent)", backdropFilter: "blur(18px) saturate(180%)", WebkitBackdropFilter: "blur(18px) saturate(180%)", borderRadius: 999, border: "1px solid color-mix(in srgb, var(--text-primary) 14%, transparent)", boxShadow: "0 10px 34px -12px rgba(0,0,0,0.45), inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent), inset 0 -1px 1px color-mix(in srgb, #000 18%, transparent)" };
  const linkBase = { background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", padding: isMobile ? "9px 14px" : "9px 18px", borderRadius: 999, whiteSpace: "nowrap", position: "relative", zIndex: 1, transition: "color 120ms" };

  const linksBar = (
    <div ref={listRef} style={links} onMouseLeave={() => setHoverIndex(null)}>
      {pill && (
        <span aria-hidden="true" style={{ position: "absolute", left: pill.left, top: pill.top, width: pill.width, height: pill.height, borderRadius: 999, background: hoverIndex == null ? "var(--accent)" : "color-mix(in srgb, var(--text-primary) 12%, transparent)", boxShadow: hoverIndex == null ? "0 2px 10px -2px color-mix(in srgb, var(--accent) 60%, transparent), inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent)" : "inset 0 1px 0 color-mix(in srgb, #fff 30%, transparent)", transition: "left 420ms var(--ease-out, cubic-bezier(0.22,1,0.36,1)), top 420ms, width 420ms, background 260ms", zIndex: 0 }} />
      )}
      {items.map(([id, label, isToggle], i) => {
        const isActive = i === activeIndex;
        const isHovered = i === hoverIndex;
        return (
          <button key={id} ref={(el) => (btnRefs.current[i] = el)}
            aria-pressed={isToggle ? fidget : undefined}
            style={{ ...linkBase, display: "inline-flex", alignItems: "center", gap: 6, color: isActive && hoverIndex == null ? "var(--accent-contrast, #fff)" : isHovered ? "var(--text-accent)" : isActive ? "var(--text-primary)" : "var(--text-muted)" }}
            onMouseEnter={() => setHoverIndex(i)}
            onClick={() => { if (isToggle) { setFidget(!fidget); } else { if (fidget) setFidget(false); go({ name: id }); } }}>
            {isToggle && (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><line x1="22" y1="6" x2="2" y2="6" /><line x1="22" y1="18" x2="2" y2="18" /><line x1="6" y1="2" x2="6" y2="22" /><line x1="18" y1="2" x2="18" y2="22" /></svg>)}
            {label}
          </button>
        );
      })}
    </div>
  );

  const controls = (
    <div style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: 10 }}>
      <a href="mailto:hello@seanchoe.design" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 16px", borderRadius: 999, border: "1px solid var(--border-default)", background: "color-mix(in srgb, var(--surface-1) 60%, transparent)", color: "var(--text-primary)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", textDecoration: "none", transition: "background 0.2s ease, border-color 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-hover)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "color-mix(in srgb, var(--surface-1) 60%, transparent)"; }}>Get in touch</a>
      {ThemeToggle ? <ThemeToggle size={36} /> : null}
    </div>
  );

  const brandBtn = <button style={brand} onClick={() => go({ name: "home" })} aria-label="Sean Choe, home"><Wordmark height={20} /></button>;

  if (isMobile) {
    return (
      <nav style={bar}>
        <div style={topRow}>
          {brandBtn}
          {controls}
        </div>
        {linksBar}
      </nav>
    );
  }

  return (
    <nav style={bar}>
      {brandBtn}
      {linksBar}
      {controls}
    </nav>
  );
}

function Footer({ go }) {
  const f = {
    wrap: { borderTop: "1px solid var(--border-subtle)", marginTop: "var(--space-11)", padding: "var(--space-8) clamp(1.25rem, 5vw, 4rem) var(--space-7)", display: "flex", flexWrap: "wrap", gap: "var(--space-6)", justifyContent: "space-between", alignItems: "flex-end" },
    big: { fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 3.4vw, 2.1rem)", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--text-primary)", margin: 0, maxWidth: "16ch" },
    meta: { display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" },
    a: { color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid var(--border-default)", paddingBottom: 1, cursor: "pointer" },
  };
  return (
    <footer style={f.wrap}>
      <h2 style={f.big}>Let's make something worth paying for.</h2>
      <div style={f.meta}>
        <a style={f.a} href="mailto:hello@seanchoe.design">hello@seanchoe.design</a>
        <a style={f.a} onClick={() => go({ name: "work" })}>All work</a>
        <span>New York</span>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Home: video reel + lightbox + peek clusters + hero deck             */
/* ------------------------------------------------------------------ */
function VideoReel({ active }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; v.defaultMuted = true; v.volume = 0;
    if (active) { v.pause(); } else { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  }, [active]);
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <video ref={ref} src="assets/video-tile.mp4" autoPlay muted loop playsInline preload="auto" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: active ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-out)" }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: "rgba(245,243,238,0.94)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 34px rgba(0,0,0,0.45)", transform: active ? "scale(1)" : "scale(0.8)", transition: "transform var(--dur-base) var(--ease-out)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#17100C"><path d="M8 5v14l11-7z" /></svg>
        </span>
      </div>
    </div>
  );
}

function VideoLightbox({ open, onClose }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (open && v) { v.currentTime = 0; v.muted = false; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    if (!open && v) { v.pause(); }
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(20,18,16,0.62)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(1rem, 4vw, 3rem)", animation: "scp-fade var(--dur-base) var(--ease-out)" }}>
      <button onClick={onClose} aria-label="Close video" style={{ position: "absolute", top: 20, right: 20, width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--border-strong)", background: "rgba(0,0,0,0.4)", color: "#F5F3EE", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>
      <video ref={ref} src="assets/video-tile.mp4" controls autoPlay playsInline onClick={(e) => e.stopPropagation()} style={{ height: "min(90vh, 920px)", width: "auto", maxWidth: "95vw", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", background: "#000" }} />
    </div>
  );
}

function TiredOfReadingPeek() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, justifyContent: "center", transform: "rotate(-3deg)", marginBottom: 32 }}>
      <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.1, color: "var(--text-accent)", whiteSpace: "nowrap", textAlign: "center" }}>In case you are<br />tired of reading</span>
      <svg width="48" height="43" viewBox="0 0 58 52" fill="none" style={{ flexShrink: 0, marginBottom: -12 }}>
        <path d="M3 6C22 4 44 8 50 26c1.6 4.8 1.4 10 0.4 16" stroke="var(--text-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M42 39c3 3 6 6 8.6 8.4M50.6 47.4c1.4-3.4 2.6-6.6 3.4-10" stroke="var(--text-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

function ChipsPeek({ items }) {
  const rots = [-6, 4, -3, 6];
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", maxWidth: 240 }}>
      {items.map((it, i) => (
        <span key={it} style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-primary)", background: "var(--surface-2)", border: "1px solid var(--border-default)", borderRadius: 999, padding: "0.4rem 0.7rem", boxShadow: "0 12px 26px -14px rgba(0,0,0,0.5)", transform: `rotate(${rots[i % rots.length]}deg)`, whiteSpace: "nowrap" }}>{it}</span>
      ))}
    </div>
  );
}

function PhotosPeek({ accents = ["#B5893C", "#4C7FB8", "#3E8E7E"] }) {
  const photo = (rot, dx, accent) => (
    <div style={{ width: 78, height: 92, borderRadius: 10, border: "3px solid var(--surface-2)", background: `linear-gradient(150deg, color-mix(in srgb, ${accent} 55%, var(--surface-2)), color-mix(in srgb, ${accent} 22%, var(--surface-2)))`, boxShadow: "0 16px 30px -14px rgba(0,0,0,0.55)", transform: `rotate(${rot}deg) translateX(${dx}px)`, flexShrink: 0 }} />
  );
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      {photo(-10, 16, accents[0])}
      {photo(2, 0, accents[1])}
      {photo(12, -16, accents[2])}
    </div>
  );
}

function HomeScreen({ go }) {
  const { SectionLabel, CaseStudyCard, FeatureDeck } = DS();
  const D = window.SCP_DATA;
  const [lightbox, setLightbox] = React.useState(false);

  const h = {
    heroWrap: { padding: "clamp(0.75rem, 2vw, 1.5rem) clamp(1.25rem, 5vw, 4rem) 0", maxWidth: 1320, margin: "0 auto" },
    card: { position: "relative", overflow: "hidden", borderRadius: "clamp(20px, 2.5vw, 34px)", border: "1px solid var(--border-default)", background: "var(--surface-1)", padding: "clamp(1.75rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 5rem) clamp(2.25rem, 6vw, 4.5rem)" },
    gridBg: { position: "absolute", inset: 0, display: "var(--hero-grid-display, block)", backgroundColor: "var(--hero-grid-tint, color-mix(in srgb, #6FA8E0 2%, transparent))", backgroundImage: "linear-gradient(var(--hero-grid-line, color-mix(in srgb, #6FA8E0 16%, transparent)) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line, color-mix(in srgb, #6FA8E0 16%, transparent)) 1px, transparent 1px)", backgroundSize: "clamp(22px, 2.2vw, 30px) clamp(22px, 2.2vw, 30px)", backgroundPosition: "center", maskImage: "radial-gradient(135% 130% at 50% 50%, #000 66%, transparent 100%)", WebkitMaskImage: "radial-gradient(135% 130% at 50% 50%, #000 66%, transparent 100%)", pointerEvents: "none" },
    heroInner: { position: "relative", zIndex: 1 },
    hero: { padding: "clamp(2rem, 6vw, 4rem) clamp(1.25rem, 5vw, 4rem) clamp(0.5rem, 1.5vw, 1rem)", maxWidth: 1240, margin: "0 auto" },
    kicker: { marginBottom: "var(--space-6)" },
    title: { fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2.25rem, 5.6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0, textWrap: "balance" },
    it: { fontStyle: "italic", color: "var(--text-accent)" },
    lead: { marginTop: "var(--space-6)", maxWidth: "68ch", fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "clamp(1rem, 1.6vw, 1.25rem)", lineHeight: 1.7, color: "var(--text-secondary)" },
    pillCedar: { display: "inline-flex", alignItems: "center", background: "#B3F202", color: "#17100C", borderRadius: 999, padding: "0.34em 0.6em", margin: "0 0.15em", verticalAlign: "middle", lineHeight: 1, textDecoration: "none", transition: "filter var(--dur-base)" },
    pillCedarImg: { height: "1.05em", width: "auto", display: "block" },
    pillLeague: { display: "inline-flex", alignItems: "center", background: "#0C1B3A", borderRadius: 999, padding: "0.28em 0.6em", margin: "0 0.15em", verticalAlign: "middle", lineHeight: 1, textDecoration: "none", transition: "filter var(--dur-base)" },
    pillLeagueImg: { height: "1.35em", width: "auto", display: "block" },
    section: { padding: "0 clamp(1.25rem, 5vw, 4rem)", maxWidth: 1240, margin: "0 auto" },
    label: { marginBottom: "var(--space-6)", marginTop: "var(--space-9)" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(1.5rem, 3vw, 2.5rem)" },
  };
  const nav = (r) => (e) => { e.preventDefault(); go(r); };
  const reel = <VideoReel />;

  const tiles = [
    { key: "focus", label: "Focus", title: "Payments & AI-native", blurb: "The strongest recent chapter, from bills to the assistants that explain them.", cta: "See the work", fill: "#DEFF88", peek: <ChipsPeek items={["Payments", "AI-native", "Checkout", "Design systems"]} />, onClick: nav({ name: "work" }) },
    { key: "work", variant: "media", bare: true, media: reel, accent: D.work[0].accent, peek: <TiredOfReadingPeek />, onClick: (e) => { e.preventDefault(); setLightbox(true); } },
    { key: "other", label: "Other work", title: "Made by hand", blurb: "Leather, silver, and objects, kept apart from the product work.", cta: "Take a look", fill: "#FBCFC9", peek: <ChipsPeek items={["Leather", "Silver", "Objects"]} />, onClick: nav({ name: "fun" }) },
    { key: "about", label: "About", title: "Maker's hands, data brain", blurb: "Ten years across payments, commerce, workspace, and culture.", cta: "About Sean", fill: "#DAD3F5", peek: <PhotosPeek />, onClick: nav({ name: "about" }) },
  ];

  return (
    <div>
      <div style={h.heroWrap}>
        <div style={h.card}>
          <div style={h.gridBg} aria-hidden="true"></div>
          <div style={h.heroInner}>
            <h1 style={h.title}>I own products end to end, <span style={h.it}>from the first insight to the last pixel.</span></h1>
            <p style={h.lead}>Staff Product Designer at <a href="https://www.cedar.com" target="_blank" rel="noopener noreferrer" aria-label="Cedar" className="scp-pill" style={h.pillCedar}><img src="assets/cedar-logo.png" alt="Cedar" style={h.pillCedarImg} /></a>, working on payments and the AI-native experiences by day, studying fine art at <a href="https://www.artstudentsleague.org/" target="_blank" rel="noopener noreferrer" aria-label="The Art Students League" className="scp-pill" style={h.pillLeague}><img src="assets/asl-logo.svg" alt="The Art Students League" style={h.pillLeagueImg} /></a> by night.</p>
          </div>
          <div className="scp-deckwrap" style={{ position: "relative", zIndex: 1, marginTop: "clamp(2.75rem, 6vw, 5rem)", maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
            <FeatureDeck tiles={tiles} fan={true} fanDeg={3.5} gap="0px" tileStyle={{ margin: "0 clamp(-14px, -1.1vw, -7px)" }} style={{ paddingTop: 0 }} />
          </div>
        </div>
      </div>

      <section style={h.section}>
        <div style={h.label}><SectionLabel index="01" rule>Selected work</SectionLabel></div>
        <div style={h.grid}>
          {D.work.map((p) => (
            <div key={p.slug} onClick={() => go({ name: "case", slug: p.slug })} style={{ cursor: "pointer" }}>
              <CaseStudyCard company={p.company} title={p.title} summary={p.summary} year={p.year} tags={p.tags} accent={p.accent} />
            </div>
          ))}
        </div>
      </section>

      <VideoLightbox open={lightbox} onClose={() => setLightbox(false)} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Work index                                                          */
/* ------------------------------------------------------------------ */
function WorkIndexScreen({ go }) {
  const { SectionLabel, ProjectListRow } = DS();
  const D = window.SCP_DATA;
  const w = {
    wrap: { padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)", maxWidth: 1100, margin: "0 auto" },
    head: { marginBottom: "var(--space-8)" },
    title: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "var(--space-5) 0 0" },
    sub: { marginTop: "var(--space-4)", maxWidth: "50ch", fontSize: "1.0625rem", lineHeight: 1.5, color: "var(--text-secondary)" },
    list: { borderTop: "1px solid var(--border-subtle)" },
  };
  return (
    <div style={w.wrap}>
      <div style={w.list}>
        {D.work.map((p, i) => (
          <ProjectListRow key={p.slug} index={String(i + 1).padStart(2, "0")} company={p.company} title={p.title} role={p.role} year={p.year} onClick={(e) => { e.preventDefault(); go({ name: "case", slug: p.slug }); }} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */
function CaseStudyScreen({ slug, go }) {
  const { SectionLabel, StatBlock, PullQuote, Divider, Button, Tag } = DS();
  const D = window.SCP_DATA;
  const idx = D.work.findIndex((p) => p.slug === slug);
  const p = D.work[idx] || D.work[0];
  const next = D.work[(idx + 1) % D.work.length];

  const c = {
    hero: { padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) 0", maxWidth: 1100, margin: "0 auto" },
    back: { marginBottom: "var(--space-6)" },
    metaRow: { display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-5)" },
    title: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0, maxWidth: "16ch", textWrap: "balance" },
    lead: { marginTop: "var(--space-5)", maxWidth: "52ch", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: 1.4, color: "var(--text-secondary)" },
    facts: { display: "flex", gap: "var(--space-7)", flexWrap: "wrap", marginTop: "var(--space-7)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-subtle)" },
    fact: { display: "flex", flexDirection: "column", gap: 4 },
    factK: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" },
    factV: { fontSize: 14, color: "var(--text-primary)" },
    cover: { maxWidth: 1240, margin: "clamp(2.5rem, 6vw, 4.5rem) auto 0", height: "clamp(280px, 46vw, 560px)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", background: `radial-gradient(120% 120% at 80% 10%, color-mix(in srgb, ${p.accent} 38%, transparent), transparent 55%), var(--surface-1)`, display: "flex", alignItems: "flex-end", padding: "clamp(1.5rem, 4vw, 3rem)" },
    coverName: { fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 14vw, 11rem)", lineHeight: 0.8, color: "color-mix(in srgb, var(--text-primary) 14%, transparent)" },
    body: { maxWidth: 680, margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) 0" },
    block: { marginBottom: "var(--space-8)" },
    h3: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15, color: "var(--text-primary)", margin: "var(--space-4) 0 var(--space-4)" },
    para: { fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--text-secondary)", margin: 0 },
    stats: { maxWidth: 1100, margin: "clamp(2rem, 5vw, 3.5rem) auto 0", padding: "0 clamp(1.25rem, 5vw, 4rem)", display: "flex", gap: "clamp(1.5rem, 4vw, 3rem)", flexWrap: "wrap", alignItems: "stretch" },
    nextWrap: { maxWidth: 1100, margin: "var(--space-10) auto 0", padding: "var(--space-8) clamp(1.25rem, 5vw, 4rem)", borderTop: "1px solid var(--border-subtle)" },
    nextRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-5)", cursor: "pointer", flexWrap: "wrap" },
    nextTitle: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.01em", color: "var(--text-primary)", margin: 0 },
  };
  const Back = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>);

  return (
    <article>
      <header style={c.hero}>
        <div style={c.back}><Button variant="ghost" size="sm" iconLeft={<Back />} onClick={() => go({ name: "work" })}>All work</Button></div>
        <div style={c.metaRow}>
          <Tag tone="solid">{p.company}</Tag>
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <h1 style={c.title}>{p.title}</h1>
        <p style={c.lead}>{p.summary}</p>
        <div style={c.facts}>
          <div style={c.fact}><span style={c.factK}>Role</span><span style={c.factV}>{p.role}</span></div>
          <div style={c.fact}><span style={c.factK}>Year</span><span style={c.factV}>{p.year}</span></div>
          <div style={c.fact}><span style={c.factK}>Discipline</span><span style={c.factV}>{p.discipline}</span></div>
        </div>
      </header>

      <div style={c.cover}><span style={c.coverName}>{p.company}</span></div>

      <div style={c.body}>
        <section style={c.block}><SectionLabel index="01">Overview</SectionLabel><p style={c.para}>{p.overview}</p></section>
        <section style={c.block}><SectionLabel index="02">The problem</SectionLabel><h3 style={c.h3}>{p.problem}</h3></section>
        <PullQuote cite={p.quote.cite} role={p.quote.role}>{p.quote.text}</PullQuote>
        <section style={c.block}><SectionLabel index="03">The approach</SectionLabel><p style={c.para}>{p.approach}</p></section>
      </div>

      <div style={c.stats}>
        {p.stats.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 ? <Divider orientation="vertical" /> : null}
            <StatBlock value={s.value} label={s.label} caption={s.caption} />
          </React.Fragment>
        ))}
      </div>

      <div style={c.nextWrap}>
        <SectionLabel>Next</SectionLabel>
        <div style={{ height: 16 }} />
        <div style={c.nextRow} onClick={() => go({ name: "case", slug: next.slug })}>
          <h2 style={c.nextTitle}>{next.title}</h2>
          <Button variant="outline" onClick={(e) => { e.stopPropagation(); go({ name: "case", slug: next.slug }); }}>{next.company}</Button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
function AboutScreen({ go }) {
  const { SectionLabel, Tag, Button, ProjectListRow } = DS();
  const D = window.SCP_DATA;
  const a = {
    wrap: { padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "start" },
    left: { minWidth: 0 },
    title: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "var(--space-5) 0 var(--space-6)", textWrap: "balance" },
    lead: { fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: 1.5, color: "var(--text-primary)", margin: "0 0 var(--space-5)" },
    para: { fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--text-secondary)", margin: "0 0 var(--space-5)", maxWidth: "58ch" },
    portrait: { aspectRatio: "4 / 5", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", background: "radial-gradient(120% 100% at 100% 0%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 60%), var(--surface-1)", display: "flex", alignItems: "flex-end", padding: "var(--space-5)", marginBottom: "var(--space-6)" },
    portraitName: { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", color: "color-mix(in srgb, var(--text-primary) 40%, transparent)" },
    side: { position: "sticky", top: 90 },
    block: { marginBottom: "var(--space-6)" },
    k: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 },
    row: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 14 },
    rowC: { color: "var(--text-primary)" },
    rowY: { fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: 12 },
    tags: { display: "flex", gap: 8, flexWrap: "wrap" },
    workSection: { padding: "0 clamp(1.25rem, 5vw, 4rem) clamp(2.5rem, 7vw, 5rem)", maxWidth: 1100, margin: "0 auto" },
    workHead: { marginBottom: "var(--space-6)" },
    workTitle: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "var(--space-4) 0 0" },
    workList: { borderTop: "1px solid var(--border-subtle)" },
    aboutName: { fontFamily: "var(--font-mono)", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", letterSpacing: "0.02em", color: "var(--text-primary)", margin: 0 },
    aboutDisc: { fontFamily: "var(--font-mono)", fontSize: "clamp(1.15rem, 2.4vw, 1.7rem)", lineHeight: 1.4, letterSpacing: "0.01em", color: "var(--text-primary)", margin: "clamp(18px, 2.5vw, 28px) 0 0", textWrap: "balance" },
    aboutBio: { fontFamily: "var(--font-mono)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--text-muted)", margin: "0 0 var(--space-5)" },
    aboutEm: { color: "var(--text-primary)" },
    resumeBtn: { display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 22px", borderRadius: 999, background: "transparent", color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.04em", textDecoration: "none", border: "1px solid var(--border-default)", cursor: "pointer", transition: "background var(--dur-base), border-color var(--dur-base)" },
    resumeSub: { display: "block", marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" },
    expRow: { display: "grid", gridTemplateColumns: "minmax(130px, 0.6fr) minmax(0, 1.4fr) auto", alignItems: "center", gap: "clamp(1.25rem, 4vw, 3rem)", padding: "clamp(24px, 3vw, 34px) 0", borderBottom: "1px solid var(--border-subtle)" },
    expYear: { fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-primary)", whiteSpace: "nowrap" },
    expMid: { display: "flex", flexDirection: "column", gap: 12, minWidth: 0 },
    expCompany: { fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.04em", color: "var(--text-primary)" },
    expRole: { fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.5, color: "var(--text-muted)" },
    expLogo: { justifySelf: "end", minWidth: 132, height: 56, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed var(--border-default)", borderRadius: 10, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", textAlign: "center", padding: "0 14px" },
  };
  const workRanges = { cedar: "2024 - Current", chewy: "2023 - 2024", wework: "2022 - 2023", coach: "2021 - 2022", met: "2020 - 2021" };
  const timeline = [["Cedar", "2023 to now"], ["Chewy", "2022 to 2023"], ["WeWork", "2021 to 2022"], ["Coach", "2020 to 2021"], ["The Met", "2019 to 2020"]];
  return (
    <React.Fragment>
    <div style={a.wrap}>
      <div style={a.left}>
        <p style={a.aboutName}>Sean Soonho Choe</p>
        <h1 style={a.aboutDisc}>Product Design / Payments / AI-Native Experiences / Design Systems</h1>
        <div style={{ marginTop: "clamp(28px, 4vw, 48px)" }}>
          <p style={a.aboutBio}>I am a Staff Product Designer focused on the moments where money changes hands. Currently working at <span style={a.aboutEm}>Cedar</span> in New York on patient billing and AI-native product work.</p>
          <p style={a.aboutBio}>I have a decade of work across payments, e-commerce, workspace, and cultural institutions, including <span style={a.aboutEm}>Chewy</span>, <span style={a.aboutEm}>WeWork</span>, <span style={a.aboutEm}>Coach</span>, and <span style={a.aboutEm}>The Metropolitan Museum of Art</span>. I like the unglamorous parts of a product: the checkout, the bill, the approval step, the empty state.</p>
          <p style={a.aboutBio}>When I am not working on commercial things, I find joy in making things with my hands: leather, silver, and small objects.</p>
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go({ name: "resume" }); }} style={a.resumeBtn} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-hover, color-mix(in srgb, var(--text-primary) 6%, transparent))"; e.currentTarget.style.borderColor = "color-mix(in srgb, var(--text-primary) 28%, transparent)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border-default)"; }}>
            View professional resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
          </a>
        </div>
      </div>
      <aside style={a.side}>
        <div style={a.portrait}><span style={a.portraitName}>SC</span></div>
      </aside>
    </div>
    <section style={a.workSection}>
      <header style={a.workHead}>
        <SectionLabel index="01">Selected work</SectionLabel>
        <h2 style={a.workTitle}>Work</h2>
      </header>
      <div style={{ ...a.workList, pointerEvents: "none" }}>
        {D.work.map((p) => (
          <div key={p.slug} style={a.expRow}>
            <div style={a.expYear}>{workRanges[p.slug] || p.year} &gt;</div>
            <div style={a.expMid}>
              <div style={a.expCompany}>{p.company} //</div>
              <div style={a.expRole}>{p.role}</div>
            </div>
            <div style={a.expLogo}>{p.company}</div>
          </div>
        ))}
      </div>
    </section>
    </React.Fragment>
  );
}

/* ------------------------------------------------------------------ */
/* Resume                                                              */
/* ------------------------------------------------------------------ */
function ResumeScreen({ go }) {
  const { Button } = DS();
  const groups = [
    {
      section: "Corporate / Startup Experience",
      items: [
        { title: "Cedar // Staff Product Designer", meta: "(Individual Contributor)", desc: "Leading payments and AI-native product design for patient billing. Placeholder summary, fill in later.", date: "2024 to Current" },
        { title: "Chewy // Staff Product Designer", meta: "(Individual Contributor)", desc: "Pharmacy checkout and autoship. Placeholder summary, fill in later.", date: "2023 to 2024" },
        { title: "WeWork // Senior Product Designer", meta: "(Individual Contributor)", desc: "Member workspace app. Placeholder summary, fill in later.", date: "2022 to 2023" },
        { title: "Coach // Senior Product Designer", meta: "(Individual Contributor)", desc: "Commerce redesign. Placeholder summary, fill in later.", date: "2021 to 2022" },
        { title: "The Met // Product Designer", meta: "(Individual Contributor)", desc: "Collection experience. Placeholder summary, fill in later.", date: "2020 to 2021" },
      ],
    },
    {
      section: "Agency Experience",
      items: [
        { title: "Agency name // Role", meta: "(Individual Contributor)", desc: "Placeholder description, fill in later.", date: "Year to Year" },
        { title: "Agency name // Role", meta: "(Individual Contributor)", desc: "Placeholder description, fill in later.", date: "Year to Year" },
      ],
    },
    {
      section: "Internships",
      items: [
        { title: "Company // Product Design Intern", desc: "Placeholder description, fill in later.", date: "Year" },
      ],
    },
    {
      section: "Freelance Projects",
      items: [
        { title: "Client // Freelance Designer", desc: "Placeholder description, fill in later.", date: "Year" },
      ],
    },
    {
      section: "Education",
      items: [
        { title: "School // Degree", desc: "Placeholder description, fill in later.", date: "Year to Year" },
      ],
    },
  ];
  const contact = [
    ["Email", "hello@seanchoe.design"],
    ["Location", "New York"],
    ["Site", "seanchoe.design"],
  ];
  const r = {
    wrap: { padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)", maxWidth: 940, margin: "0 auto" },
    back: { marginBottom: "var(--space-6)" },
    title: { fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "var(--space-4) 0 0" },
    intro: { fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.7, color: "var(--text-muted)", margin: "18px 0 0", maxWidth: "60ch" },
    group: { marginTop: "clamp(2.5rem, 5vw, 3.5rem)" },
    groupLabel: { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-accent)", margin: "0 0 var(--space-3)", paddingBottom: "var(--space-3)", borderBottom: "1px solid var(--border-subtle)" },
    row: { display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(140px, auto)", gap: "clamp(1rem, 3vw, 2.5rem)", alignItems: "start", padding: "clamp(18px, 2.5vw, 26px) 0", borderBottom: "1px solid var(--border-subtle)" },
    itemTitle: { fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.03em", color: "var(--text-primary)", margin: 0 },
    itemMeta: { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.03em", color: "var(--text-muted)" },
    itemDesc: { fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.02em", lineHeight: 1.7, color: "var(--text-muted)", margin: "10px 0 0", maxWidth: "62ch" },
    itemDate: { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", justifySelf: "end", whiteSpace: "nowrap", paddingTop: 2 },
    contactRow: { display: "grid", gridTemplateColumns: "minmax(120px, 180px) 1fr", gap: "clamp(1rem, 3vw, 2rem)", padding: "14px 0", borderBottom: "1px solid var(--border-subtle)" },
    contactK: { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" },
    contactV: { fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.03em", color: "var(--text-primary)" },
  };
  const Back = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>);
  return (
    <div style={r.wrap}>
      <div style={r.back}><Button variant="ghost" size="sm" iconLeft={<Back />} onClick={() => go({ name: "about" })}>Back to about</Button></div>
      <h1 style={r.title}>Resume</h1>
      <p style={r.intro}>A full record of roles, projects, and study. Placeholder content for now, real detail to follow.</p>
      {groups.map((g) => (
        <section key={g.section} style={r.group}>
          <div style={r.groupLabel}>{g.section}</div>
          {g.items.map((it, i) => (
            <div key={i} style={r.row}>
              <div>
                <p style={r.itemTitle}>{it.title}{it.meta ? <span style={r.itemMeta}>{"  "}{it.meta}</span> : null}</p>
                <p style={r.itemDesc}>{it.desc}</p>
              </div>
              <div style={r.itemDate}>{it.date}</div>
            </div>
          ))}
        </section>
      ))}
      <section style={r.group}>
        <div style={r.groupLabel}>Contact Info</div>
        {contact.map(([k, v]) => (
          <div key={k} style={r.contactRow}>
            <span style={r.contactK}>{k}</span>
            <span style={r.contactV}>{v}</span>
          </div>
        ))}
      </section>
      <div style={{ marginTop: "clamp(2.5rem, 5vw, 3.5rem)" }}><Button variant="outline" onClick={() => go({ name: "work" })}>View work</Button></div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Other work (Fun)                                                    */
/* ------------------------------------------------------------------ */
function FunScreen() {
  const { SectionLabel } = DS();
  const D = window.SCP_DATA;
  const f = {
    wrap: { padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)", maxWidth: 1100, margin: "0 auto" },
    heroWrap: { padding: "clamp(0.75rem, 2vw, 1.5rem) clamp(1.25rem, 5vw, 4rem) 0", maxWidth: 1320, margin: "0 auto" },
    heroCard: { position: "relative", overflow: "hidden", borderRadius: "clamp(20px, 2.5vw, 34px)", border: "1px solid var(--border-default)", background: "var(--surface-1)", padding: "clamp(1.75rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 5rem) clamp(2.25rem, 6vw, 4.5rem)" },
    gridBg: { position: "absolute", inset: 0, display: "var(--hero-grid-display, block)", backgroundColor: "var(--hero-grid-tint, color-mix(in srgb, #6FA8E0 2%, transparent))", backgroundImage: "linear-gradient(var(--hero-grid-line, color-mix(in srgb, #6FA8E0 16%, transparent)) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line, color-mix(in srgb, #6FA8E0 16%, transparent)) 1px, transparent 1px)", backgroundSize: "clamp(22px, 2.2vw, 30px) clamp(22px, 2.2vw, 30px)", backgroundPosition: "center", maskImage: "radial-gradient(135% 130% at 50% 50%, #000 66%, transparent 100%)", WebkitMaskImage: "radial-gradient(135% 130% at 50% 50%, #000 66%, transparent 100%)", pointerEvents: "none" },
    heroInner: { position: "relative", zIndex: 1, maxWidth: "52ch" },
    head: { maxWidth: "52ch", marginBottom: "var(--space-8)" },
    title: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.04, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "var(--space-5) 0 var(--space-4)" },
    sub: { fontSize: "1.0625rem", lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 },
    grid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(1.25rem, 3vw, 2rem)" },
    card: { border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--surface-1)" },
    swatch: (accent) => ({ height: 160, background: `radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, ${accent} 40%, transparent), transparent 60%), var(--surface-2)` }),
    body: { padding: "var(--space-5)" },
    ct: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", color: "var(--text-primary)", margin: "0 0 4px" },
    cm: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 10 },
    cn: { fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 },
  };
  return (
    <div>
      <div style={f.heroWrap}>
        <div style={f.heroCard}>
          <div style={f.gridBg} aria-hidden="true"></div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={f.heroInner}>
              <SectionLabel>Other work</SectionLabel>
              <h1 style={f.title}>Things I make with my hands.</h1>
              <p style={f.sub}>Separate from the product work. Leather, silver, and objects. Kept here on purpose, because the discipline is different and the stakes are lower.</p>
            </div>
            <div style={{ ...f.grid, marginTop: "clamp(2rem, 5vw, 3.5rem)" }}>
              {D.fun.map((item) => (
                <div key={item.title} style={f.card}>
                  <div style={f.swatch(item.accent)} />
                  <div style={f.body}>
                    <div style={f.cm}>{item.medium}</div>
                    <h3 style={f.ct}>{item.title}</h3>
                    <p style={f.cn}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SeanAI assistant                                                    */
/* ------------------------------------------------------------------ */
function buildKnowledge() {
  const D = window.SCP_DATA || {};
  const d = D.designer || {};
  const work = (D.work || []).map((p) => {
    const stats = (p.stats || []).map((s) => `${s.value} ${s.label} (${s.caption})`).join("; ");
    return [`### ${p.company} — ${p.title} (${p.year}, ${p.role})`, `Tags: ${(p.tags || []).join(", ")}. Discipline: ${p.discipline}.`, `Summary: ${p.summary}`, p.overview ? `Overview: ${p.overview}` : "", p.problem ? `Problem: ${p.problem}` : "", p.approach ? `Approach: ${p.approach}` : "", stats ? `Results: ${stats}` : ""].filter(Boolean).join("\n");
  }).join("\n\n");
  const fun = (D.fun || []).map((f) => `- ${f.title} (${f.medium}): ${f.note}`).join("\n");
  return [`Name: ${d.name}. Role: ${d.role}, based in ${d.location}.`, `Positioning: ${d.lead}`, ``, `## Case studies / product work`, work, ``, `## Craft work (side / non-product)`, fun].join("\n");
}
const SYSTEM_PROMPT = () => `You are SeanAI, the friendly assistant embedded on Sean Choe's portfolio site. You answer visitors' questions about Sean — his work, background, design approach, and craft. Speak about Sean in the third person, warmly and concisely (2-4 sentences unless more is clearly wanted). Ground every answer in the facts below. If something isn't covered, say you don't have that detail and suggest reaching out via the "Say hello" contact. Never invent employers, metrics, or dates. Sound like a sharp, human portfolio host, not a corporate bot. No emoji.\n\nKNOWLEDGE BASE\n${buildKnowledge()}`;
const SUGGESTIONS = ["What's Sean's design focus?", "I'd love to hire Sean", "Which case study should I start with?", "Tell me about his craft work"];
const STORE_KEY = "seanai.chat.v1";

function AIAvatar({ size = 40 }) {
  return (<div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(150deg, color-mix(in srgb, var(--accent) 90%, #000), color-mix(in srgb, var(--accent) 55%, #000))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: size * 0.42, color: "#F5F3EE", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)", letterSpacing: "-0.02em" }}>SC</div>);
}
function TypingDots() {
  return (<div style={{ display: "flex", gap: 4, padding: "4px 2px" }}>{[0, 1, 2].map((i) => (<span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", animation: `seanai-bounce 1s ${i * 0.15}s infinite ease-in-out` }} />))}</div>);
}

function AskAI() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState(() => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { return []; } });
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const scrollRef = React.useRef(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => { try { localStorage.setItem(STORE_KEY, JSON.stringify(messages)); } catch (e) {} const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; }, [messages, busy]);
  React.useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setInput("");
    const next = [...messages, { role: "user", content: q }];
    setMessages(next); setBusy(true);
    try {
      const reply = await window.claude.complete({ system: SYSTEM_PROMPT(), max_tokens: 600, messages: next.map((m) => ({ role: m.role, content: m.content })) });
      setMessages((cur) => [...cur, { role: "assistant", content: (reply || "").trim() || "Sorry, I didn't catch that, try asking another way." }]);
    } catch (e) {
      setMessages((cur) => [...cur, { role: "assistant", content: "I'm having trouble responding right now. For anything urgent, reach Sean via the “Say hello” link.", error: true }]);
    } finally { setBusy(false); }
  };
  const reset = () => setMessages([]);
  const s = aiStyles;
  const empty = messages.length === 0;

  return (
    <>
      <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close SeanAI" : "Ask SeanAI"} style={{ ...s.launcher, transform: open ? "scale(0.9)" : "scale(1)" }}>
        {open ? (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5F3EE" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>) : (<AIAvatar size={56} />)}
      </button>
      {open && (
        <div style={s.panel} role="dialog" aria-label="SeanAI chat">
          <div style={s.header}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <AIAvatar size={34} />
              <div><div style={s.title}>SeanAI</div><div style={s.subtitle}>Ask anything about Sean</div></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {!empty && (<button onClick={reset} aria-label="Clear conversation" style={s.iconBtn} title="New chat"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg></button>)}
              <button onClick={() => setOpen(false)} aria-label="Close" style={s.iconBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg></button>
            </div>
          </div>
          <div ref={scrollRef} style={s.scroll}>
            {empty ? (
              <div style={s.intro}>
                <AIAvatar size={52} />
                <h3 style={s.introTitle}>What would you like to know about Sean?</h3>
                <div style={s.chips}>{SUGGESTIONS.map((q) => (<button key={q} onClick={() => send(q)} style={s.chip}>{q}</button>))}</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {messages.map((m, i) => (<div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}><div style={m.role === "user" ? s.userBubble : { ...s.aiBubble, ...(m.error ? { color: "var(--text-secondary)" } : {}) }}>{m.content}</div></div>))}
                {busy && (<div style={{ display: "flex", justifyContent: "flex-start" }}><div style={s.aiBubble}><TypingDots /></div></div>)}
              </div>
            )}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} style={s.inputRow}>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about Sean…" style={s.input} />
            <button type="submit" aria-label="Send" disabled={busy || !input.trim()} style={{ ...s.send, opacity: busy || !input.trim() ? 0.4 : 1 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F3EE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg></button>
          </form>
        </div>
      )}
    </>
  );
}
const aiStyles = {
  launcher: { position: "fixed", right: "clamp(1rem, 3vw, 2rem)", bottom: "clamp(1rem, 3vw, 2rem)", width: 60, height: 60, borderRadius: "50%", border: "none", cursor: "pointer", zIndex: 1200, background: "var(--surface-1)", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px -12px rgba(0,0,0,0.5)", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)" },
  panel: { position: "fixed", right: "clamp(1rem, 3vw, 2rem)", bottom: "calc(clamp(1rem, 3vw, 2rem) + 74px)", width: "min(400px, calc(100vw - 2rem))", height: "min(600px, calc(100vh - 140px))", display: "flex", flexDirection: "column", zIndex: 1200, background: "color-mix(in srgb, var(--surface-1) 88%, transparent)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", borderRadius: "var(--radius-lg)", border: "1px solid color-mix(in srgb, var(--text-primary) 12%, transparent)", boxShadow: "0 30px 70px -24px rgba(0,0,0,0.6), inset 0 1px 0 color-mix(in srgb, #fff 20%, transparent)", overflow: "hidden", animation: "seanai-rise var(--dur-base) var(--ease-out)" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 14px 14px 16px", borderBottom: "1px solid var(--border-subtle)", flexShrink: 0 },
  title: { fontFamily: "var(--font-serif)", fontSize: 17, color: "var(--text-primary)", lineHeight: 1.1 },
  subtitle: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", color: "var(--text-muted)", marginTop: 2 },
  iconBtn: { width: 30, height: 30, borderRadius: "50%", border: "none", cursor: "pointer", background: "transparent", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background var(--dur-base), color var(--dur-base)" },
  scroll: { flex: 1, overflowY: "auto", padding: "18px 16px" },
  intro: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, paddingTop: 8 },
  introTitle: { fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "1.5rem", lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--text-primary)", margin: 0, textWrap: "balance" },
  chips: { display: "flex", flexDirection: "column", gap: 8, width: "100%" },
  chip: { textAlign: "left", width: "100%", padding: "13px 16px", borderRadius: 14, border: "1px solid var(--border-default)", background: "var(--surface-1)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-secondary)", transition: "background var(--dur-base), color var(--dur-base)" },
  userBubble: { maxWidth: "82%", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", background: "var(--accent)", color: "#F5F3EE", fontSize: 14, lineHeight: 1.5, fontFamily: "var(--font-sans)" },
  aiBubble: { maxWidth: "85%", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", background: "var(--surface-2)", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", fontSize: 14, lineHeight: 1.55, fontFamily: "var(--font-sans)", whiteSpace: "pre-wrap" },
  inputRow: { display: "flex", alignItems: "center", gap: 8, padding: "12px 12px 14px", borderTop: "1px solid var(--border-subtle)", flexShrink: 0 },
  input: { flex: 1, border: "1px solid var(--border-default)", background: "var(--bg-base)", borderRadius: 999, padding: "11px 16px", fontSize: 14, fontFamily: "var(--font-sans)", color: "var(--text-primary)", outline: "none" },
  send: { width: 40, height: 40, borderRadius: "50%", border: "none", cursor: "pointer", flexShrink: 0, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity var(--dur-base)" },
};

/* ------------------------------------------------------------------ */
/* Fidget mode: draggable faces + project cards                        */
/* ------------------------------------------------------------------ */
function Draggable({ initial, size, nextZ, round, onActivate, children }) {
  const [pos, setPos] = React.useState(initial);
  const [z, setZ] = React.useState(1);
  const [grabbing, setGrabbing] = React.useState(false);
  const posRef = React.useRef(initial);
  posRef.current = pos;

  const onDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setZ(nextZ());
    setGrabbing(true);
    const startX = e.clientX, startY = e.clientY;
    const ox = posRef.current.x, oy = posRef.current.y;
    let moved = 0;
    const move = (ev) => {
      moved = Math.max(moved, Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY));
      const nx = Math.max(-40, Math.min(window.innerWidth - size.w + 40, ox + (ev.clientX - startX)));
      const ny = Math.max(64, Math.min(window.innerHeight - size.h + 40, oy + (ev.clientY - startY)));
      setPos({ x: nx, y: ny });
    };
    const up = () => {
      setGrabbing(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      if (moved < 6 && onActivate) onActivate();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div onPointerDown={onDown} style={{ position: "absolute", left: 0, top: 0, transform: `translate(${pos.x}px, ${pos.y}px) rotate(${grabbing ? "-1.5deg" : "0deg"}) scale(${grabbing ? 1.04 : 1})`, transition: grabbing ? "transform 80ms ease" : "transform 320ms cubic-bezier(0.16,1,0.3,1)", cursor: grabbing ? "grabbing" : "grab", touchAction: "none", zIndex: z, userSelect: "none", WebkitUserSelect: "none" }}>
      {children}
    </div>
  );
}

function FidgetFace({ size, gradient, expr }) {
  const eyeY = 46, eL = 38, eR = 62;
  let eyes, mouth;
  if (expr === "sleepy") {
    eyes = <><path d={`M${eL - 6} ${eyeY} q6 6 12 0`} stroke="#141310" strokeWidth="3.4" fill="none" strokeLinecap="round" /><path d={`M${eR - 6} ${eyeY} q6 6 12 0`} stroke="#141310" strokeWidth="3.4" fill="none" strokeLinecap="round" /></>;
    mouth = <path d="M44 66 q6 5 12 0" stroke="#141310" strokeWidth="3.2" fill="none" strokeLinecap="round" />;
  } else if (expr === "happy") {
    eyes = <><ellipse cx={eL} cy={eyeY} rx="3.6" ry="5" fill="#141310" /><ellipse cx={eR} cy={eyeY} rx="3.6" ry="5" fill="#141310" /></>;
    mouth = <path d="M42 62 q8 9 16 0" stroke="#141310" strokeWidth="3.4" fill="none" strokeLinecap="round" />;
  } else if (expr === "sad") {
    eyes = <><ellipse cx={eL} cy={eyeY} rx="3.6" ry="5" fill="#141310" /><ellipse cx={eR} cy={eyeY} rx="3.6" ry="5" fill="#141310" /><circle cx={eR + 5} cy={eyeY + 10} r="2.6" fill="#fff" /></>;
    mouth = <path d="M43 70 q7 -7 14 0" stroke="#141310" strokeWidth="3.2" fill="none" strokeLinecap="round" />;
  } else {
    eyes = <><ellipse cx={eL} cy={eyeY} rx="3.6" ry="5.5" fill="#141310" /><ellipse cx={eR} cy={eyeY} rx="3.6" ry="5.5" fill="#141310" /></>;
    mouth = <path d="M48 62 q2 6 4 0" stroke="#141310" strokeWidth="3.2" fill="none" strokeLinecap="round" />;
  }
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: gradient, position: "relative", overflow: "hidden", boxShadow: "0 26px 60px -22px rgba(0,0,0,0.5)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 0.5px, transparent 1.1px)", backgroundSize: "5px 5px", mixBlendMode: "overlay", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.18) 0.5px, transparent 1.1px)", backgroundSize: "5px 5px", mixBlendMode: "multiply", pointerEvents: "none" }}></div>
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>{eyes}{mouth}</svg>
    </div>
  );
}

function FidgetCard({ item, width = 236 }) {
  return (
    <div style={{ width, borderRadius: 20, overflow: "hidden", background: "var(--surface-1)", border: "1px solid var(--border-default)", boxShadow: "0 18px 50px -20px rgba(0,0,0,0.34)" }}>
      <div style={{ height: 128, background: `radial-gradient(130% 130% at 25% 15%, color-mix(in srgb, ${item.accent} 62%, transparent), transparent 60%), ${item.accent}`, position: "relative", display: "flex", alignItems: "flex-end", padding: 14 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>{item.year}</span>
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{item.company}</div>
        <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.3rem", lineHeight: 1.1, color: "var(--text-primary)", margin: 0 }}>{item.title}</h3>
      </div>
    </div>
  );
}

function FidgetStage({ onExit, go }) {
  const D = window.SCP_DATA;
  const scrollRef = React.useRef(null);
  const [ww, setWW] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  React.useEffect(() => {
    const set = () => setWW((scrollRef.current && scrollRef.current.clientWidth) || window.innerWidth);
    set();
    window.addEventListener("resize", set);
    const onKey = (ev) => { if (ev.key === "Escape") onExit(); };
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("resize", set); document.removeEventListener("keydown", onKey); };
  }, []);

  // Career journey: newest first, top to bottom, connected by a dashed path.
  const projects = D.work;
  const n = projects.length;
  const isNarrow = ww <= 720;
  const contentW = Math.min(1040, ww);
  const cardW = isNarrow ? Math.min(320, contentW - 40) : 300;
  const cardH = 210;
  const padX = isNarrow ? (contentW - cardW) / 2 : Math.round(contentW * 0.06);
  const topPad = 150;
  const yStep = isNarrow ? 268 : 300;
  const nodes = projects.map((item, i) => {
    const rightSide = !isNarrow && i % 2 === 0;
    const x = isNarrow ? padX : (rightSide ? contentW - cardW - padX : padX);
    const y = topPad + i * yStep;
    return { item, x, y, cx: x + cardW / 2, cy: y + cardH / 2 };
  });
  const stageH = topPad + (n - 1) * yStep + cardH + 160;

  const path = React.useMemo(() => {
    if (nodes.length < 2) return "";
    // seeded RNG so the wobble is stable across re-renders
    let seed = 0x9e3779b9 ^ Math.round(contentW) ^ (isNarrow ? 7 : 0) ^ (n * 131);
    const rand = () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const bez = (a, c1, c2, b, t) => { const u = 1 - t; return u * u * u * a + 3 * u * u * t * c1 + 3 * u * t * t * c2 + t * t * t * b; };
    const pts = [];
    for (let i = 1; i < nodes.length; i++) {
      const a = nodes[i - 1], b = nodes[i];
      const midY = (a.cy + b.cy) / 2;
      const c1x = a.cx, c2x = b.cx, c1y = midY, c2y = midY;
      const steps = Math.max(14, Math.round((Math.abs(b.cx - a.cx) + Math.abs(b.cy - a.cy)) / 22));
      const phase = rand() * Math.PI * 2;
      const freq = 2 + rand() * 1.6;
      for (let s = (i === 1 ? 0 : 1); s <= steps; s++) {
        const t = s / steps;
        const eps = 0.001;
        const x = bez(a.cx, c1x, c2x, b.cx, t), y = bez(a.cy, c1y, c2y, b.cy, t);
        const x2 = bez(a.cx, c1x, c2x, b.cx, Math.min(1, t + eps)), y2 = bez(a.cy, c1y, c2y, b.cy, Math.min(1, t + eps));
        let dx = x2 - x, dy = y2 - y; const len = Math.hypot(dx, dy) || 1; dx /= len; dy /= len;
        const taper = Math.sin(Math.PI * t); // 0 at the nodes, 1 mid-segment
        const wob = (Math.sin(t * Math.PI * freq + phase) * 6.5 + (rand() - 0.5) * 5) * taper;
        pts.push({ x: x - dy * wob, y: y + dx * wob });
      }
    }
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let k = 1; k < pts.length - 1; k++) {
      const mx = (pts[k].x + pts[k + 1].x) / 2, my = (pts[k].y + pts[k + 1].y) / 2;
      d += ` Q ${pts[k].x.toFixed(1)} ${pts[k].y.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
    return d;
  }, [contentW, isNarrow, n, cardW]);

  return (
    <div ref={scrollRef} style={{ position: "fixed", inset: 0, zIndex: 900, background: "var(--bg-base)", overflowY: "auto", overflowX: "hidden", animation: "scp-fade var(--dur-base) var(--ease-out)" }}>
      <div style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "90px 1rem 8px", pointerEvents: "none", background: "linear-gradient(var(--bg-base) 62%, transparent)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 8 }}>Product design · 2020 to now</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0 }}>Work</h2>
        <p style={{ maxWidth: "44ch", margin: "16px auto 0", fontFamily: "var(--font-sans)", fontSize: "1.0625rem", lineHeight: 1.5, color: "var(--text-secondary)" }}>Ten years across payments, e-commerce, workspace, and cultural institutions. The through line is clarity at the moment a decision gets made.</p>
      </div>

      <div style={{ position: "relative", width: contentW, margin: "0 auto", height: stageH, marginTop: -84 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(color-mix(in srgb, var(--text-primary) 4.5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--text-primary) 4.5%, transparent) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }}></div>
        <svg width={contentW} height={stageH} style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" }} aria-hidden="true">
          <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.5 13" opacity="0.85" />
          {nodes.map((p, i) => (
            <circle key={"dot" + i} cx={p.cx} cy={p.cy} r="5.5" fill="var(--bg-base)" stroke="var(--accent)" strokeWidth="2.5" />
          ))}
        </svg>
        {nodes.map((p, i) => (
          <div key={p.item.slug} style={{ position: "absolute", left: p.x, top: p.y, width: cardW, zIndex: 1 }}>
            <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--text-accent)", marginBottom: 8, textAlign: p.x === padX && !isNarrow ? "left" : (isNarrow ? "center" : "right") }}>{p.item.year}</div>
            <button onClick={() => { onExit(); go({ name: "case", slug: p.item.slug }); }} style={{ display: "block", width: "100%", padding: 0, border: "none", background: "none", cursor: "pointer", textAlign: "left", transition: "transform 320ms var(--ease-out, cubic-bezier(0.16,1,0.3,1))" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
              <FidgetCard item={p.item} width={cardW} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Jam-style collaboration cursor                                      */
/* ------------------------------------------------------------------ */
function JamCursor({ color = "#E0653C" }) {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [on, setOn] = React.useState(false);
  const [name] = React.useState(() => {
    const names = ["Guest", "Anonymous", "Lurker"];
    return names[Math.floor(Math.random() * names.length)];
  });
  React.useEffect(() => {
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    document.documentElement.style.cursor = "none";
    const move = (e) => { setPos({ x: e.clientX, y: e.clientY }); setOn(true); };
    const leave = () => setOn(false);
    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);
  if (!on) return null;
  return (
    <div style={{ position: "fixed", left: pos.x, top: pos.y, zIndex: 2147483647, pointerEvents: "none" }}>
      <div style={{ position: "absolute", left: -2, top: -2 }} dangerouslySetInnerHTML={{ __html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_107_2)"><path d="M7.60439 19.2571L3.04581 3.26553C2.81043 2.43981 3.66805 1.72678 4.44788 2.09985L19.5506 9.32491C20.3536 9.70907 20.2932 10.8616 19.4546 11.1588L13.2432 13.3596C13.0176 13.4395 12.8284 13.5968 12.7098 13.8031L9.44381 19.4818C9.00282 20.2486 7.84677 20.1073 7.60439 19.2571Z" fill="#1570EF"></path><path d="M2.56279 3.40011C2.20972 2.16155 3.49566 1.09245 4.66538 1.652L19.7685 8.87711C20.9727 9.45348 20.8819 11.1816 19.6239 11.6273L13.4132 13.8282C13.3006 13.8681 13.206 13.9469 13.1466 14.0498L9.87992 19.7286C9.21849 20.8786 7.48514 20.6671 7.12135 19.392L2.56279 3.40011Z" stroke="#F2F2F2"></path></g><defs><filter id="filter0_d_107_2" x="0" y="0" width="23.1241" height="23.9793" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_2"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_2" result="shape"></feBlend></filter></defs></svg>' }}></div>
      <div style={{ position: "absolute", left: 16, top: 20, background: color, color: "#fff", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.02em", padding: "3px 8px", borderRadius: "4px 10px 10px 10px", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>{name}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* App shell + routing                                                 */
/* ------------------------------------------------------------------ */
function App() {
  const [route, setRoute] = React.useState({ name: "home" });
  const [fidget, setFidget] = React.useState(false);
  const go = React.useCallback((r) => {
    setRoute(r);
    requestAnimationFrame(() => {
      try { window.scrollTo({ top: 0, behavior: "auto" }); } catch (e) { window.scrollTo(0, 0); }
      const el = document.scrollingElement || document.documentElement;
      if (el) el.scrollTop = 0;
    });
  }, []);

  let screen;
  if (route.name === "home") screen = <HomeScreen go={go} />;
  else if (route.name === "work") screen = <WorkIndexScreen go={go} />;
  else if (route.name === "case") screen = <CaseStudyScreen slug={route.slug} go={go} />;
  else if (route.name === "about") screen = <AboutScreen go={go} />;
  else if (route.name === "resume") screen = <ResumeScreen go={go} />;
  else if (route.name === "fun") screen = <FunScreen go={go} />;
  else screen = <HomeScreen go={go} />;

  return (
    <div style={{ minHeight: "100%", background: "var(--bg-base)" }}>
      <Nav route={route} go={go} fidget={fidget} setFidget={setFidget} />
      <main key={route.name + (route.slug || "")} className="scp-main" style={{ paddingTop: 88, animation: "scp-fade var(--dur-reveal) var(--ease-out)" }}>{screen}</main>
      <Footer go={go} />
      <AskAI />
      <JamCursor />
      {fidget ? <FidgetStage onExit={() => setFidget(false)} go={go} /> : null}
    </div>
  );
}

window.PortfolioApp = App;

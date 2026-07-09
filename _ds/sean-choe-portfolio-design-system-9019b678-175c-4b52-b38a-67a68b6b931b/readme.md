# Sean Choe Portfolio — Design System

A design system for the personal portfolio of **Sean Choe**, Staff Product Designer. The portfolio centers on UI/UX and product design case studies across payments, e-commerce, workspace, and cultural institutions (Cedar, Chewy, WeWork, Coach, The Metropolitan Museum of Art), with payments and AI-native product work as the strongest recent chapter. Leather, jewelry, and industrial design live in a small, separate "Other work" section, never mixed into the main case study flow.

**Aesthetic in one line:** dark, editorial, quiet. Serif display type over a clean grotesque body, generous whitespace, minimal chrome, a single warm terracotta accent, and a real light/dark toggle.

## Sources
No codebase, Figma file, logo, or brand assets were provided. This system was authored from a written brief. Everything here (palette, type pairing, components, sample content) is an original interpretation of that brief, not a recreation of an existing product. If real assets exist (logo, photography, actual case-study copy and metrics), send them and they will replace the placeholders noted throughout.

---

## Content fundamentals

**Voice:** first person, plain, confident, unhurried. Sean speaks as "I"; the reader is "you" only when directly addressed. No corporate "we" except when describing a real team ("we restructured the bill").

**Tone:** editorial and specific. Name the problem, name the outcome. Favor concrete nouns (bill, checkout, approval step, empty state) over abstractions (solutions, experiences, ecosystems). Confident but not boastful; metrics are stated flatly, not hyped.

**Casing:** Sentence case for headings and body. Mono labels (eyebrows, metadata, indices) are UPPERCASE and letter-spaced. Serif display headings are sentence case.

**Em dashes:** never. This is a hard rule. Use a period, a comma, or restructure the sentence. (The word "to" replaces em-dash date ranges: "2023 to now".) Parentheses and colons are fine.

**Emoji:** never. Not part of the brand.

**Numbers:** metrics keep their symbols and precision ("38%", "$1.2B", "4.8"). Years are four digits. Ranges use "to".

**Examples**
- Do: "Rebuilding how patients understand and pay a medical bill."
- Do: "Autoship stopped being a checkbox and started being a promise we could keep."
- Don't: "Leveraging synergies to revolutionize payments end-to-end." (buzzwords + em dash)
- Don't: "Check out my amazing work! 🚀" (hype + emoji + exclamation spam)

---

## Visual foundations

**Palette.** Warm near-monochrome. The dark theme is built on a warm-tinted ink ramp (`--ink-950` deepest background through `--ink-050` warm paper white), not pure grays. One accent: **terracotta / clay** (`--clay-400 #E0653C` in dark, deepening to `--clay-500/600` in light for contrast). The accent is used sparingly: one CTA per view, section indices, hover reveals, the wordmark dot. Feedback colors (success/warning/danger) are muted to sit inside the palette rather than pop out of it. Full alias set in `tokens/colors.css`.

**Light + dark.** Dark is the default (`:root`). Light mode is a warm paper theme applied via `[data-theme="light"]` on `<html>`; `prefers-color-scheme: light` is honored when no explicit theme is set. Every color is a semantic alias, so components respond automatically. The `ThemeToggle` component flips and persists the choice.

**Type.** Display is **Instrument Serif** (400, roman + italic) set large with tight tracking (-0.02em) for names, headings, quotes, and stat numbers. Body is **Hanken Grotesk** (300 lead, 400 body, 500/600 emphasis) at a 1.55 reading line-height. Labels, metadata, indices, and code are **JetBrains Mono**, uppercase and tracked 0.16em. Display sizes are fluid `clamp()`; body sizes are fixed. Italic serif is an accent device (a single word or a whole pull quote), not decoration.

**Spacing & layout.** 4px base scale running up to very large section breaks (`--space-11` = 192px) for generous editorial whitespace. Content max 1240px; reading columns capped at 680px. Gutters are fluid. Layout is mostly single-column and left-aligned with wide margins; grids are `auto-fit minmax` so they reflow.

**Backgrounds.** Flat surfaces, no photographic or gradient page backgrounds. The one gradient motif is a soft radial accent wash used only on media placeholders and case-study covers (accent bleeding from a corner into a flat surface). No textures, no patterns, no noise.

**Corners & borders.** Restrained radii: cards use `--radius-lg` (14px), covers `--radius-xl` (22px), pills for buttons/tags. Borders are hairline (1px) and low-opacity (`--border-subtle` at ~8%, `--border-default` at ~14%). Structure comes from hairlines and whitespace, not boxes and fills.

**Shadows.** Minimal. Dark mode relies on borders, not shadows. Light mode uses soft, low shadows (`--shadow-sm/md/lg`) sparingly. No hard or colored shadows.

**Motion.** One signature ease: `--ease-out` = cubic-bezier(0.16, 1, 0.3, 1). Durations: 120ms fast, 220ms base, 700ms reveal. Entrances are quiet fades with a small upward translate. Hover on media lifts 4px; list rows nudge right and reveal the accent; buttons scale to 0.975 on press. No bounce, no spin, no infinite decorative loops on content. All motion collapses under `prefers-reduced-motion`.

**Hover / press states.** Hover is quiet: surfaces shift to `--surface-hover`, text muted rises to primary, borders strengthen one step, the accent appears on titles and arrows. Press shrinks slightly. No color explosions.

**Transparency & blur.** Used only for chrome: the sticky nav is a `blur(12px)` over an 82% background tint; the card hover arrow badge sits on a blurred translucent disc. Content areas are fully opaque.

**Cards.** A card is a hairline-bordered surface with a large media area on top and a quiet meta footer (mono company/year, serif title, secondary summary, small tags). Lift on hover, no heavy shadow. See `CaseStudyCard`.

---

## Iconography

No icon library or custom icon set was provided. The system uses a small number of **inline stroke SVG glyphs** drawn in the **Lucide** visual style (1.6px stroke, round caps and joins, 24px grid): arrow (diagonal and horizontal), back-chevron, sun, moon, external-link, and a GitHub mark. These are inlined directly where used (in `IconButton`, `Button` icon slots, `ThemeToggle`, `CaseStudyCard`, `ProjectListRow`) rather than loaded from a package, to keep the set tiny and the stroke weight consistent.

- **If you need more icons, use [Lucide](https://lucide.dev)** (CDN or React package). It matches the existing stroke weight and style. This is a documented substitution: no brand icon set was supplied.
- No icon font, no sprite sheet, no PNG icons.
- **Emoji and unicode symbols are never used as icons.**
- The only non-icon glyphs are typographic: the terracotta wordmark dot and the hanging serif quote mark in `PullQuote`.

If a real icon set exists for the portfolio, drop the SVGs into `assets/icons/` and swap the inline glyphs.

---

## Tokens
CSS custom properties, imported by `styles.css` (the single entry point consumers link):
- `tokens/fonts.css` — `@import` of the three webfonts (Instrument Serif, Hanken Grotesk, JetBrains Mono) from Google Fonts.
- `tokens/colors.css` — base ramps (`--ink-*`, `--clay-*`) + semantic aliases + `[data-theme="light"]` overrides.
- `tokens/typography.css` — families, fluid display sizes, body sizes, weights, line-heights, tracking, plus a few convenience type classes.
- `tokens/spacing.css` — spacing scale, layout maxes, radii, borders, shadows, motion (easing/durations), z-index.

---

## Components
Reusable primitives, exported under `window.SeanChoePortfolioDesignSystem_9019b6`.

**Core** (`components/core/`)
- **Button** — solid / outline / ghost / link; sizes sm/md/lg; icon slots; the one accent CTA per view.
- **IconButton** — square icon-only control (nav, social, toggle).
- **ThemeToggle** — light/dark switch; sets `[data-theme]` on `<html>`, persists to localStorage.
- **Tag** — mono taxonomy pill (discipline, company, year).
- **Badge** — sans state marker (New, Shipped, counts).
- **SectionLabel** — signature editorial eyebrow with optional index + hairline rule.
- **Divider** — hairline separator (horizontal / vertical / labelled).

**Portfolio** (`components/portfolio/`)
- **CaseStudyCard** — primary work-grid unit; media + serif title + meta; hover lift.
- **FeatureTile** — bento hero tile; one `media` tile holds a looping video (or animated mock), the rest are text tiles. Supports a `peek` pop-out and deck coordination.
- **FeatureDeck** — interactive fanned row of FeatureTiles; hover straightens/lifts a tile, pushes neighbours aside, dims them, and pops that tile's `peek` cluster (screens, chips, photos) out the top. Powers the homepage hero.
- **ProjectListRow** — index-style row for the full work list; serif title reveals accent on hover.
- **StatBlock** — single outcome metric; serif number over mono accent label.
- **PullQuote** — large italic serif quote with hanging accent mark.

---

## UI kits
- **`ui_kits/portfolio/`** — the full portfolio site, click-through: Home, Work index, Case study, About, Other work, with a working theme toggle. Built from the components above. See its `README.md`.

---

## Foundation cards (`guidelines/`)
Specimen HTML tagged with `@dsCard`, shown in the Design System tab: neutral ramp, accent, semantic surfaces/text, light mode, feedback (Colors); display / body / mono / scale (Type); spacing / radius / shadow (Spacing); wordmark / voice / motion (Brand).

---

## Root manifest / index
- `styles.css` — global entry point (consumers link this; `@import` lines only).
- `tokens/` — colors, typography, spacing, fonts.
- `components/core/`, `components/portfolio/` — primitives (`.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` card per dir).
- `ui_kits/portfolio/` — full site recreation.
- `guidelines/` — foundation specimen cards.
- `SKILL.md` — Agent-Skill entry point.
- `readme.md` — this file.

## Caveats & intentional additions
- **Logo:** the name wordmark is supplied as `assets/wordmark.svg` (rendered via CSS mask so it recolors per theme; used in the nav). The logo's left icon slot did not embed in the source SVG, so a terracotta dot stands in as the mark until the icon is provided. Do not draw a substitute mark.
- **Placeholder imagery:** all case-study covers and tiles use tinted accent washes. Pass real `media` to replace.
- **Fonts** are loaded from Google Fonts, not self-hosted binaries. Provide woff2 files to self-host.
- **Icons** are inline Lucide-style SVGs; Lucide is the documented substitution if more are needed.
- Sample case-study copy and metrics are plausible placeholders written to brand voice, not real Cedar/Chewy/WeWork/Coach/Met figures.

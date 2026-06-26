# Handoff: NODO — Landing page (estudio de diseño y desarrollo web)

## Overview
Single-page marketing landing for **NODO**, a new web design & development studio.
Goal: convey a high-end, "real designers" identity and convert visitors into project
enquiries. The aesthetic is **Swiss / neo-brutalist**: stark white, hairline black grid,
oversized display type, monospace meta-labels, one electric-blue accent (taken from the
client's logo). The page is **bilingual (ES / EN)** with an in-page language toggle.

> **Brand note:** "nodo" is a **placeholder studio name** — replace with the real name.
> Prices in the Tarifas section (29 / 59 / 99 €) are **example figures** — confirm with
> the client before launch. Contact email `hola@nodo.studio` and social links are
> placeholders.

## About the Design Files
The file in this bundle (`nodo.dc.html`) is a **design reference created in HTML** — a
working prototype that shows the intended look, copy, and behavior. It is **not production
code to ship directly**. It is authored in a small in-house template runtime ("Design
Components": an `<x-dc>` template + a `class Component extends DCLogic` logic block, loaded
via `support.js`). **Do not** try to reuse that runtime.

The task is to **recreate this design in the target codebase's environment** (React, Vue,
Astro, plain HTML/CSS, etc.) using its established patterns. If no codebase exists yet,
this is a static marketing page — **Astro, Next.js (static export), or plain
HTML+CSS** are all appropriate; pick one and implement there. All styling in the prototype
is inline; in production, move it to your styling system (CSS modules, Tailwind, vanilla
CSS — your call).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy and interactions are all
intentional. Recreate pixel-closely. Exact hex values, fonts, and sizes are listed in
**Design Tokens** below. The only deliberately-open items are the placeholder content
called out above (name, prices, contact).

---

## Layout system (applies to whole page)
- Full-bleed, edge-to-edge. No centered max-width container on sections; instead the page
  uses **full-width hairline dividers** and internal borders to create a grid.
- **Horizontal gutter:** `44px` left/right on text blocks and section headers. Card/table
  grids run edge-to-edge (0 side padding) and use internal `1.5px` borders.
- **Section separators:** every `<section>` has `border-bottom: 1.5px solid #0A0A0A`.
- **Structural line weight:** `1.5px solid #0A0A0A` for primary structure; `1px solid
  rgba(10,10,10,0.18)` (or `rgba(255,255,255,0.2)` on the dark section) for secondary
  dividers inside a block.
- **No border-radius anywhere** except the client logo image (`8px`, it's a rounded app
  icon) — buttons, cards, tags are all sharp corners.
- Sticky top nav; the rest of the page scrolls normally.

## Screens / Views
This is one continuous page. Sections top-to-bottom:

### 1. Nav (sticky)
- Sticky top, `z-index:100`, white bg, `border-bottom:1.5px solid #0A0A0A`.
- Three stretched cells separated by `1.5px` vertical borders: **logo cell** (left,
  `border-right`), **links cell** (center-right), **CTA cell** (right, blue,
  `border-left`).
- Logo cell: logo image `30×30px` (radius 8px) + wordmark `NODO` (Archivo 800, 20px).
- Links (Space Mono, 13px, uppercase, `gap:24px`): `SERVICIOS · QUÉ INCLUYE · TARIFAS ·
  PROCESO`, then the **language toggle button**, then the blue **HABLEMOS →** CTA cell.
- Link hover: color → `#2C49E0`. Toggle button: `1.5px` black border; hover inverts to
  black bg / white text. CTA cell hover: bg `#2C49E0` → `#0A0A0A`.

### 2. Hero (`#top`)
- **Meta bar:** full-width row, Space Mono 12px, `border-bottom:1.5px`. Three items:
  `NODO™ ESTUDIO` · `DISEÑO + DESARROLLO WEB` · `EST. 2026`.
- **Body:** flex row, `min-height:74vh`, split into:
  - **Left index column** (`width:300px`, `border-right:1.5px`, padding `36px 30px`):
    label `QUÉ HACEMOS ↓`, then 5 mono rows (`num` left in grey `#6B6B6B`, `label` right
    bold): `01 BRANDING · 02 WEB · 03 E-COMMERCE · 04 UX / UI · 05 SEO`, each with a
    `1px` bottom divider. Bottom: a solid blue `64×64px` square (`margin-top:auto`).
  - **Display column** (flex:1, centered vertically, padding `48px 44px`):
    - Top-right mono status with a blinking blue dot (`8px`, `@keyframes blink` 1.8s):
      `DISPONIBLES PARA PROYECTOS`.
    - **H1**, two stacked lines, Archivo 900, `clamp(64px,11vw,168px)`, `line-height
      ~0.8`, `letter-spacing:-0.045em`, uppercase:
      line 1 `ESTUDIO` (solid `#0A0A0A`); line 2 `DIGITAL` **outlined** (transparent fill,
      `-webkit-text-stroke:2px #0A0A0A`).
    - Blue rule `260×14px` under the headline.
    - Paragraph, Space Grotesk 500, 21px, `max-width:520px`.
    - **Button group** (bordered `1.5px`, two cells): `EMPEZAR PROYECTO →` (blue, white,
      hover → black) + `VER TRABAJO` (white, hover → black/white). Mono 14px 700.

### 3. Marquee
- Full-width, `border-bottom:1.5px`, `padding:18px 0`, `overflow:hidden`.
- Infinite horizontal scroll, `@keyframes marqueeX` (translateX 0 → -50%), `26s linear
  infinite`. Two identical track halves for a seamless loop.
- Words (Archivo 800, 40px, uppercase): `Branding · Diseño Web · E-Commerce · UX/UI · SEO
  · Landing Pages · Mantenimiento`, separated by a blue `✦`. The **second track half is
  outlined** (`-webkit-text-stroke:1.5px #0A0A0A`, transparent fill) for visual rhythm.

### 4. Servicios (`#servicios`)
- Header row (`padding:54px 44px 40px`, flex space-between): mono label `(SERVICIOS / 01)`
  in blue, H2 `LO QUE HACEMOS` (Archivo 900, `clamp(40px,6vw,78px)`, uppercase), and a
  short paragraph on the right (`max-width:300px`).
- **Services table:** 7 full-width rows, each a CSS grid `90px 1.1fr 1.5fr 60px`,
  `align-items:center`, `gap:24px`, `padding:26px 44px`, `1px` bottom divider.
  Columns: mono index (60% opacity) · H3 title (Archivo 800, `clamp(22px,2.4vw,34px)`,
  uppercase) · description (Space Grotesk 16px) · `→` arrow.
  - **Row hover (signature interaction):** entire row `background:#2C49E0`, `color:#fff`
    (`transition: background .15s, color .15s`). All children use `color:inherit` so they
    flip together. `cursor:default`.
  - Rows (title / desc): Branding e identidad · Diseño de páginas web · Tiendas online ·
    Landing pages · UX / UI de apps · SEO y posicionamiento · Mantenimiento web. (See the
    `services` array in the HTML for exact ES + EN copy.)

### 5. Qué te llevas / deliverables (`#proyectos`)
- Header: `(QUÉ INCLUYE / 02)` + H2 `QUÉ TE LLEVAS` + right paragraph.
- **2-column grid** of 4 cards, each `border-right:1.5px` + `border-bottom:1.5px`,
  `padding:34px 30px`, hover `background:#F5F5F5`.
  Card = title (Archivo 800, `clamp(22px,2.4vw,30px)`, uppercase) + index (top-right mono)
  + one-line description + a `1px` top-divider list of items, each prefixed by a blue mono
  `+`.
  - Cards: **Web a medida · Tienda online · Branding · Landing / campaña** (4 bullet
    items each — see `packages` array for ES + EN).

### 6. Manifiesto (inverted, dark)
- `background:#0A0A0A`, `color:#fff`, `padding:80px 44px`.
- Mono label `(MANIFIESTO)` in light-blue `#7C8BFF`.
- Big statement, Archivo 800, `clamp(30px,4.6vw,60px)`, `max-width:1100px`:
  "No vendemos plantillas. Diseñamos cada píxel a propósito — para que tu marca no se
  parezca a ninguna otra."
- **Commitments grid:** 4 columns (`border-top:1px solid rgba(255,255,255,0.2)`, each
  `border-right`). Each: a blue `✦`, a title (Archivo 800, 20px, uppercase), a sub (Space
  Grotesk 14px, grey `#9A9A9A`):
  - Revisiones sin límite — "Hasta que estés 100% contento."
  - Entrega rápida — "Plazos cortos, sin esperas eternas."
  - Sin permanencias — "Ni letra pequeña. Cero sorpresas."
  - Dedicación total — "Trato directo y foco en tu proyecto."

### 7. Proceso (`#proceso`)
- Header `(PROCESO / 03)` + H2 `CÓMO TRABAJAMOS`.
- **4-column grid**, each `border-right:1px`, `padding:34px 26px 44px`. Each: a large
  **outlined** number (Archivo 900, 60px, transparent fill, `-webkit-text-stroke:2px
  #2C49E0`) + title (Archivo 800, 23px, uppercase) + description (Space Grotesk 15px,
  `#3A3A3A`).
  - 01 Descubrimiento · 02 Diseño · 03 Desarrollo · 04 Lanzamiento (see `steps` array).

### 8. Tarifas (`#tarifas`)
- Header `(TARIFAS / 04)` + H2 `TARIFAS PLANAS` + right paragraph
  ("Una cuota fija al mes. Hosting, SSL, dominio y mantenimiento — todo dentro…").
- **3-column pricing grid** (`border-top:1.5px`), each card `position:relative`,
  `display:flex; flex-direction:column`, `border-right:1.5px`, `padding:38px 30px`.
  Card contents top→bottom:
  - **POPULAR tag** (only on the middle plan): absolutely positioned top-right, mono 700
    11px, blue bg / white text, `padding:6px 12px`.
  - Plan name (Archivo 800, 28px, uppercase).
  - One-line description (Space Grotesk 15px, `min-height:44px` to keep price rows aligned
    across cards).
  - Price block: mono `DESDE` label, then `{price}€` (Archivo 900, 56px) + mono `/mes`.
  - `1px` top-divider items list, blue mono `+` bullets.
  - **CTA button** pinned to bottom (`margin-top:auto`): full-width black block, mono 700
    13px, `EMPEZAR →`, hover `background:#2C49E0`. Links to `#contacto`.
  - Plans: **Esencial 29€ · Profesional 59€ (POPULAR) · Tienda online 99€** (5 items each,
    see `plans` array for ES + EN; note "Hasta 5 páginas" / "Hasta 15 páginas").
- **Footnote row** (full-width, mono 12px grey): "* Dominio sujeto a disponibilidad y
  precio. Servidor dedicado según las necesidades del proyecto. Sin permanencia — cancela
  cuando quieras."

### 9. CTA (`#contacto`, blue full-bleed)
- `background:#2C49E0`, white, `padding:90px 44px`.
- Mono `(CONTACTO / 05)`, giant H2 `¿HABLAMOS?` (Archivo 900, `clamp(56px,10vw,150px)`,
  uppercase), paragraph, then a bordered two-cell button group: `EMPEZAR PROYECTO →`
  (black) + `HOLA@NODO.STUDIO` (blue). Both `mailto:` links; hover → white bg / black text.

### 10. Footer
- White, `padding:44px`. Top row (`border-bottom:1px`): logo+`NODO` left; two link
  columns (ESTUDIO: Servicios / Qué incluye / Proceso / Tarifas — CONTACTO: email /
  Instagram / LinkedIn). Bottom row (mono 12px grey): `© {year} NODO ESTUDIO` +
  `DISEÑADO Y DESARROLLADO EN CASA`.

---

## Interactions & Behavior
- **Language toggle (ES/EN):** every translatable text node carries a `data-en` attribute
  holding the English string; its initial (Spanish) text is the default. Toggling swaps
  `textContent` to `data-en` (EN) or back to the stored Spanish (ES). The button label
  shows the *other* language (`EN` while in Spanish, `ES` while in English).
  - **Implementation tip for your stack:** keep two copy dictionaries (`es`, `en`) and a
    `lang` state; render `dict[lang]`. Note the headline deliberately swaps word order:
    ES `ESTUDIO / DIGITAL` ↔ EN `DIGITAL / STUDIO`. The portfolio/“qué incluye” item lists
    and pricing items are also fully bilingual.
- **Scroll reveal:** every section/card (`[data-reveal]`) starts `opacity:0;
  transform:translateY(26px)` and animates to `opacity:1; transform:none` over `0.7s
  cubic-bezier(.22,1,.36,1)` when it enters the viewport (IntersectionObserver,
  `threshold:0.12`, `rootMargin:"0px 0px -50px 0px"`). Reveal each element once. (The
  prototype adds scroll/resize fallbacks for headless capture; in a normal app a simple
  IntersectionObserver is enough.)
- **Service row hover:** full blue invert (see §4) — the standout micro-interaction, keep
  it.
- **Marquee:** continuous CSS animation, pure decoration (`aria-hidden` on the duplicate
  track).
- **Hover states:** nav links + footer links → blue; buttons invert (black↔blue↔white as
  specced per section); pricing/deliverable cards lift to a light grey or blue.
- **Blinking dot** in hero status (1.8s).
- **Smooth-scroll** anchor nav (`#servicios`, `#tarifas`, etc.). Enable
  `scroll-behavior:smooth` and offset for the sticky nav height (~62px) if you add
  scroll-margin.

## State Management
Minimal — this is a static marketing page.
- `lang: 'es' | 'en'` — drives all copy. (Optionally persist to `localStorage` / detect
  `navigator.language`; the prototype does not persist.)
- Reveal "already shown" flags are per-element and ephemeral.
- No data fetching. The contact CTAs are `mailto:` links — swap for a real contact form /
  endpoint if desired.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Ink / structure | `#0A0A0A` | Text, 1.5px borders, dark section bg, buttons |
| Paper | `#FFFFFF` | Page background |
| Accent (brand blue) | `#2C49E0` | Primary accent, CTAs, hover invert, marks |
| Accent light | `#7C8BFF` | Blue accents on the dark section only |
| Body grey | `#3A3A3A` | Secondary paragraph text on white |
| Muted grey | `#6B6B6B` | Mono meta labels, indices |
| Muted on dark | `#9A9A9A` | Secondary text on the black section |
| Hover surface | `#F5F5F5` | Card hover bg |
| Hairline (light) | `rgba(10,10,10,0.18)` / `0.15` | Secondary dividers |
| Hairline (on dark)| `rgba(255,255,255,0.2)` | Dividers on black section |

> The brand blue is derived from the client's logo (`#2C49E0`). The logo's own UI-blue is
> closer to `#5B68F5`; `#2C49E0` was chosen for stronger contrast on white. Keep one of
> these as the single accent — do not introduce more colors.

### Typography
- **Display:** `Archivo` (weights 800, 900) — all big headings, numbers, wordmark.
- **Body / UI:** `Space Grotesk` (400, 500, 600, 700) — paragraphs, descriptions.
- **Mono / meta:** `Space Mono` (400, 700) — labels, indices, tags, prices' `/mes`, nav.
- All three are Google Fonts. Scale: headings use `clamp()` (see each section). Body
  15–21px. Mono labels 11–14px, `letter-spacing` ~0.04–0.16em, frequently uppercase.
- Big headings: `letter-spacing` ≈ `-0.03em` to `-0.045em`, `line-height` 0.8–0.92.

### Spacing
- Gutter `44px`. Section header padding `54px 44px 40px`. Card padding `34–38px 30px`.
  Table row padding `26px 44px`. Dark section `80px 44px`. CTA `90px 44px`.
- Border weights: `1.5px` (primary), `1px` (secondary).

### Effects
- Reveal transition: `0.7s cubic-bezier(.22,1,.36,1)` on opacity + transform.
- Hover transitions: `0.15s` on background/color.
- Marquee: `26s linear infinite`. Blink: `1.8s infinite`.
- Outlined type: `-webkit-text-stroke` (`2px` headings/numbers, `1.5px` marquee) with
  `color:transparent`. Provide a fallback solid color for non-WebKit if needed.
- No box-shadows used (intentional, flat/brutalist).

## Assets
- `assets/logo-app.png` — the client's logo (rounded dark app-icon with a white mark and
  blue accent). Used in the nav (`30px`) and footer (`34px`), `border-radius:8px`. Provided
  by the client. Replace the `NODO` wordmark next to it with the real studio name.
- No icons library; the few glyphs used are plain Unicode (`→ ↓ ✦ + ↗ ™`).

## Files
- `nodo.dc.html` — the full design reference (markup + the copy data arrays:
  `heroIndex`, `services`, `packages`, `commitments`, `plans`, `steps`, `marquee`). Read
  the data arrays for exact, ready-to-use ES **and** EN copy for every repeated block.

## Implementation checklist
1. Pick the framework (static marketing page — Astro / Next static / plain HTML+CSS).
2. Load the 3 Google Fonts (Archivo, Space Grotesk, Space Mono).
3. Build the bilingual copy dictionaries from the data arrays in `nodo.dc.html`.
4. Recreate sections 1–10 with the layout/tokens above; move inline styles into your
   styling system.
5. Implement: language toggle, IntersectionObserver scroll-reveal, service-row hover
   invert, marquee.
6. Replace placeholders: **studio name**, **prices**, **contact email + socials**.
7. Wire the CTAs (mailto or a real contact form).

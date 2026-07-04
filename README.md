# arianet — Landing (Astro 7, estático)

Landing one-page bilingüe (ES/EN) para el estudio **arianet**. Estética Swiss /
neo-brutalista: blanco, retícula hairline negra, tipografía display sobredimensionada,
un único acento azul `#2C49E0`. Recreada con alta fidelidad desde el handoff de
`design_handoff_nodo_landing/`.

## Stack
- **Astro 7** (`output: static`, sin adapter — los CTA son `mailto:`). Requiere **Node 22+**.
- TypeScript (diccionario de copy tipado).
- Sin librerías de UI/animación: glyphs Unicode, CSS + un IntersectionObserver mínimo.
- Fuentes: Archivo, Space Grotesk, Space Mono vía `<link>` de Google Fonts.

## Comandos
```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build estático en dist/
npm run preview  # sirve el build
npx astro check  # tipos
```

## Arquitectura
```
src/
  layouts/Base.astro        # <html>, head, fuentes, bootstrap de scripts
  pages/index.astro         # ensambla las 10 secciones en orden
  components/               # Nav, Hero, Marquee, Services, Deliverables,
                            # Manifesto, Process, Pricing, CTA, Footer
  data/copy.ts             # diccionarios { es, en } + config (BRAND, CONTACT, plans)
  styles/global.css        # tokens como CSS vars + @keyframes + reveal + a11y
  scripts/reveal.ts        # IntersectionObserver del scroll-reveal
  scripts/lang.ts          # toggle ES/EN (swap de textContent vía data-en)
public/logo-app.png        # logo del cliente
```

## Dónde cambiar los placeholders
Todo está centralizado en **`src/data/copy.ts`**:
- `BRAND` — nombre del estudio (`arianet`). Usado en nav, footer, meta y copyright.
- `CONTACT.email` — `hola@arianet.studio` (provisional).
- `CONTACT.social` — Instagram / LinkedIn (sin URL real todavía; los iconos del footer se han quitado hasta tenerla — al rellenar, hay que devolver los enlaces a `Footer.astro`).
- `plans[].price` — tarifas de ejemplo **29 / 59 / 99 €** (confirmar con cliente).

## Decisiones tomadas (no especificadas en el handoff)
- **i18n:** toggle in-page fiel al prototipo. El ES es el contenido por defecto y el
  EN viaja en `data-en`; `scripts/lang.ts` intercambia `textContent` sin recargar. El
  H1 cambia el orden de palabras (ES `ESTUDIO/DIGITAL` ↔ EN `DIGITAL/STUDIO`).
- **Responsive (desktop-first):** 2 breakpoints.
  - `≤900px` (tablet): grids 3/4-col → 2-col, la columna índice del hero apila sobre la
    tipografía, la tabla de servicios reorganiza descripción a una 2ª línea.
  - `≤600px` (móvil): todo a 1 columna; gutter reducido a 20px; botones apilados; **nav
    compacto** — los anchors mono se ocultan (quedan accesibles desde el footer) y se
    mantiene marca + toggle + CTA `HABLEMOS`.
- **Accesibilidad:** `prefers-reduced-motion` desactiva marquee, reveal, blink y
  smooth-scroll; foco visible (outline azul, blanco sobre secciones oscuras/azules);
  HTML semántico; `alt` en el logo; fallback de color sólido para `-webkit-text-stroke`.

## Tokens
Definidos como CSS custom properties en `src/styles/global.css` (`--ink`, `--paper`,
`--blue`, `--blue-light`, grises, hairlines, `--line-primary` 1.5px, `--line-secondary`
1px, `--gutter` 44px). Sin border-radius salvo el logo (8px). Sin box-shadows.
# redise-o_arianet

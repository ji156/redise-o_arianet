// @ts-check
import { defineConfig } from 'astro/config';

// Salida estática: la landing es 100% estática (los CTA son mailto:).
// Sin adapter, sin SSR. Fuentes cargadas vía <link> de Google Fonts en Base.astro
// (con preconnect, como el prototipo).
export default defineConfig({
  output: 'static',
  site: 'https://arianet.studio',
});

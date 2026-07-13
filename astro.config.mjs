// @ts-check
import { defineConfig } from 'astro/config';

// Salida estática: la landing sigue sin backend propio. El formulario
// /empezar llama por fetch() a la API de arianet-crm (ver PUBLIC_API_URL).
// Sin adapter, sin SSR. Fuentes auto-hospedadas vía @fontsource en Base.astro.
export default defineConfig({
  output: 'static',
  site: 'https://arianet.eu',
  // Nada inline (ni JS ni CSS): permite una CSP estricta sin 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});

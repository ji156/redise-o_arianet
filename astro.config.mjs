// @ts-check
import { defineConfig } from 'astro/config';

// Salida estática: la landing sigue sin backend propio. El formulario
// /empezar llama por fetch() a la API de arianet-crm (ver PUBLIC_API_URL).
// Sin adapter, sin SSR. Fuentes auto-hospedadas vía @fontsource en Base.astro.
export default defineConfig({
  output: 'static',
  site: 'https://arianet.eu',
  // Un idioma por RUTA, no por intercambio de texto en cliente: sin URL propia
  // el contenido traducido no lo indexa nadie. `prefixDefaultLocale: false`
  // deja el castellano en la raíz y evita redirigir lo ya posicionado.
  // Las páginas de cada idioma se declaran a mano en src/pages/<lang>/; esto
  // sólo fija el idioma por defecto y alimenta `Astro.currentLocale`.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'eu'],
    routing: { prefixDefaultLocale: false },
  },
  // Nada inline (ni JS ni CSS): permite una CSP estricta sin 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});

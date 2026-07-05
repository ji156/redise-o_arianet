// @ts-check
import { defineConfig } from 'astro/config';

// Salida estática: la landing sigue sin backend propio. El formulario
// /empezar llama por fetch() a la API de arianet-crm (ver PUBLIC_API_URL).
// Sin adapter, sin SSR. Fuentes cargadas vía <link> de Google Fonts en Base.astro
// (con preconnect, como el prototipo).
export default defineConfig({
  output: 'static',
  site: 'https://arianet.studio',
});

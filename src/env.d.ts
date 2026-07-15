/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // URL base de la API de arianet-crm (ver ../arianet-crm). En dev apunta al
  // servidor Go local; en producción, al subdominio api.arianet.eu.
  readonly PUBLIC_API_URL: string;
  // Site key (pública) de Cloudflare Turnstile para el formulario /empezar.
  // Si falta, el widget no se renderiza (útil en dev). El secret vive en la API.
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

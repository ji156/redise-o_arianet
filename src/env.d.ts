/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // URL base de la API de arianet-crm (ver ../arianet-crm). En dev apunta al
  // servidor Go local; en producción, al subdominio api.arianet.eu.
  readonly PUBLIC_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * Idiomas del sitio y construcción de rutas.
 *
 * El sitio se sirve en RUTAS REALES por idioma, no intercambiando texto en
 * cliente como hacía el antiguo toggle (`scripts/lang.ts`): aquel enfoque
 * metía el inglés en atributos `data-en` que Google no indexa, así que el
 * contenido traducido no posicionaba para ninguna búsqueda.
 *
 *   /            → castellano (idioma por defecto, SIN prefijo)
 *   /en/…        → inglés
 *   /eu/…        → euskera (previsto; ver LANGS)
 *
 * El castellano se queda en la raíz a propósito: moverlo a /es/ obligaría a
 * redirigir con 301 todas las URL ya indexadas a cambio de nada. Así este
 * cambio SÓLO añade rutas nuevas.
 *
 * Para activar un idioma basta con añadirlo a `LANGS`: el nav, el sitemap y
 * los `hreflang` se generan a partir de esa lista.
 */

/** Idiomas contemplados por los tipos de contenido. */
export type Lang = 'es' | 'en' | 'eu';

/** Idioma servido en la raíz, y el que se usa como respaldo. */
export const DEFAULT_LANG: Lang = 'es';

/**
 * Idiomas PUBLICADOS, en orden de aparición en el selector.
 *
 * Esta lista es lo único que activa un idioma: de ella salen el selector del
 * nav, los `hreflang` del <head> y las entradas del sitemap.
 */
export const LANGS: Lang[] = ['es', 'eu', 'en'];

/**
 * Cadena traducible. `es` es obligatorio porque es el respaldo de `t()`; el
 * resto son opcionales para poder ir traduciendo por partes sin romper el build.
 */
export type Bi = { es: string; en?: string; eu?: string };

/**
 * Devuelve la cadena en el idioma pedido, cayendo al castellano si esa
 * traducción todavía no existe. Es lo que permite publicar el euskera de forma
 * incremental: lo no traducido se ve en castellano en lugar de vacío.
 */
export const t = (value: Bi, lang: Lang): string => value[lang] ?? value.es;

/**
 * Idioma de la página a partir de `Astro.currentLocale`, que es `undefined`
 * en cualquier contexto sin i18n resuelto. Lo usan todos los componentes para
 * no repetir el mismo respaldo en cada uno.
 */
export const langOf = (locale: string | undefined): Lang => (locale as Lang) || DEFAULT_LANG;

/** Etiqueta corta del idioma (selector del nav). */
export const LANG_SHORT: Record<Lang, string> = { es: 'ES', en: 'EN', eu: 'EU' };

/** Nombre del idioma en sí mismo (`aria-label` y menú móvil). */
export const LANG_NAME: Record<Lang, string> = {
  es: 'Castellano',
  en: 'English',
  eu: 'Euskara',
};

/** `og:locale` de Open Graph, que exige el formato idioma_PAÍS. */
export const OG_LOCALE: Record<Lang, string> = {
  es: 'es_ES',
  en: 'en_US',
  eu: 'eu_ES',
};

/** Prefijo de ruta del idioma. El idioma por defecto vive en la raíz, sin prefijo. */
export const prefix = (lang: Lang): string => (lang === DEFAULT_LANG ? '' : `/${lang}`);

/**
 * Segmentos de ruta traducidos.
 *
 * Van traducidos a propósito: un `/en/servicios/…` no capta ninguna búsqueda en
 * inglés, que es justo el motivo de publicar el idioma.
 */
export const SEGMENT = {
  services: { es: 'servicios', en: 'services', eu: 'zerbitzuak' },
  start: { es: 'empezar', en: 'start', eu: 'hasi' },
} satisfies Record<string, Record<Lang, string>>;

/**
 * Slug de cada servicio por idioma, indexado por el slug canónico (el
 * castellano, que sigue siendo el identificador interno en `copy.ts`).
 *
 * Lo que falte cae al slug canónico, así que el euskera se puede rellenar
 * servicio a servicio.
 */
export const SERVICE_SLUGS: Record<string, Partial<Record<Lang, string>>> = {
  branding: { en: 'branding', eu: 'brandinga' },
  'diseno-web': { en: 'web-design', eu: 'web-diseinua' },
  'tiendas-online': { en: 'ecommerce', eu: 'online-dendak' },
  'landing-pages': { en: 'landing-pages', eu: 'landing-orriak' },
  'ux-ui': { en: 'ux-ui-design', eu: 'ux-ui-diseinua' },
  'apps-moviles': { en: 'mobile-apps', eu: 'mugikorreko-appak' },
  seo: { en: 'seo', eu: 'seo' },
  mantenimiento: { en: 'maintenance', eu: 'mantentze-lanak' },
};

/** Slug de cada documento legal por idioma, indexado por el slug canónico. */
export const LEGAL_SLUGS: Record<string, Partial<Record<Lang, string>>> = {
  'aviso-legal': { en: 'legal-notice', eu: 'lege-oharra' },
  privacidad: { en: 'privacy', eu: 'pribatutasuna' },
  cookies: { en: 'cookies', eu: 'cookieak' },
  terminos: { en: 'terms', eu: 'baldintzak' },
};

const localized = (
  map: Record<string, Partial<Record<Lang, string>>>,
  slug: string,
  lang: Lang,
): string => map[slug]?.[lang] ?? slug;

/* --- Constructores de ruta ------------------------------------------------
 *
 * Todas devuelven la URL CON barra final: Astro genera cada página como
 * `carpeta/index.html`, así que ésa es la forma canónica. Enlazar a la variante
 * sin barra provocaría un salto de redirección en cada clic.
 */

/**
 * Sólo el segmento del slug, sin ruta. Lo necesitan los `getStaticPaths()` de
 * las rutas por idioma, que declaran el parámetro, no la URL entera.
 */
export const serviceSlug = (slug: string, lang: Lang): string =>
  localized(SERVICE_SLUGS, slug, lang);

export const legalSlug = (slug: string, lang: Lang): string => localized(LEGAL_SLUGS, slug, lang);

export const homePath = (lang: Lang): string => `${prefix(lang)}/`;

export const startPath = (lang: Lang): string => `${prefix(lang)}/${SEGMENT.start[lang]}/`;

export const servicePath = (slug: string, lang: Lang): string =>
  `${prefix(lang)}/${SEGMENT.services[lang]}/${localized(SERVICE_SLUGS, slug, lang)}/`;

export const legalPath = (slug: string, lang: Lang): string =>
  `${prefix(lang)}/${localized(LEGAL_SLUGS, slug, lang)}/`;

/** Ruta de una landing local. Sólo existen en castellano (SEO local). */
export const localPath = (slug: string): string => `/${slug}/`;

/* --- Alternativas por idioma (para los hreflang del <head>) --------------- */

/** Rutas equivalentes de una misma página en todos los idiomas publicados. */
export type Alternates = Partial<Record<Lang, string>>;

const alternatesFor = (build: (lang: Lang) => string): Alternates =>
  Object.fromEntries(LANGS.map((lang) => [lang, build(lang)]));

/**
 * Idiomas a los que ofrecer el salto desde una página, con su destino ya
 * resuelto. Si la página no existe en ese idioma (las landings locales son sólo
 * en castellano) el enlace lleva a la portada, nunca a un 404.
 */
export const otherLangs = (
  lang: Lang,
  alternates: Alternates = {},
): { code: Lang; href: string }[] =>
  LANGS.filter((l) => l !== lang).map((code) => ({
    code,
    href: alternates[code] ?? homePath(code),
  }));

export const homeAlternates = (): Alternates => alternatesFor(homePath);
export const startAlternates = (): Alternates => alternatesFor(startPath);
export const serviceAlternates = (slug: string): Alternates =>
  alternatesFor((lang) => servicePath(slug, lang));
export const legalAlternates = (slug: string): Alternates =>
  alternatesFor((lang) => legalPath(slug, lang));

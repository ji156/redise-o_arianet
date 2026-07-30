/**
 * Datos estructurados (JSON-LD, schema.org).
 *
 * Es lo que permite a Google entender que arianet es un negocio LOCAL de Irún
 * y no una web genérica: `ProfessionalService` + `areaServed` alimentan el
 * paquete de resultados locales, y `FAQPage` puede desplegar las preguntas
 * bajo el resultado (más superficie en la página de resultados).
 *
 * Todo el NAP sale de `BUSINESS` en copy.ts — un único origen para que el dato
 * del schema, el del footer y el del aviso legal no puedan divergir.
 *
 * Nota CSP: <script type="application/ld+json"> es un bloque de datos, no un
 * script ejecutable, así que no lo alcanza `script-src` y no hace falta
 * relajar la política.
 */
import {
  BRAND,
  BUSINESS,
  BUSINESS_DESCRIPTION,
  CONTACT,
  OFFER_CATALOG,
  SITE_URL,
  faqs,
  services,
  type Bi,
} from './copy.ts';
import { DEFAULT_LANG, OG_LOCALE, servicePath, t, type Lang } from './i18n.ts';

/** `@id` estable del negocio: el resto de nodos lo referencian en vez de repetirlo. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Perfiles externos del estudio, para el `sameAs` del JSON-LD.
 *
 * `CONTACT.social` arranca con '#' de marcador, y un `sameAs` apuntando a un
 * ancla vacía es peor que no ponerlo: le dice a Google que la entidad tiene
 * perfiles y le da una URL que no existe. Al filtrar aquí, el día que se creen
 * las cuentas basta con poner la URL real en `copy.ts`.
 */
const PERFILES = Object.values(CONTACT.social).filter((url) => url.startsWith('http'));

/**
 * Ficha del negocio. `ProfessionalService` es un subtipo de `LocalBusiness`:
 * describe un servicio profesional con sede física y zona de cobertura, que es
 * exactamente el caso.
 */
export function businessSchema(lang: Lang = DEFAULT_LANG) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: BRAND,
    /* "arianet" a secas ya lo tiene cogido una empresa italiana con años de
       historial, así que por ese término no se compite. Declarar las variantes
       con las que sí se puede ganar —las que teclea quien ya nos conoce— ayuda
       a Google a ligarlas a ESTA entidad y no a la otra. */
    alternateName: [BUSINESS.legalName, 'Arianet WebStudio', `${BRAND} ${BUSINESS.city}`],
    legalName: BUSINESS.legalName,
    vatID: BUSINESS.vatId,
    url: `${SITE_URL}/`,
    email: CONTACT.email,
    // Sólo se emite si hay teléfono: un campo vacío es peor que ausente.
    ...(BUSINESS.telephone ? { telephone: BUSINESS.telephone } : {}),
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo-wordmark.png`,
    foundingDate: BUSINESS.founded,
    description: t(BUSINESS_DESCRIPTION, lang),
    address: {
      '@type': 'PostalAddress',
      // Sin `streetAddress` a propósito: no hay oficina de cara al público y el
      // perfil de empresa está declarado como negocio de zona de servicio, con
      // la dirección oculta. Publicarla aquí contradiría esa configuración. El
      // municipio y la provincia sí van: son la señal que ancla el negocio a
      // Irún, que es lo que Google necesita para el posicionamiento local.
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    // Zona de cobertura declarada: la señal que conecta el negocio con las
    // búsquedas "… en Donostia" pese a tener la sede en Irún.
    areaServed: [
      { '@type': 'City', name: 'Irún' },
      { '@type': 'City', name: 'Donostia-San Sebastián' },
      { '@type': 'City', name: 'Hondarribia' },
      { '@type': 'City', name: 'Errenteria' },
      { '@type': 'AdministrativeArea', name: 'Gipuzkoa' },
      { '@type': 'AdministrativeArea', name: 'País Vasco' },
    ],
    knowsLanguage: ['es', 'eu', 'en', 'fr'],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    /* `sameAs` sirve para ligar esta entidad con sus perfiles EXTERNOS (redes,
       ficha de Google, directorios). Antes apuntaba a la propia web, que es
       decir "yo soy yo": no aporta señal. Se emite solo si hay perfiles reales
       que enlazar, así que rellenar CONTACT.social lo activa sin tocar esto. */
    ...(PERFILES.length ? { sameAs: PERFILES } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t(OFFER_CATALOG, lang),
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(s.title, lang),
          description: t(s.desc, lang),
          url: `${SITE_URL}${servicePath(s.slug, lang)}`,
        },
      })),
    },
  };
}

/** Nodo `WebSite` — asocia el dominio con la marca. */
export function webSiteSchema(lang: Lang = DEFAULT_LANG) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BRAND,
    // `es_ES` → `es-ES`: schema.org usa etiquetas BCP-47, con guión.
    inLanguage: OG_LOCALE[lang].replace('_', '-'),
    publisher: { '@id': BUSINESS_ID },
  };
}

/**
 * FAQ. Google exige que cada pregunta esté también VISIBLE en la página: por eso
 * se genera desde el mismo array que renderiza la sección, nunca a mano.
 */
export function faqSchema(items: { q: Bi; a: Bi }[] = faqs, lang: Lang = DEFAULT_LANG) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: t(f.q, lang),
      acceptedAnswer: { '@type': 'Answer', text: t(f.a, lang) },
    })),
  };
}

/** Migas de pan: dan a Google la jerarquía del sitio y mejoran cómo pinta la URL. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Servicio concreto prestado en una zona (páginas /servicios/* y landings locales). */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  area?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    serviceType: opts.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: opts.area
      ? { '@type': 'AdministrativeArea', name: opts.area }
      : { '@type': 'AdministrativeArea', name: 'Gipuzkoa' },
  };
}

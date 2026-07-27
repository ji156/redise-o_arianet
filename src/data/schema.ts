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
import { BRAND, BUSINESS, CONTACT, SITE_URL, faqs, services, type Bi } from './copy.ts';

/** `@id` estable del negocio: el resto de nodos lo referencian en vez de repetirlo. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Ficha del negocio. `ProfessionalService` es un subtipo de `LocalBusiness`:
 * describe un servicio profesional con sede física y zona de cobertura, que es
 * exactamente el caso.
 */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: BRAND,
    legalName: BUSINESS.legalName,
    vatID: BUSINESS.vatId,
    url: `${SITE_URL}/`,
    email: CONTACT.email,
    // Sólo se emite si hay teléfono: un campo vacío es peor que ausente.
    ...(BUSINESS.telephone ? { telephone: BUSINESS.telephone } : {}),
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo-wordmark.png`,
    foundingDate: BUSINESS.founded,
    description:
      'Estudio de diseño y programación de páginas web en Irún (Gipuzkoa). Páginas web a medida, tiendas online, branding y SEO local para negocios de Irún, Donostia-San Sebastián y toda Gipuzkoa.',
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
    sameAs: [`${SITE_URL}/`],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de diseño y desarrollo web',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title.es,
          description: s.desc.es,
          url: `${SITE_URL}/servicios/${s.slug}`,
        },
      })),
    },
  };
}

/** Nodo `WebSite` — asocia el dominio con la marca. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BRAND,
    inLanguage: 'es-ES',
    publisher: { '@id': BUSINESS_ID },
  };
}

/**
 * FAQ. Google exige que cada pregunta esté también VISIBLE en la página: por eso
 * se genera desde el mismo array que renderiza la sección, nunca a mano.
 */
export function faqSchema(items: { q: Bi; a: Bi }[] = faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q.es,
      acceptedAnswer: { '@type': 'Answer', text: f.a.es },
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

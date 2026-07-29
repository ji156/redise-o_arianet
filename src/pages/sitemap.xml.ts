/**
 * Sitemap generado en build a partir de los datos reales del sitio.
 *
 * Sustituye al `public/sitemap.xml` escrito a mano, que había que acordarse de
 * actualizar cada vez que se añadía una página — y que ya no incluía ni las
 * landings locales. Ahora las rutas salen de `services`, `localPages` y la
 * lista de idiomas publicados: añadir un servicio, una zona o un idioma lo mete
 * en el sitemap sin tocar nada más.
 *
 * Cada URL declara sus versiones en otros idiomas con `xhtml:link`, que es el
 * equivalente en sitemap de los `hreflang` del <head>. Google acepta cualquiera
 * de las dos vías, pero declararlo en ambas es la señal más sólida.
 *
 * `lastmod` usa la fecha del build (la más reciente en que ese HTML cambió, con
 * granularidad de despliegue). Es suficiente: Google lo trata como una pista,
 * no como un dato de confianza.
 */
import type { APIRoute } from 'astro';
import { SITE_URL, localPages, services } from '../data/copy.ts';
import {
  LANGS,
  homePath,
  legalAlternates,
  legalPath,
  localPath,
  serviceAlternates,
  servicePath,
  startPath,
  homeAlternates,
  startAlternates,
  type Alternates,
} from '../data/i18n.ts';
import { legalDocs } from '../data/legal.ts';

type Entry = {
  path: string;
  changefreq: string;
  priority: string;
  /** Versiones de esta misma página en otros idiomas. */
  alternates?: Alternates;
};

/** Slugs de los documentos legales, en el orden en que se declaran. */
const legalSlugs = legalDocs.map((d) => d.slug);

/**
 * Una entrada por idioma publicado a partir de un constructor de ruta. Así el
 * día que se active el euskera el sitemap crece solo.
 */
const perLang = (
  build: (lang: (typeof LANGS)[number]) => string,
  alternates: Alternates,
  changefreq: string,
  priority: string,
): Entry[] => LANGS.map((lang) => ({ path: build(lang), changefreq, priority, alternates }));

const entries: Entry[] = [
  ...perLang(homePath, homeAlternates(), 'weekly', '1.0'),

  // Landings locales: la vía de entrada para las búsquedas por ciudad, sólo por
  // debajo de la home. Existen únicamente en castellano, así que no declaran
  // alternativas de idioma.
  ...localPages.map((p) => ({
    path: localPath(p.slug),
    changefreq: 'monthly',
    priority: '0.9',
  })),

  ...perLang(startPath, startAlternates(), 'yearly', '0.8'),

  ...services.flatMap((s) =>
    perLang((lang) => servicePath(s.slug, lang), serviceAlternates(s.slug), 'monthly', '0.7'),
  ),

  ...legalSlugs.flatMap((slug) =>
    perLang((lang) => legalPath(slug, lang), legalAlternates(slug), 'yearly', '0.2'),
  ),
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = entries
    .map((e) => {
      const links = Object.entries(e.alternates ?? {})
        .map(
          ([code, path]) =>
            `\n    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${path}"/>`,
        )
        .join('');

      // `x-default` sólo tiene sentido donde hay más de un idioma; apunta al
      // castellano, que es la versión completa.
      const xDefault = e.alternates?.es
        ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${e.alternates.es}"/>`
        : '';

      return `  <url>
    <loc>${SITE_URL}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>${links}${xDefault}
  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

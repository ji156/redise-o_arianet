/**
 * Sitemap generado en build a partir de los datos reales del sitio.
 *
 * Sustituye al `public/sitemap.xml` escrito a mano, que había que acordarse de
 * actualizar cada vez que se añadía una página — y que ya no incluía ni las
 * landings locales. Ahora las rutas salen de `services` y `localPages`: añadir
 * un servicio o una zona lo mete en el sitemap sin tocar nada más.
 *
 * `lastmod` usa la fecha del build (la más reciente en que ese HTML cambió, con
 * granularidad de despliegue). Es suficiente: Google lo trata como una pista,
 * no como un dato de confianza.
 */
import type { APIRoute } from 'astro';
import { SITE_URL, localPages, services } from '../data/copy.ts';

type Entry = { path: string; changefreq: string; priority: string };

/**
 * Astro genera cada página como `carpeta/index.html`, así que el <link
 * canonical> sale con barra final. El sitemap debe declarar EXACTAMENTE esa
 * misma URL: si listara la variante sin barra, Google rastrearía una URL que
 * redirige a otra y desperdiciaría rastreo en el camino.
 */
const withTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

const entries: Entry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },

  // Landings locales: la vía de entrada para las búsquedas por ciudad, sólo por
  // debajo de la home.
  ...localPages.map((p) => ({
    path: `/${p.slug}`,
    changefreq: 'monthly',
    priority: '0.9',
  })),

  { path: '/empezar', changefreq: 'yearly', priority: '0.8' },

  ...services.map((s) => ({
    path: `/servicios/${s.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),

  { path: '/aviso-legal', changefreq: 'yearly', priority: '0.2' },
  { path: '/privacidad', changefreq: 'yearly', priority: '0.2' },
  { path: '/cookies', changefreq: 'yearly', priority: '0.2' },
  { path: '/terminos', changefreq: 'yearly', priority: '0.2' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${SITE_URL}${withTrailingSlash(e.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

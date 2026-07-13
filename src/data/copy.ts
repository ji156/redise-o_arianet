/**
 * Diccionario de copy bilingüe (ES/EN) + configuración centralizada.
 *
 * Todo el texto traducible se modela como { es, en }. Cada componente renderiza
 * el ES como contenido visible y el EN en un atributo `data-en`; el script de
 * `reveal.ts`/toggle intercambia `textContent` en cliente sin recargar.
 *
 * PLACEHOLDERS centralizados aquí (cambiar en un solo sitio):
 *  - BRAND ............ nombre del estudio
 *  - CONTACT.email .... email de contacto (mailto)
 *  - CONTACT.social ... redes
 *  - plans[].price .... tarifas de ejemplo (29 / 59 / 99 / 199 €)
 *  - STRIPE_LINKS ..... Payment Links de Stripe, uno por plan (ver comentario junto al objeto)
 */

export type Bi = { es: string; en: string };

/** Marca — único sitio donde vive el nombre del estudio. */
export const BRAND = 'arianet';

/** Año (estático en build). Para una landing estática es suficiente. */
export const YEAR = 2026;

/** Contacto y redes (placeholders provisionales). */
export const CONTACT = {
  email: 'hola@arianet.studio',
  social: {
    instagram: '#',
    linkedin: '#',
  },
};

/**
 * Payment Links de Stripe — PLACEHOLDERS, sustituir por los reales.
 *
 * Para cada plan, crea en el panel de Stripe (Payment Links → Crear) un enlace
 * de pago para el precio recurrente correspondiente, con:
 *  - Modo suscripción, precio mensual igual al de `plans[].price`.
 *  - Periodo de prueba: 60-90 días (más que suficiente para cualquier plazo de
 *    entrega). El primer cobro no ocurre hasta que el trial termina.
 *  - El día que la web esté en producción: Stripe → Clientes → esa suscripción
 *    → "Finalizar prueba ahora". Se factura automáticamente ese mismo día.
 *  - La alta única (`plans[].alta`) puede cobrarse aparte como "importe único
 *    adicional" en el propio Payment Link, o facturarse a mano — a tu criterio.
 */
export const STRIPE_LINKS: Record<string, string> = {
  esencial: 'https://buy.stripe.com/PENDIENTE_ESENCIAL',
  profesional: 'https://buy.stripe.com/PENDIENTE_PROFESIONAL',
  'tienda-online': 'https://buy.stripe.com/PENDIENTE_TIENDA_ONLINE',
  premium: 'https://buy.stripe.com/PENDIENTE_PREMIUM',
};

/** Barra meta del hero. */
export const META = {
  studio: { es: 'SOLUCIONES DIGITALES', en: 'DIGITAL SOLUTIONS' },
  tagline: { es: 'DISEÑO + DESARROLLO WEB', en: 'WEB DESIGN + DEVELOPMENT' },
  est: { es: 'EST. 2026', en: 'EST. 2026' },
};

/** Navegación. */
export const NAV = {
  links: [
    { href: '#servicios', label: { es: 'SERVICIOS', en: 'SERVICES' } },
    { href: '#proyectos', label: { es: 'QUÉ INCLUYE', en: 'WHAT YOU GET' } },
    { href: '#proceso', label: { es: 'PROCESO', en: 'PROCESS' } },
    { href: '#trabajo', label: { es: 'TRABAJO', en: 'WORK' } },
    { href: '#tarifas', label: { es: 'TARIFAS', en: 'PRICING' } },
    { href: '#faq', label: { es: 'FAQ', en: 'FAQ' } },
  ],
  cta: { es: 'HABLEMOS →', en: "LET'S TALK →" },
  menu: { es: 'MENÚ', en: 'MENU' },
  close: { es: 'CERRAR', en: 'CLOSE' },
  language: { es: 'IDIOMA', en: 'LANGUAGE' },
  menuToggle: {
    open: { es: 'Abrir menú', en: 'Open menu' },
    close: { es: 'Cerrar menú', en: 'Close menu' },
  },
};

/** Hero. */
export const HERO = {
  status: { es: 'DISPONIBLES PARA PROYECTOS', en: 'OPEN FOR NEW PROJECTS' },
  whatWeDo: { es: 'QUÉ HACEMOS ↓', en: 'WHAT WE DO ↓' },
  // El H1 cambia el ORDEN de palabras entre idiomas.
  // Línea 1 sólida, línea 2 outline.
  h1: {
    line1: { es: 'ESTUDIO', en: 'DIGITAL' },
    line2: { es: 'DIGITAL', en: 'STUDIO' },
  },
  paragraph: {
    es: 'Construimos las webs que tu competencia va a querer copiar. Branding, web y tiendas online, diseñadas desde cero.',
    en: 'We build the websites your competitors will wish they had. Branding, web and online stores, designed from scratch.',
  },
  ctaStart: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →' },
  ctaWork: { es: 'VER TRABAJO', en: 'SEE WORK' },
};

/** Índice del hero (columna izquierda). */
export const heroIndex: { num: string; slug: string; label: Bi }[] = [
  { num: '01', slug: 'branding', label: { es: 'BRANDING', en: 'BRANDING' } },
  { num: '02', slug: 'diseno-web', label: { es: 'WEB', en: 'WEB' } },
  { num: '03', slug: 'tiendas-online', label: { es: 'E-COMMERCE', en: 'E-COMMERCE' } },
  { num: '04', slug: 'ux-ui', label: { es: 'UX / UI', en: 'UX / UI' } },
  { num: '05', slug: 'seo', label: { es: 'SEO', en: 'SEO' } },
];

/** Marquee. */
export const marquee: Bi[] = [
  { es: 'Branding', en: 'Branding' },
  { es: 'Diseño Web', en: 'Web Design' },
  { es: 'E-Commerce', en: 'E-Commerce' },
  { es: 'UX/UI', en: 'UX/UI' },
  { es: 'SEO', en: 'SEO' },
  { es: 'Landing Pages', en: 'Landing Pages' },
  { es: 'Mantenimiento', en: 'Maintenance' },
];

/** Trabajo realizado. */
export const WORK_INTRO = {
  label: '(TRABAJO / 04)',
  h2: { es: 'ALGUNOS PROYECTOS', en: 'SOME PROJECTS' },
  para: {
    es: 'Proyectos reales, no maquetas. Muy pronto habrá más.',
    en: "Real projects, not mockups. More coming very soon.",
  },
  swipe: { es: 'DESLIZA PARA VER MÁS →', en: 'SWIPE TO SEE MORE →' },
};

export const work: {
  tag: Bi;
  title: string;
  desc: Bi;
  url: string;
  image: string;
}[] = [
  {
    tag: { es: 'TIENDA ONLINE', en: 'ONLINE STORE' },
    title: 'Supermercado Jonathan',
    desc: {
      es: 'Boutique de licores en Irún — recogida en tienda y verificación de edad.',
      en: 'A boutique liquor store in Irún — in-store pickup and age verification.',
    },
    url: 'https://supermercadojonathan.com',
    image: '/work/supermercado-jonathan.jpg',
  },
  {
    tag: { es: 'APLICACIÓN WEB · UX/UI', en: 'WEB APP · UX/UI' },
    title: 'King of Spain',
    desc: {
      es: 'Portal a medida para un clan de Clash of Clans: login, guerras y estadísticas.',
      en: 'A custom portal for a Clash of Clans clan: login, wars and stats.',
    },
    url: 'https://kingofspain.org',
    image: '/work/king-of-spain.jpg',
  },
  {
    tag: { es: 'PROYECTO PROPIO · SEO', en: 'OWN PROJECT · SEO' },
    title: 'Mejores Purificadores',
    desc: {
      es: 'Comparativas y guías para posicionar en buscadores. Sin cliente detrás.',
      en: 'Comparisons and guides built to rank in search. No client behind it.',
    },
    url: 'https://mejorespurificadores.com',
    image: '/work/mejores-purificadores.jpg',
  },
  {
    tag: { es: 'PROYECTO PROPIO · MEDIO DIGITAL', en: 'OWN PROJECT · DIGITAL MEDIA' },
    title: 'Semavor',
    desc: {
      es: 'La economía mundial, cada día: informes de mercado, noticias y newsletter.',
      en: 'The global economy, every day: market reports, news and a newsletter.',
    },
    url: 'https://semavor.com',
    image: '/work/semavor.jpg',
  },
];

/** Servicios. */
export const SERVICIOS_INTRO = {
  label: '(SERVICIOS / 01)',
  h2: { es: 'LO QUE HACEMOS', en: 'WHAT WE DO' },
  para: {
    es: 'Un solo equipo, de principio a fin — del primer boceto al día del lanzamiento.',
    en: 'One team, end to end — from the first sketch to launch day.',
  },
};

export const services: { num: string; slug: string; title: Bi; desc: Bi }[] = [
  {
    num: '01',
    slug: 'branding',
    title: { es: 'Branding e identidad', en: 'Branding & identity' },
    desc: {
      es: 'Logo, paleta y un sistema visual que hace que te recuerden.',
      en: 'Logo, palette and a visual system that makes you memorable.',
    },
  },
  {
    num: '02',
    slug: 'diseno-web',
    title: { es: 'Diseño de páginas web', en: 'Web design' },
    desc: {
      es: 'Diseños a medida pensados para tu negocio, nunca plantillas.',
      en: 'Custom designs built for your business — never templates.',
    },
  },
  {
    num: '03',
    slug: 'tiendas-online',
    title: { es: 'Tiendas online', en: 'Online stores' },
    desc: {
      es: 'E-commerce rápido y fácil de gestionar que convierte.',
      en: 'Fast, easy-to-manage e-commerce that converts.',
    },
  },
  {
    num: '04',
    slug: 'landing-pages',
    title: { es: 'Landing pages', en: 'Landing pages' },
    desc: {
      es: 'Páginas de campaña con un único objetivo: convertir.',
      en: 'Campaign pages with one single goal: converting.',
    },
  },
  {
    num: '05',
    slug: 'ux-ui',
    title: { es: 'UX / UI de apps', en: 'App UX / UI' },
    desc: {
      es: 'Interfaces claras para aplicaciones web y móviles.',
      en: 'Clear interfaces for web and mobile apps.',
    },
  },
  {
    num: '06',
    slug: 'seo',
    title: { es: 'SEO y posicionamiento', en: 'SEO' },
    desc: {
      es: 'Optimización técnica y de contenido para que te encuentren.',
      en: 'Technical and content optimization so people find you.',
    },
  },
  {
    num: '07',
    slug: 'mantenimiento',
    title: { es: 'Mantenimiento web', en: 'Maintenance' },
    desc: {
      es: 'Actualizaciones, seguridad y soporte continuo.',
      en: 'Updates, security and ongoing support.',
    },
  },
];

/** Contenido de las páginas de detalle de cada servicio (/servicios/[slug]). */
export type ServiceDetail = {
  slug: string;
  intro: Bi;
  bullets: { title: Bi; desc: Bi }[];
  example: { name: string; url: string; image: string } | null;
  exampleNote: Bi;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'branding',
    intro: {
      es: 'Antes de escribir una sola línea de código, definimos quién eres: el logo, los colores, la tipografía y el tono con el que hablas a tus clientes. Todo lo que viene después — la web, las redes, hasta las facturas — parte de aquí.',
      en: "Before writing a single line of code, we define who you are: the logo, the colours, the type and the tone you use with your customers. Everything that comes after — the website, social media, even invoices — starts here.",
    },
    bullets: [
      {
        title: { es: 'Logo y variantes', en: 'Logo and variants' },
        desc: {
          es: 'Tu marca en positivo, en negativo y a una sola tinta, lista para cualquier soporte.',
          en: 'Your mark in positive, negative and single-colour versions, ready for any medium.',
        },
      },
      {
        title: { es: 'Paleta y tipografía', en: 'Colour palette and type' },
        desc: {
          es: 'Los colores y las fuentes que te van a representar en todas partes, no solo en la web.',
          en: 'The colours and typefaces that represent you everywhere, not just on the website.',
        },
      },
      {
        title: { es: 'Mini guía de marca', en: 'Mini brand guide' },
        desc: {
          es: 'Un documento corto con las reglas básicas, para que quien use tu marca no la desvirtúe.',
          en: 'A short document with the basic rules, so anyone using your brand keeps it consistent.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Aún no tenemos un caso de branding público — si quieres ser el primero, hablamos.',
      en: "We don't have a public branding case yet — if you want to be the first, let's talk.",
    },
  },
  {
    slug: 'diseno-web',
    intro: {
      es: 'Diseñamos cada pantalla pensando en tu negocio real, no en una plantilla genérica. Estructura, jerarquía visual y texto persuasivo — todo colocado con intención.',
      en: 'We design every screen thinking about your actual business, not a generic template. Structure, visual hierarchy and persuasive copy — all placed with intention.',
    },
    bullets: [
      {
        title: { es: 'Diseño a medida', en: 'Custom design' },
        desc: {
          es: 'Cada sección pensada para tu contenido real, no rellenada con texto de relleno.',
          en: 'Every section designed for your real content, not filled with placeholder text.',
        },
      },
      {
        title: { es: '100% responsive', en: '100% responsive' },
        desc: {
          es: 'Se ve bien en el móvil de tu cliente igual que en tu portátil.',
          en: "Looks good on your customer's phone just as well as on your laptop.",
        },
      },
      {
        title: { es: 'SEO técnico desde la base', en: 'Technical SEO from day one' },
        desc: {
          es: 'Estructura y velocidad pensadas para que Google te encuentre desde el primer día.',
          en: 'Structure and speed built so Google finds you from day one.',
        },
      },
    ],
    example: {
      name: 'Supermercado Jonathan',
      url: 'https://supermercadojonathan.com',
      image: '/work/supermercado-jonathan.jpg',
    },
    exampleNote: { es: '', en: '' },
  },
  {
    slug: 'tiendas-online',
    intro: {
      es: 'Catálogo, carrito, pagos y gestión — todo conectado para que puedas vender desde el primer día, sin depender de nosotros para cada cambio de precio.',
      en: 'Catalogue, cart, payments and management — all connected so you can start selling from day one, without depending on us for every price change.',
    },
    bullets: [
      {
        title: { es: 'Catálogo y categorías', en: 'Catalogue and categories' },
        desc: {
          es: 'Organiza tus productos como tiene sentido para tus clientes, no para una plantilla.',
          en: 'Organise your products the way your customers expect, not the way a template dictates.',
        },
      },
      {
        title: { es: 'Pasarela de pago segura', en: 'Secure payment gateway' },
        desc: {
          es: 'Cobros online con los proveedores habituales, sin que tengas que gestionar tarjetas tú mismo.',
          en: "Online payments with standard providers, without you having to handle card data yourself.",
        },
      },
      {
        title: { es: 'Panel de gestión propio', en: 'Your own admin panel' },
        desc: {
          es: 'Añade productos, cambia precios y stock tú mismo, sin escribirnos cada vez.',
          en: 'Add products, change prices and stock yourself, without writing to us every time.',
        },
      },
    ],
    example: {
      name: 'Supermercado Jonathan',
      url: 'https://supermercadojonathan.com',
      image: '/work/supermercado-jonathan.jpg',
    },
    exampleNote: { es: '', en: '' },
  },
  {
    slug: 'landing-pages',
    intro: {
      es: 'Una página, un objetivo. Ideal para campañas, lanzamientos o anuncios — lista en días, no en semanas.',
      en: 'One page, one goal. Ideal for campaigns, launches or ads — ready in days, not weeks.',
    },
    bullets: [
      {
        title: { es: 'Un solo objetivo', en: 'A single goal' },
        desc: {
          es: 'Nada de menús ni enlaces de salida — todo empuja hacia la misma acción.',
          en: 'No menus or exit links — everything pushes toward the same action.',
        },
      },
      {
        title: { es: 'Copy persuasivo', en: 'Persuasive copy' },
        desc: {
          es: 'Texto escrito para convertir, no solo para informar.',
          en: 'Copy written to convert, not just to inform.',
        },
      },
      {
        title: { es: 'Medible desde el día uno', en: 'Measurable from day one' },
        desc: {
          es: 'Lista para conectar analítica y medir qué funciona de verdad.',
          en: 'Ready to connect analytics and measure what actually works.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Aún no tenemos una landing propia que enseñar — muy pronto.',
      en: "We don't have our own landing example to show yet — coming soon.",
    },
  },
  {
    slug: 'ux-ui',
    intro: {
      es: 'Interfaces claras para aplicaciones web y móviles — desde el primer boceto hasta la pantalla final, pensando en cómo la usa alguien de verdad, no en cómo queda en una presentación.',
      en: 'Clear interfaces for web and mobile apps — from the first sketch to the final screen, designed around how someone actually uses it, not how it looks in a slide.',
    },
    bullets: [
      {
        title: { es: 'Flujos de principio a fin', en: 'End-to-end flows' },
        desc: {
          es: 'Cada pantalla resuelve un paso concreto del usuario, sin fricción de más.',
          en: 'Every screen solves one concrete user step, with no extra friction.',
        },
      },
      {
        title: { es: 'Sistemas de diseño reutilizables', en: 'Reusable design systems' },
        desc: {
          es: 'Componentes consistentes que escalan cuando la aplicación crece.',
          en: 'Consistent components that scale as the application grows.',
        },
      },
      {
        title: { es: 'Prototipos navegables', en: 'Clickable prototypes' },
        desc: {
          es: 'Pruebas la aplicación antes de que se escriba una sola línea de código de producción.',
          en: 'You try the app before a single line of production code is written.',
        },
      },
    ],
    example: {
      name: 'King of Spain',
      url: 'https://kingofspain.org',
      image: '/work/king-of-spain.jpg',
    },
    exampleNote: { es: '', en: '' },
  },
  {
    slug: 'seo',
    intro: {
      es: 'De poco sirve una web bonita si nadie la encuentra. Trabajamos la parte técnica y el contenido para que aparezcas cuando tu cliente te busca.',
      en: "A beautiful website is not much use if nobody finds it. We work the technical side and the content so you show up when your customer searches for you.",
    },
    bullets: [
      {
        title: { es: 'SEO técnico', en: 'Technical SEO' },
        desc: {
          es: 'Velocidad, estructura y metadatos — la base que Google necesita para entenderte.',
          en: 'Speed, structure and metadata — the foundation Google needs to understand you.',
        },
      },
      {
        title: { es: 'Contenido pensado para buscar', en: 'Content built for search' },
        desc: {
          es: 'Textos escritos para las preguntas reales que hace tu cliente, no solo para sonar bien.',
          en: 'Copy written for the real questions your customers ask, not just to sound good.',
        },
      },
      {
        title: { es: 'Seguimiento de posiciones', en: 'Ranking tracking' },
        desc: {
          es: 'Medimos si subes en Google, no solo si publicamos contenido.',
          en: 'We measure whether you climb in Google, not just whether content gets published.',
        },
      },
    ],
    example: {
      name: 'Mejores Purificadores',
      url: 'https://mejorespurificadores.com',
      image: '/work/mejores-purificadores.jpg',
    },
    exampleNote: { es: '', en: '' },
  },
  {
    slug: 'mantenimiento',
    intro: {
      es: 'Una web no se acaba el día del lanzamiento. Nos encargamos de que siga funcionando, segura y actualizada — para que no tengas que pensar en ello.',
      en: "A website isn't finished on launch day. We make sure it keeps running, secure and up to date — so you don't have to think about it.",
    },
    bullets: [
      {
        title: { es: 'Actualizaciones y seguridad', en: 'Updates and security' },
        desc: {
          es: 'Parcheamos y actualizamos por ti, sin que tengas que estar pendiente.',
          en: 'We patch and update on your behalf, without you needing to keep watch.',
        },
      },
      {
        title: { es: 'Copias de seguridad', en: 'Backups' },
        desc: {
          es: 'Si algo falla, hay una versión anterior a la que volver.',
          en: 'If something breaks, there is a previous version to fall back to.',
        },
      },
      {
        title: { es: 'Soporte real', en: 'Real support' },
        desc: {
          es: 'Nos escribes, te respondemos — no un ticket que desaparece en un buzón.',
          en: "You write to us, we reply — not a ticket that disappears into an inbox.",
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Es un servicio continuo, no un proyecto puntual — por eso no lleva un ejemplo cerrado.',
      en: "It's an ongoing service, not a one-off project — that's why it has no single example.",
    },
  },
];

/** Textos de interfaz compartidos por las páginas de detalle de servicio. */
export const SERVICE_PAGE = {
  back: { es: '← Volver al inicio', en: '← Back to home' },
  index: { es: 'Servicios', en: 'Services' },
  includes: { es: 'Qué incluye', en: "What's included" },
  example: { es: 'Ejemplo real', en: 'Real example' },
  visitSite: { es: 'Ver sitio →', en: 'Visit site →' },
  cta: { es: '¿Hablamos de tu proyecto? →', en: "Let's talk about your project →" },
};

/** Qué te llevas / deliverables. */
export const PROYECTOS_INTRO = {
  label: '(QUÉ INCLUYE / 02)',
  h2: { es: 'QUÉ TE LLEVAS', en: 'WHAT YOU GET' },
  para: {
    es: 'Entregables claros, cero sorpresas — justo lo que acaba en tus manos.',
    en: 'Clear deliverables, zero surprises — exactly what ends up in your hands.',
  },
};

export const packages: { num: string; title: Bi; line: Bi; items: Bi[] }[] = [
  {
    num: '01',
    title: { es: 'Web a medida', en: 'Custom website' },
    line: {
      es: 'Tu sitio diseñado desde cero, sin plantillas.',
      en: 'Your site designed from scratch — no templates.',
    },
    items: [
      { es: 'Diseño único para tu marca', en: 'A design unique to your brand' },
      { es: '100% responsive (móvil y escritorio)', en: '100% responsive (mobile & desktop)' },
      { es: 'Rápida y optimizada', en: 'Fast and optimized' },
      { es: 'SEO básico incluido', en: 'Basic SEO included' },
    ],
  },
  {
    num: '02',
    title: { es: 'Tienda online', en: 'Online store' },
    line: {
      es: 'Lista para empezar a vender desde el día uno.',
      en: 'Ready to start selling from day one.',
    },
    items: [
      { es: 'Catálogo de productos', en: 'Product catalogue' },
      { es: 'Pasarela de pago segura', en: 'Secure payment gateway' },
      { es: 'Gestión fácil para ti', en: 'Easy to manage yourself' },
      { es: 'Pensada para convertir', en: 'Built to convert' },
    ],
  },
  {
    num: '03',
    title: { es: 'Branding', en: 'Branding' },
    line: {
      es: 'Una identidad que hace que te recuerden.',
      en: 'An identity that makes you memorable.',
    },
    items: [
      { es: 'Logo y marca', en: 'Logo and wordmark' },
      { es: 'Paleta de color y tipografías', en: 'Colour palette and type' },
      { es: 'Mini guía de uso', en: 'Mini brand guide' },
      { es: 'Coherencia en todo', en: 'Consistency everywhere' },
    ],
  },
  {
    num: '04',
    title: { es: 'Landing / campaña', en: 'Landing / campaign' },
    line: { es: 'Una página, un objetivo: convertir.', en: 'One page, one goal: convert.' },
    items: [
      { es: 'Enfocada en un solo objetivo', en: 'Focused on a single goal' },
      { es: 'Texto persuasivo', en: 'Persuasive copy' },
      { es: 'Lista en pocos días', en: 'Ready in a few days' },
      { es: 'Medible y optimizable', en: 'Measurable and optimizable' },
    ],
  },
];

/** Manifiesto (sección oscura). */
export const MANIFIESTO = {
  label: { es: '(MANIFIESTO)', en: '(MANIFESTO)' },
  statement: {
    es: 'No vendemos plantillas. Diseñamos cada píxel a propósito — para que tu marca no se parezca a ninguna otra.',
    en: "We don't sell templates. We design every pixel on purpose — so your brand looks like nobody else's.",
  },
};

export const commitments: { title: Bi; sub: Bi }[] = [
  {
    title: { es: 'Revisiones sin límite', en: 'Unlimited revisions' },
    sub: { es: 'Hasta que estés 100% contento.', en: "Until you're 100% happy." },
  },
  {
    title: { es: 'Entrega rápida', en: 'Fast delivery' },
    sub: { es: 'Plazos cortos, sin esperas eternas.', en: 'Short timelines, no endless waits.' },
  },
  {
    title: { es: 'Sin permanencias', en: 'No lock-ins' },
    sub: { es: 'Ni letra pequeña. Cero sorpresas.', en: 'No fine print. Zero surprises.' },
  },
  {
    title: { es: 'Dedicación total', en: 'Full dedication' },
    sub: {
      es: 'Trato directo y foco en tu proyecto.',
      en: 'Direct contact, focused on your project.',
    },
  },
];

/** Proceso. */
export const PROCESO_INTRO = {
  label: '(PROCESO / 03)',
  h2: { es: 'CÓMO TRABAJAMOS', en: 'HOW WE WORK' },
};

export const steps: { num: string; title: Bi; desc: Bi }[] = [
  {
    num: '01',
    title: { es: 'Descubrimiento', en: 'Discovery' },
    desc: {
      es: 'Entendemos tu negocio, tu público y tus objetivos.',
      en: 'We understand your business, audience and goals.',
    },
  },
  {
    num: '02',
    title: { es: 'Diseño', en: 'Design' },
    desc: {
      es: 'Damos forma a la identidad y a cada pantalla, contigo.',
      en: 'We shape the identity and every screen, with you.',
    },
  },
  {
    num: '03',
    title: { es: 'Desarrollo', en: 'Development' },
    desc: {
      es: 'Construimos una web rápida, segura y lista para crecer.',
      en: 'We build a fast, secure site ready to grow.',
    },
  },
  {
    num: '04',
    title: { es: 'Lanzamiento', en: 'Launch' },
    desc: {
      es: 'Publicamos, medimos y te acompañamos después.',
      en: 'We publish, measure and support you after.',
    },
  },
];

/** Tarifas. */
export const TARIFAS_INTRO = {
  label: '(TARIFAS / 05)',
  h2: { es: 'TARIFAS PLANAS', en: 'FLAT-RATE PLANS' },
  para: {
    es: 'Una cuota fija al mes. Hosting, SSL, dominio y mantenimiento — todo dentro. Sin facturas raras.',
    en: 'One fixed fee a month. Hosting, SSL, domain and maintenance — all in. No weird invoices.',
  },
  from: { es: 'DESDE', en: 'FROM' },
  perMonth: { es: '/mes', en: '/mo' },
  altaLabel: { es: '+ alta única', en: '+ one-time setup' },
  noAlta: { es: 'Sin cuota de alta', en: 'No setup fee' },
  changesLabel: { es: 'CAMBIOS INCLUIDOS', en: 'INCLUDED CHANGES' },
  cta: { es: 'EMPEZAR →', en: 'GET STARTED →' },
  swipe: { es: 'DESLIZA PARA VER LOS PLANES →', en: 'SWIPE TO SEE THE PLANS →' },
  footnote: {
    es: '* Dominio sujeto a disponibilidad y precio, pago único aparte. Cada plan incluye una alta única de puesta en marcha (ver cada tarjeta). En Tienda online y Premium, gestionar tu catálogo desde tu propio panel no cuenta como cambio; las comisiones de la pasarela de pago las cobra directamente tu proveedor de pago. Sin permanencia — cancela cuando quieras.',
    en: "* Domain subject to availability and price, one-time payment. Each plan includes a one-time setup fee (see each card). On Online store and Premium, managing your catalogue from your own panel doesn't count as a change; payment gateway fees are charged directly by your payment provider. No lock-in — cancel whenever you want.",
  },
};

export const plans: {
  slug: string;
  name: Bi;
  tag: Bi | null;
  price: string;
  alta: string | null;
  line: Bi;
  items: Bi[];
  changes: Bi;
}[] = [
  {
    slug: 'esencial',
    name: { es: 'Esencial', en: 'Essential' },
    tag: null,
    price: '29',
    alta: '49',
    line: {
      es: 'Tu presencia online, lista y sin preocupaciones.',
      en: 'Your online presence, sorted and worry-free.',
    },
    items: [
      { es: 'Web de hasta 5 páginas', en: 'Website up to 5 pages' },
      { es: 'Hosting + SSL incluidos', en: 'Hosting + SSL included' },
      { es: 'Dominio gestionado*', en: 'Managed domain*' },
      { es: 'Mantenimiento y actualizaciones', en: 'Maintenance & updates' },
      { es: 'Soporte por email', en: 'Email support' },
    ],
    changes: { es: 'Hasta 2 cambios de contenido/mes', en: 'Up to 2 content changes/mo' },
  },
  {
    slug: 'profesional',
    name: { es: 'Profesional', en: 'Professional' },
    tag: { es: 'POPULAR', en: 'POPULAR' },
    price: '59',
    alta: '79',
    line: {
      es: 'Para negocios que quieren crecer en serio.',
      en: 'For businesses that want to grow for real.',
    },
    items: [
      { es: 'Todo lo de Esencial', en: 'Everything in Essential' },
      { es: 'Hasta 15 páginas', en: 'Up to 15 pages' },
      { es: 'Blog y formularios', en: 'Blog and forms' },
      { es: 'SEO y velocidad optimizados', en: 'SEO & speed optimized' },
      { es: 'Soporte prioritario', en: 'Priority support' },
    ],
    changes: { es: 'Hasta 5 cambios de contenido/mes', en: 'Up to 5 content changes/mo' },
  },
  {
    slug: 'tienda-online',
    name: { es: 'Tienda online', en: 'Online store' },
    tag: null,
    price: '99',
    alta: '129',
    line: {
      es: 'Vende online con login, carrito y pagos.',
      en: 'Sell online with login, cart and payments.',
    },
    items: [
      { es: 'Todo lo de Profesional', en: 'Everything in Professional' },
      { es: 'Carrito y pasarela de pago', en: 'Cart & payment gateway' },
      { es: 'Login y área de clientes', en: 'Login & customer area' },
      { es: 'Gestión de productos y stock', en: 'Product & stock management' },
      { es: 'Integraciones a medida', en: 'Custom integrations' },
    ],
    changes: {
      es: 'Hasta 5 cambios de contenido/diseño al mes*',
      en: 'Up to 5 content/design changes a month*',
    },
  },
  {
    slug: 'premium',
    name: { es: 'Premium', en: 'Premium' },
    tag: { es: 'SIN ALTA', en: 'NO SETUP FEE' },
    price: '199',
    alta: null,
    line: {
      es: 'Para negocios que se han quedado pequeños en Tienda online.',
      en: 'For businesses that have outgrown Online store.',
    },
    items: [
      { es: 'Todo lo de Tienda online', en: 'Everything in Online store' },
      { es: 'Catálogo de productos sin límite', en: 'Unlimited product catalogue' },
      {
        es: 'Integraciones avanzadas (marketplaces, CRM, email marketing)',
        en: 'Advanced integrations (marketplaces, CRM, email marketing)',
      },
      { es: 'Informe mensual de rendimiento', en: 'Monthly performance report' },
      { es: 'Soporte prioritario por WhatsApp/teléfono', en: 'Priority WhatsApp/phone support' },
      { es: 'Llamada mensual de seguimiento', en: 'Monthly check-in call' },
    ],
    changes: {
      es: 'Hasta 12 cambios de contenido/diseño al mes',
      en: 'Up to 12 content/design changes a month',
    },
  },
];

/** FAQ. */
export const FAQ_INTRO = {
  label: '(FAQ / 06)',
  h2: { es: 'PREGUNTAS\nFRECUENTES', en: 'FREQUENTLY\nASKED' },
  para: {
    es: 'Lo que casi todo el mundo nos pregunta antes de empezar. ¿Te queda otra duda? Escríbenos.',
    en: 'What almost everyone asks before starting. Still have a question? Just write to us.',
  },
};

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { es: '¿Cuánto tarda un proyecto?', en: 'How long does a project take?' },
    a: {
      es: 'Una landing puede estar lista en pocos días; una web a medida o una tienda, entre 2 y 4 semanas según el alcance. Fijamos plazos claros antes de empezar.',
      en: 'A landing page can be ready in a few days; a custom site or store, 2 to 4 weeks depending on scope. We agree on clear timelines before starting.',
    },
  },
  {
    q: { es: '¿Qué incluye la cuota mensual?', en: "What's included in the monthly fee?" },
    a: {
      es: 'Hosting, certificado SSL, dominio gestionado, mantenimiento y actualizaciones. Una sola cuota fija, sin facturas sorpresa.',
      en: 'Hosting, SSL certificate, managed domain, maintenance and updates. One fixed fee, no surprise invoices.',
    },
  },
  {
    q: { es: '¿Hay algún coste además de la cuota mensual?', en: 'Is there any cost besides the monthly fee?' },
    a: {
      es: 'Solo una alta única al empezar (entre 49€ y 129€ según el plan; gratis en Premium) que cubre la puesta en marcha. Aparte de eso, únicamente el dominio es un pago aparte si lo compramos por ti. Sin sorpresas después.',
      en: "Just a one-time setup fee when you start (between €49 and €129 depending on the plan; free on Premium) that covers getting everything up and running. Beyond that, only the domain is a separate payment if we buy it for you. No surprises after that.",
    },
  },
  {
    q: { es: '¿Hay permanencia?', en: 'Is there a lock-in?' },
    a: {
      es: 'Ninguna. Sin permanencias ni letra pequeña: puedes cancelar cuando quieras.',
      en: 'None. No lock-ins, no fine print: you can cancel whenever you want.',
    },
  },
  {
    q: {
      es: '¿Tengo que preocuparme del dominio o la parte técnica?',
      en: 'Do I have to worry about the domain or the technical side?',
    },
    a: {
      es: 'No, de eso nos encargamos nosotros. Compramos el dominio por ti —es un pago único aparte de la cuota, ya que su precio depende del nombre que elijas— y desarrollamos y mantenemos toda la web en casa. Mientras sigas con tu tarifa plana, tu web está siempre online, actualizada y a punto — y si algún día decides no continuar, la damos de baja sin complicaciones.',
      en: 'No, we take care of all that. We buy the domain for you —a one-time purchase separate from your monthly fee, since its price depends on the name you choose— and we build and maintain the whole site in-house. As long as you keep your flat-rate plan, your website stays online, updated and in shape — and if one day you decide not to continue, we take it down with no hassle.',
    },
  },
  {
    q: { es: '¿Hacéis cambios después del lanzamiento?', en: 'Do you make changes after launch?' },
    a: {
      es: 'Sí. Cada plan incluye un número de cambios de contenido al mes (2 en Esencial, 5 en Profesional y Tienda online, 12 en Premium), y seguimos contigo para que la web crezca con tu negocio.',
      en: 'Yes. Each plan includes a number of monthly content changes (2 on Essential, 5 on Professional and Online store, 12 on Premium), and we stay with you so the site grows with your business.',
    },
  },
  {
    q: { es: '¿Y si ya tengo web o marca?', en: 'What if I already have a site or brand?' },
    a: {
      es: 'Perfecto. Partimos de lo que ya tienes: rediseñamos, migramos o ampliamos sin empezar de cero salvo que tú quieras.',
      en: "Great. We build on what you already have: redesign, migrate or extend — no starting from scratch unless you want to.",
    },
  },
];

/** Formulario "Empezar proyecto" (/empezar). */
export const EMPEZAR = {
  label: '(EMPEZAR PROYECTO)',
  h2: { es: 'CUÉNTANOS DE TU PROYECTO', en: 'TELL US ABOUT YOUR PROJECT' },
  para: {
    es: 'Unas pocas preguntas para entender qué necesitas. Sin ningún compromiso hasta el último paso.',
    en: "A few questions so we understand what you need. No commitment until the very last step.",
  },
  back: { es: '← Volver al inicio', en: '← Back to home' },

  step1: {
    num: '01',
    title: { es: 'Tus datos', en: 'Your details' },
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Email', en: 'Email' },
    phone: { es: 'Teléfono (opcional)', en: 'Phone (optional)' },
  },
  step2: {
    num: '02',
    title: { es: 'Tu negocio', en: 'Your business' },
    business: { es: '¿Cómo se llama tu negocio?', en: "What's your business called?" },
    about: {
      es: '¿A qué te dedicas? Cuéntanoslo con tus palabras.',
      en: 'What do you do? Tell us in your own words.',
    },
    hasSite: { es: '¿Ya tienes una web?', en: 'Do you already have a website?' },
    hasSiteYes: { es: 'Sí', en: 'Yes' },
    hasSiteNo: { es: 'No', en: 'No' },
    currentUrl: { es: 'URL de tu web actual (opcional)', en: 'Your current website URL (optional)' },
  },
  step3: {
    num: '03',
    title: { es: 'Qué necesitas', en: 'What you need' },
    hint: {
      es: 'Elige el plan que más se ajuste. Si no lo tienes claro, dínoslo y te aconsejamos nosotros.',
      en: "Pick the plan that fits best. If you're not sure, tell us and we'll advise you.",
    },
    unsure: {
      es: 'No lo tengo claro, aconsejadme',
      en: "I'm not sure, advise me",
    },
  },
  stepStyle: {
    num: '04',
    title: { es: 'Qué estilo te gusta', en: 'What style do you like' },
    hint: {
      es: 'Son 3 proyectos reales nuestros, cada uno con una personalidad distinta. Elige el que más se acerque a lo que imaginas para ti.',
      en: 'These are 3 real projects of ours, each with a different personality. Pick the one closest to what you imagine for yourself.',
    },
    unsure: { es: 'No tengo preferencia, aconsejadme', en: 'No preference, advise me' },
  },
  styles: [
    {
      slug: 'elegante',
      label: { es: 'Elegante y premium', en: 'Elegant and premium' },
      image: '/work/supermercado-jonathan.jpg',
    },
    {
      slug: 'atrevido',
      label: { es: 'Atrevido y con carácter', en: 'Bold and full of character' },
      image: '/work/king-of-spain.jpg',
    },
    {
      slug: 'minimalista',
      label: { es: 'Limpio y minimalista', en: 'Clean and minimal' },
      image: '/work/mejores-purificadores.jpg',
    },
  ],
  step4: {
    num: '05',
    title: { es: 'Algo más', en: 'Anything else' },
    notes: {
      es: '¿Algo más que debamos saber? Referencias, plazos, lo que sea.',
      en: 'Anything else we should know? References, timelines, anything at all.',
    },
  },
  submit: { es: 'ENVIAR →', en: 'SEND →' },
  sending: { es: 'ENVIANDO…', en: 'SENDING…' },
  required: { es: '* Campo obligatorio', en: '* Required field' },

  /** Aviso de error si falla el envío (API caída, sin red, etc.). */
  error: {
    es: 'No hemos podido enviar tu solicitud. Comprueba tu conexión e inténtalo de nuevo, o escríbenos directamente.',
    en: "We couldn't send your request. Check your connection and try again, or email us directly.",
  },
  errorCta: { es: 'ESCRIBIR UN EMAIL →', en: 'SEND AN EMAIL →' },

  /** Panel final tras enviar (rama con plan elegido). */
  donePlan: {
    title: { es: '¡Gracias! Un último paso.', en: 'Thanks! One last step.' },
    body: {
      es: 'Hemos recibido tu pedido — en breve te llegará un email de confirmación. Para reservar tu plaza, suscríbete abajo: no se te cobrará nada hasta que tu web esté en producción.',
      en: "We've received your order — a confirmation email is on its way. To reserve your spot, subscribe below: you won't be charged anything until your website is live.",
    },
    cta: { es: 'SUSCRIBIRME →', en: 'SUBSCRIBE →' },
    note: {
      es: 'No se te cobrará hasta que tu web esté en producción.',
      en: "You won't be charged until your website is live.",
    },
  },

  /** Panel final tras enviar (rama "no lo tengo claro"). */
  doneUnsure: {
    title: { es: '¡Gracias!', en: 'Thanks!' },
    body: {
      es: 'Hemos recibido tu pedido y en breve te llegará un email de confirmación. Te responderemos en menos de 24 horas con el plan que mejor encaja contigo, antes de pedirte nada de pago.',
      en: "We've received your order and a confirmation email is on its way. We'll get back to you within 24 hours with the plan that fits best, before asking for any payment.",
    },
  },
};

/** CTA final. */
export const CTA = {
  label: '(CONTACTO / 07)',
  h2: { es: '¿HABLAMOS?', en: "LET'S TALK?" },
  para: {
    es: 'Cuéntanos dónde estás y a dónde quieres llegar. Te respondemos en menos de 24 horas.',
    en: 'Tell us where you are and where you want to go. We reply within 24 hours.',
  },
  ctaStart: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →' },
};

/** Página 404. */
export const NOT_FOUND = {
  eyebrow: { es: '(ERROR 404)', en: '(ERROR 404)' },
  title: { es: 'Página no encontrada', en: 'Page not found' },
  message: {
    es: 'La página que buscas no existe o se ha movido de sitio.',
    en: "The page you're looking for doesn't exist or has moved.",
  },
  cta: { es: 'VOLVER AL INICIO →', en: 'BACK TO HOME →' },
};

/** Footer. */
export const FOOTER = {
  studioCol: {
    heading: { es: 'ESTUDIO', en: 'STUDIO' },
    links: [
      { href: '#servicios', label: { es: 'Servicios', en: 'Services' } },
      { href: '#proyectos', label: { es: 'Qué incluye', en: 'What you get' } },
      { href: '#proceso', label: { es: 'Proceso', en: 'Process' } },
      { href: '#trabajo', label: { es: 'Trabajo', en: 'Work' } },
      { href: '#tarifas', label: { es: 'Tarifas', en: 'Pricing' } },
      { href: '#faq', label: { es: 'FAQ', en: 'FAQ' } },
    ],
  },
  contactCol: {
    heading: { es: 'CONTACTO', en: 'CONTACT' },
    note: { es: 'Respondemos en <24h', en: 'We reply within 24h' },
  },
  legalCol: {
    heading: { es: 'LEGAL', en: 'LEGAL' },
    links: [
      { href: '/aviso-legal', label: { es: 'Aviso legal', en: 'Legal notice' } },
      { href: '/privacidad', label: { es: 'Privacidad', en: 'Privacy' } },
      { href: '/cookies', label: { es: 'Cookies', en: 'Cookies' } },
      { href: '/terminos', label: { es: 'Términos', en: 'Terms' } },
    ],
  },
  copyright: { es: `© ${YEAR} ${BRAND} ESTUDIO`, en: `© ${YEAR} ${BRAND} STUDIO` },
  location: { es: 'IRÚN, ESPAÑA', en: 'IRÚN, SPAIN' },
};

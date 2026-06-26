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
 *  - plans[].price .... tarifas de ejemplo (29 / 59 / 99 €)
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

/** Barra meta del hero. */
export const META = {
  studio: { es: `${BRAND}™ ESTUDIO`, en: `${BRAND}™ STUDIO` },
  tagline: { es: 'DISEÑO + DESARROLLO WEB', en: 'WEB DESIGN + DEVELOPMENT' },
  est: { es: 'EST. 2026', en: 'EST. 2026' },
};

/** Navegación. */
export const NAV = {
  links: [
    { href: '#servicios', label: { es: 'SERVICIOS', en: 'SERVICES' } },
    { href: '#proyectos', label: { es: 'QUÉ INCLUYE', en: 'WHAT YOU GET' } },
    { href: '#tarifas', label: { es: 'TARIFAS', en: 'PRICING' } },
    { href: '#proceso', label: { es: 'PROCESO', en: 'PROCESS' } },
    { href: '#faq', label: { es: 'FAQ', en: 'FAQ' } },
  ],
  cta: { es: 'HABLEMOS →', en: "LET'S TALK →" },
  menu: { es: 'MENÚ', en: 'MENU' },
  close: { es: 'CERRAR', en: 'CLOSE' },
  language: { es: 'IDIOMA', en: 'LANGUAGE' },
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
export const heroIndex: { num: string; label: Bi }[] = [
  { num: '01', label: { es: 'BRANDING', en: 'BRANDING' } },
  { num: '02', label: { es: 'WEB', en: 'WEB' } },
  { num: '03', label: { es: 'E-COMMERCE', en: 'E-COMMERCE' } },
  { num: '04', label: { es: 'UX / UI', en: 'UX / UI' } },
  { num: '05', label: { es: 'SEO', en: 'SEO' } },
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

/** Servicios. */
export const SERVICIOS_INTRO = {
  label: '(SERVICIOS / 01)',
  h2: { es: 'LO QUE HACEMOS', en: 'WHAT WE DO' },
  para: {
    es: 'Un solo equipo, de principio a fin — del primer boceto al día del lanzamiento.',
    en: 'One team, end to end — from the first sketch to launch day.',
  },
};

export const services: { num: string; title: Bi; desc: Bi }[] = [
  {
    num: '01',
    title: { es: 'Branding e identidad', en: 'Branding & identity' },
    desc: {
      es: 'Logo, paleta y un sistema visual que hace que te recuerden.',
      en: 'Logo, palette and a visual system that makes you memorable.',
    },
  },
  {
    num: '02',
    title: { es: 'Diseño de páginas web', en: 'Web design' },
    desc: {
      es: 'Diseños a medida pensados para tu negocio, nunca plantillas.',
      en: 'Custom designs built for your business — never templates.',
    },
  },
  {
    num: '03',
    title: { es: 'Tiendas online', en: 'Online stores' },
    desc: {
      es: 'E-commerce rápido y fácil de gestionar que convierte.',
      en: 'Fast, easy-to-manage e-commerce that converts.',
    },
  },
  {
    num: '04',
    title: { es: 'Landing pages', en: 'Landing pages' },
    desc: {
      es: 'Páginas de campaña con un único objetivo: convertir.',
      en: 'Campaign pages with one single goal: converting.',
    },
  },
  {
    num: '05',
    title: { es: 'UX / UI de apps', en: 'App UX / UI' },
    desc: {
      es: 'Interfaces claras para aplicaciones web y móviles.',
      en: 'Clear interfaces for web and mobile apps.',
    },
  },
  {
    num: '06',
    title: { es: 'SEO y posicionamiento', en: 'SEO' },
    desc: {
      es: 'Optimización técnica y de contenido para que te encuentren.',
      en: 'Technical and content optimization so people find you.',
    },
  },
  {
    num: '07',
    title: { es: 'Mantenimiento web', en: 'Maintenance' },
    desc: {
      es: 'Actualizaciones, seguridad y soporte continuo.',
      en: 'Updates, security and ongoing support.',
    },
  },
];

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
  label: '(TARIFAS / 04)',
  h2: { es: 'TARIFAS PLANAS', en: 'FLAT-RATE PLANS' },
  para: {
    es: 'Una cuota fija al mes. Hosting, SSL, dominio y mantenimiento — todo dentro. Sin facturas raras.',
    en: 'One fixed fee a month. Hosting, SSL, domain and maintenance — all in. No weird invoices.',
  },
  from: { es: 'DESDE', en: 'FROM' },
  perMonth: { es: '/mes', en: '/mo' },
  popular: { es: 'POPULAR', en: 'POPULAR' },
  cta: { es: 'EMPEZAR →', en: 'GET STARTED →' },
  swipe: { es: 'DESLIZA PARA VER LOS PLANES →', en: 'SWIPE TO SEE THE PLANS →' },
  footnote: {
    es: '* Dominio sujeto a disponibilidad y precio. Servidor dedicado según las necesidades del proyecto. Sin permanencia — cancela cuando quieras.',
    en: "* Domain subject to availability and price. Dedicated server depending on the project's needs. No lock-in — cancel whenever you want.",
  },
};

export const plans: { name: Bi; popular: boolean; price: string; line: Bi; items: Bi[] }[] = [
  {
    name: { es: 'Esencial', en: 'Essential' },
    popular: false,
    price: '29',
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
  },
  {
    name: { es: 'Profesional', en: 'Professional' },
    popular: true,
    price: '59',
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
  },
  {
    name: { es: 'Tienda online', en: 'Online store' },
    popular: false,
    price: '99',
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
  },
];

/** FAQ. */
export const FAQ_INTRO = {
  label: '(FAQ / 05)',
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
      es: 'Sí. Las actualizaciones del día a día entran en el mantenimiento, y seguimos contigo para que la web crezca con tu negocio.',
      en: "Yes. Day-to-day updates are part of maintenance, and we stay with you so the site grows with your business.",
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

/** CTA final. */
export const CTA = {
  label: '(CONTACTO / 06)',
  h2: { es: '¿HABLAMOS?', en: "LET'S TALK?" },
  para: {
    es: 'Cuéntanos dónde estás y a dónde quieres llegar. Te respondemos en menos de 24 horas.',
    en: 'Tell us where you are and where you want to go. We reply within 24 hours.',
  },
  ctaStart: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →' },
};

/** Footer. */
export const FOOTER = {
  studioCol: {
    heading: { es: 'ESTUDIO', en: 'STUDIO' },
    links: [
      { href: '#servicios', label: { es: 'Servicios', en: 'Services' } },
      { href: '#proyectos', label: { es: 'Qué incluye', en: 'What you get' } },
      { href: '#proceso', label: { es: 'Proceso', en: 'Process' } },
      { href: '#tarifas', label: { es: 'Tarifas', en: 'Pricing' } },
      { href: '#faq', label: { es: 'FAQ', en: 'FAQ' } },
    ],
  },
  contactCol: {
    heading: { es: 'CONTACTO', en: 'CONTACT' },
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
  built: { es: 'DISEÑADO Y DESARROLLADO EN CASA', en: 'DESIGNED & BUILT IN-HOUSE' },
};

/**
 * Diccionario de copy multiidioma + configuración centralizada.
 *
 * Todo el texto traducible se modela como { es, en?, eu? }. Cada componente
 * resuelve el idioma de la página con `t(valor, lang)` (ver `i18n.ts`) y
 * renderiza ya la cadena correcta en el HTML: no hay intercambio en cliente.
 *
 * PLACEHOLDERS centralizados aquí (cambiar en un solo sitio):
 *  - BRAND ............ nombre del estudio
 *  - CONTACT.email .... email de contacto (mailto)
 *  - CONTACT.social ... redes
 *  - plans[].price .... tarifas vigentes (29 / 59 / 99 / 199 €)
 *  - STRIPE_LINKS ..... Payment Links de Stripe, uno por plan (ver comentario junto al objeto)
 */

/**
 * Cadena traducible. El tipo vive en `i18n.ts` (junto a `t()` y a la lista de
 * idiomas) y se re-exporta aquí porque es de donde lo importa el resto del sitio.
 */
import type { Bi } from './i18n.ts';
export type { Bi };

/** Marca — único sitio donde vive el nombre del estudio. */
export const BRAND = 'arianet';

/**
 * Dominio canónico, sin barra final. Debe coincidir con `site` en
 * astro.config.mjs: de ahí salen las URL absolutas del JSON-LD y del sitemap.
 * (arianet.es hace 301 aquí; el dominio a efectos de Google es éste.)
 */
export const SITE_URL = 'https://arianet.eu';

/** Año (estático en build). Para una landing estática es suficiente. */
export const YEAR = 2026;

/** Contacto y redes (las redes aún no se renderizan en el Footer). */
export const CONTACT = {
  email: 'hola@arianet.eu',
  social: {
    instagram: '#',
    linkedin: '#',
  },
};

/**
 * NAP (Name / Address / Phone) — mismos datos que el aviso legal.
 *
 * Alimenta el JSON-LD `ProfessionalService` y el footer. Google cruza este NAP
 * con el del perfil de empresa y con el de cualquier directorio donde aparezcas:
 * si no coinciden EXACTAMENTE (abreviaturas incluidas), resta en el pack local.
 * Por eso vive en un único sitio y se renderiza desde aquí en todas partes.
 *
 * `telephone` va en E.164 (+34…) para el JSON-LD y los enlaces tel:, y
 * `telephoneDisplay` es cómo se lee en pantalla. Tiene que ser EXACTAMENTE el
 * mismo número que el del perfil de empresa de Google: es uno de los datos que
 * se cruzan para confirmar que la web y la ficha son el mismo negocio.
 */
export const BUSINESS = {
  legalName: 'Arianet WebStudio SL',
  vatId: 'B93796357',
  street: 'C/ María Juncal Labandibar 9, 1.º dcha',
  postalCode: '20305',
  city: 'Irún',
  region: 'Gipuzkoa',
  country: 'ES',
  telephone: '+34689775689',
  telephoneDisplay: '689 77 56 89',
  founded: '2026',
  /* Centro del municipio: precisión suficiente para el emparejado geográfico
     (la ubicación fina la aporta el perfil de empresa, no el schema). */
  geo: { lat: 43.3376, lng: -1.7889 },
};

/**
 * Zonas donde trabajamos — enlazadas desde la sección "Dónde trabajamos".
 *
 * Sólo las tres primeras tienen landing propia (`href`): son las búsquedas con
 * volumen real. El resto son municipios de la comarca que aparecen como texto
 * para cubrir long-tail sin inflar el sitio con páginas casi vacías, que Google
 * penaliza como doorway pages.
 */
export const AREAS_INTRO = {
  label: { es: '(ZONA / 07)', en: '(AREA / 07)', eu: '(EREMUA / 07)' },
  h2: { es: 'DÓNDE TRABAJAMOS', en: 'WHERE WE WORK', eu: 'NON EGITEN DUGU LAN' },
  para: {
    es: 'Somos un estudio de Irún y trabajamos en remoto: con Gipuzkoa, que es nuestra casa, y con toda España.',
    en: 'We are a studio from Irún and we work remotely: with Gipuzkoa, which is home, and with the whole of Spain.',
    eu: 'Irungo estudio bat gara eta urrunetik egiten dugu lan: Gipuzkoarekin, gure etxea baita, eta Espainia osoarekin.',
  },
};

export const areas: { num: string; name: string; href: string | null; desc: Bi }[] = [
  {
    num: '01',
    name: 'Irún',
    href: '/diseno-web-irun/',
    desc: {
      es: 'Nuestra base. Comercios, hostelería y pymes del Bidasoa, la zona que mejor conocemos.',
      en: 'Our home base. Shops, restaurants and small businesses in the Bidasoa area — the ground we know best.',
      eu: 'Gure oinarria. Bidasoako dendak, ostalaritza eta ETEak, ondoen ezagutzen dugun eremua.',
    },
  },
  {
    num: '02',
    name: 'Donostia · San Sebastián',
    href: '/diseno-web-san-sebastian/',
    desc: {
      es: 'Comercio, hostelería, estudios y profesionales de Donostia y su comarca.',
      en: 'Shops, restaurants, studios and professionals in Donostia and its surroundings.',
      eu: 'Donostiako eta eskualdeko dendak, ostalaritza, estudioak eta profesionalak.',
    },
  },
  {
    num: '03',
    name: 'Gipuzkoa',
    href: '/paginas-web-gipuzkoa/',
    desc: {
      es: 'Toda la provincia: Errenteria, Oiartzun, Pasaia, Lezo, Hernani, Tolosa, Eibar.',
      en: 'The whole province: Errenteria, Oiartzun, Pasaia, Lezo, Hernani, Tolosa, Eibar.',
      eu: 'Probintzia osoa: Errenteria, Oiartzun, Pasaia, Lezo, Hernani, Tolosa, Eibar.',
    },
  },
  {
    num: '04',
    name: 'Hondarribia',
    href: '/diseno-web-hondarribia/',
    desc: {
      es: 'Restaurantes, hoteles y comercio del casco histórico y la Marina.',
      en: 'Restaurants, hotels and shops in the old town and the Marina.',
      eu: 'Alde zaharreko eta Marinako jatetxeak, hotelak eta dendak.',
    },
  },
  {
    num: '05',
    name: 'Resto de España',
    href: null,
    desc: {
      es: 'Trabajamos igual estés donde estés: todo por videollamada, email y WhatsApp.',
      en: 'We work the same wherever you are: all over video call, email and WhatsApp.',
      eu: 'Berdin egiten dugu lan non zauden ere: dena bideo-deiz, emailez eta WhatsAppez.',
    },
  },
];

/**
 * Payment Links de Stripe — PLACEHOLDERS, sustituir por los reales.
 *
 * AHORA MISMO NO SE USA: el botón de suscripción del panel post-envío de
 * /empezar se retiró temporalmente (la contratación se cierra por email tras
 * recibir el formulario). Cuando existan los Payment Links reales, volver a
 * enlazarlo en `empezar.astro` (#pform-stripe-link) y `empezar-form.ts`.
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
/**
 * Título y descripción de respaldo, para cualquier página que no pase los
 * suyos. Van por idioma porque un `<title>` en castellano dentro de /en/ tira
 * por tierra la razón de publicar el idioma.
 *
 * El castellano lleva la ciudad delante a propósito: es la primera línea que
 * lee Google y sin ella no competimos por ninguna búsqueda local. El inglés no
 * la necesita — quien busca en inglés no busca "Irún", busca el servicio.
 */
/** Descripción del negocio para el JSON-LD (`ProfessionalService`). */
export const BUSINESS_DESCRIPTION: Bi = {
  es: 'Estudio de diseño y programación de páginas web en Irún (Gipuzkoa). Páginas web a medida, tiendas online, branding y SEO local para negocios de Irún, Donostia-San Sebastián y toda Gipuzkoa.',
  en: 'Web design and development studio based in Irún, Basque Country (Spain). Custom websites, online stores, branding and local SEO for small businesses.',
  eu: 'Web orrien diseinu eta programazio estudioa Irunen (Gipuzkoa). Neurrira egindako web orriak, online dendak, brandinga eta tokiko SEOa Irungo, Donostiako eta Gipuzkoa osoko negozioentzat.',
};

/** Nombre del catálogo de servicios del JSON-LD. */
export const OFFER_CATALOG: Bi = {
  es: 'Servicios de diseño y desarrollo web',
  en: 'Web design and development services',
  eu: 'Web diseinu eta garapen zerbitzuak',
};

export const SEO_DEFAULT: { title: Bi; description: Bi; imageAlt: Bi } = {
  title: {
    es: 'Diseño de páginas web en Irún y Gipuzkoa | arianet',
    en: 'Web design and development studio | arianet',
    eu: 'Web orrien diseinua Irunen eta Gipuzkoan | arianet',
  },
  description: {
    es: 'Diseño y programación de páginas web en Irún. Webs a medida, tiendas online y SEO local para negocios de Irún, San Sebastián y Gipuzkoa. Desde 29 €/mes.',
    en: 'Custom websites, online stores and SEO for small businesses. Remote studio based in Irún, Basque Country. Flat rate from €29/month, no lock-in.',
    eu: 'Web orrien diseinua eta programazioa Irunen. Neurrira egindako webak, online dendak eta tokiko SEOa Irungo, Donostiako eta Gipuzkoako negozioentzat. 29 €/hilabetetik aurrera.',
  },
  imageAlt: {
    es: `${BRAND} — estudio digital`,
    en: `${BRAND} — digital studio`,
    eu: `${BRAND} — estudio digitala`,
  },
};

export const META = {
  studio: {
    es: 'DISEÑO Y PROGRAMACIÓN WEB',
    en: 'WEB DESIGN & DEVELOPMENT',
    eu: 'WEB DISEINUA ETA PROGRAMAZIOA',
  },
  tagline: { es: 'IRÚN · GIPUZKOA', en: 'IRÚN · GIPUZKOA / SPAIN', eu: 'IRUN · GIPUZKOA' },
  est: { es: 'EST. 2026', en: 'EST. 2026', eu: 'EST. 2026' },
};

/** Navegación. */
export const NAV = {
  links: [
    { href: '#servicios', label: { es: 'SERVICIOS', en: 'SERVICES', eu: 'ZERBITZUAK' } },
    { href: '#proyectos', label: { es: 'QUÉ INCLUYE', en: 'WHAT YOU GET', eu: 'ZER SARTZEN DEN' } },
    { href: '#proceso', label: { es: 'PROCESO', en: 'PROCESS', eu: 'PROZESUA' } },
    { href: '#trabajo', label: { es: 'TRABAJO', en: 'WORK', eu: 'LANA' } },
    { href: '#tarifas', label: { es: 'TARIFAS', en: 'PRICING', eu: 'TARIFAK' } },
    { href: '#faq', label: { es: 'FAQ', en: 'FAQ', eu: 'FAQ' } },
  ],
  cta: { es: 'HABLEMOS →', en: "LET'S TALK →", eu: 'HITZ EGIN DEZAGUN →' },
  /** `aria-label` del logotipo y primer nivel de las migas del JSON-LD. */
  home: { es: 'Inicio', en: 'Home', eu: 'Hasiera' },
  menu: { es: 'MENÚ', en: 'MENU', eu: 'MENUA' },
  close: { es: 'CERRAR', en: 'CLOSE', eu: 'ITXI' },
  language: { es: 'IDIOMA', en: 'LANGUAGE', eu: 'HIZKUNTZA' },
  menuToggle: {
    open: { es: 'Abrir menú', en: 'Open menu', eu: 'Menua ireki' },
    close: { es: 'Cerrar menú', en: 'Close menu', eu: 'Menua itxi' },
  },
};

/** Hero. */
export const HERO = {
  status: {
    es: 'DISPONIBLES PARA PROYECTOS',
    en: 'OPEN FOR NEW PROJECTS',
    eu: 'PROIEKTU BERRIETARAKO PREST',
  },
  whatWeDo: { es: 'QUÉ HACEMOS ↓', en: 'WHAT WE DO ↓', eu: 'ZER EGITEN DUGUN ↓' },
  // El H1 lleva el término por el que queremos que nos encuentren + la ciudad:
  // es la señal on-page con más peso de toda la home. Línea 1 sólida, línea 2
  // outline (el contraste tipográfico del prototipo se mantiene).
  h1: {
    line1: { es: 'DISEÑO WEB', en: 'WEB DESIGN', eu: 'WEB DISEINUA' },
    line2: { es: 'EN IRÚN', en: 'IN IRÚN', eu: 'IRUNEN' },
  },
  // Subtítulo bajo el H1: mete los sinónimos reales de búsqueda ("páginas web",
  // "programación", "tiendas online") y las localidades sin recargar el H1.
  subtitle: {
    es: 'Diseño y programación de páginas web para negocios de Irún, Donostia-San Sebastián y toda Gipuzkoa. En remoto, también para el resto de España.',
    en: 'Web design and development for businesses in Irún, Donostia-San Sebastián and across Gipuzkoa. Remotely, for the rest of Spain too.',
    eu: 'Web orrien diseinua eta programazioa Irungo, Donostiako eta Gipuzkoa osoko negozioentzat. Urrunetik, Espainia osorako ere bai.',
  },
  paragraph: {
    es: 'Construimos las webs que tu competencia va a querer copiar. Branding, páginas web y tiendas online, diseñadas desde cero. Tarifa plana desde 29 €/mes, sin permanencia.',
    en: 'We build the websites your competitors will wish they had. Branding, websites and online stores, designed from scratch. Flat rate from €29/mo, no lock-in.',
    eu: 'Zure lehiakideek kopiatu nahiko dituzten webak eraikitzen ditugu. Brandinga, web orriak eta online dendak, hutsetik diseinatuak. Tarifa laua 29 €/hilabetetik aurrera, iraunkortasunik gabe.',
  },
  ctaStart: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →', eu: 'PROIEKTUA HASI →' },
  ctaWork: { es: 'VER TRABAJO', en: 'SEE WORK', eu: 'LANA IKUSI' },
};

/** Índice del hero (columna izquierda). */
export const heroIndex: { num: string; slug: string; label: Bi }[] = [
  { num: '01', slug: 'branding', label: { es: 'BRANDING', en: 'BRANDING', eu: 'BRANDINGA' } },
  { num: '02', slug: 'diseno-web', label: { es: 'WEB', en: 'WEB', eu: 'WEB' } },
  { num: '03', slug: 'tiendas-online', label: { es: 'E-COMMERCE', en: 'E-COMMERCE', eu: 'E-COMMERCE' } },
  { num: '04', slug: 'ux-ui', label: { es: 'UX / UI', en: 'UX / UI', eu: 'UX / UI' } },
  { num: '05', slug: 'apps-moviles', label: { es: 'MOBILE', en: 'MOBILE', eu: 'MUGIKORRA' } },
  { num: '06', slug: 'seo', label: { es: 'SEO', en: 'SEO', eu: 'SEO' } },
];

/** Marquee. */
export const marquee: Bi[] = [
  { es: 'Branding', en: 'Branding', eu: 'Brandinga' },
  { es: 'Diseño Web', en: 'Web Design', eu: 'Web Diseinua' },
  { es: 'E-Commerce', en: 'E-Commerce', eu: 'E-Commerce' },
  { es: 'UX/UI', en: 'UX/UI', eu: 'UX/UI' },
  { es: 'Apps Móviles', en: 'Mobile Apps', eu: 'Mugikorreko Appak' },
  { es: 'SEO', en: 'SEO', eu: 'SEO' },
  { es: 'Landing Pages', en: 'Landing Pages', eu: 'Landing Orriak' },
  { es: 'Mantenimiento', en: 'Maintenance', eu: 'Mantentze-lanak' },
];

/** Trabajo realizado. */
export const WORK_INTRO = {
  label: { es: '(TRABAJO / 04)', en: '(WORK / 04)', eu: '(LANA / 04)' },
  h2: { es: 'ALGUNOS PROYECTOS', en: 'SOME PROJECTS', eu: 'PROIEKTU BATZUK' },
  para: {
    es: 'Proyectos reales, no maquetas. Muy pronto habrá más.',
    en: "Real projects, not mockups. More coming very soon.",
    eu: 'Benetako proiektuak, ez maketak. Laster gehiago izango dira.',
  },
  swipe: {
    es: 'DESLIZA PARA VER MÁS →',
    en: 'SWIPE TO SEE MORE →',
    eu: 'LERRATU GEHIAGO IKUSTEKO →',
  },
};

export const work: {
  tag: Bi;
  title: string;
  desc: Bi;
  url: string;
  image: string;
}[] = [
  {
    tag: { es: 'TIENDA ONLINE', en: 'ONLINE STORE', eu: 'ONLINE DENDA' },
    title: 'Supermercado Jonathan',
    desc: {
      es: 'Boutique de licores en Irún — recogida en tienda y verificación de edad.',
      en: 'A boutique liquor store in Irún — in-store pickup and age verification.',
      eu: 'Irungo likore boutiquea — dendan jasotzea eta adin-egiaztapena.',
    },
    url: 'https://supermercadojonathan.com',
    image: '/work/supermercado-jonathan.jpg',
  },
  {
    tag: { es: 'APLICACIÓN WEB · UX/UI', en: 'WEB APP · UX/UI', eu: 'WEB APLIKAZIOA · UX/UI' },
    title: 'King of Spain',
    desc: {
      es: 'Portal a medida para un clan de Clash of Clans: login, guerras y estadísticas.',
      en: 'A custom portal for a Clash of Clans clan: login, wars and stats.',
      eu: 'Clash of Clans klan batentzako neurrira egindako ataria: saioa hastea, guduak eta estatistikak.',
    },
    url: 'https://kingofspain.org',
    image: '/work/king-of-spain.jpg',
  },
  {
    tag: { es: 'PROYECTO PROPIO · SEO', en: 'OWN PROJECT · SEO', eu: 'PROIEKTU PROPIOA · SEO' },
    title: 'Mejores Purificadores',
    desc: {
      es: 'Comparativas y guías para posicionar en buscadores. Sin cliente detrás.',
      en: 'Comparisons and guides built to rank in search. No client behind it.',
      eu: 'Konparaketak eta gidak bilatzaileetan kokatzeko. Bezerorik gabe.',
    },
    url: 'https://mejorespurificadores.com',
    image: '/work/mejores-purificadores.jpg',
  },
  {
    tag: {
      es: 'PROYECTO PROPIO · MEDIO DIGITAL',
      en: 'OWN PROJECT · DIGITAL MEDIA',
      eu: 'PROIEKTU PROPIOA · HEDABIDE DIGITALA',
    },
    title: 'Semavor',
    desc: {
      es: 'La economía mundial, cada día: informes de mercado, noticias y newsletter.',
      en: 'The global economy, every day: market reports, news and a newsletter.',
      eu: 'Munduko ekonomia, egunero: merkatuko txostenak, albisteak eta newsletterra.',
    },
    url: 'https://semavor.com',
    image: '/work/semavor.jpg',
  },
];

/** Servicios. */
export const SERVICIOS_INTRO = {
  label: { es: '(SERVICIOS / 01)', en: '(SERVICES / 01)', eu: '(ZERBITZUAK / 01)' },
  h2: { es: 'LO QUE HACEMOS', en: 'WHAT WE DO', eu: 'ZER EGITEN DUGUN' },
  para: {
    es: 'Un solo equipo, de principio a fin — del primer boceto al día del lanzamiento.',
    en: 'One team, end to end — from the first sketch to launch day.',
    eu: 'Talde bakarra, hasieratik amaierara — lehen zirriborrotik abiarazteko egunera arte.',
  },
};

/**
 * `seo` es lo que va al <title> y la <meta description> de cada
 * /servicios/[slug]; `title`/`desc` son el texto visible de la tarjeta.
 *
 * Se separan a propósito: el title debe leerse como la búsqueda que hace el
 * cliente ("diseño de páginas web en Irún"), no como el nombre interno del
 * servicio. Objetivo: title ≤ 60 caracteres y description 140-160, que es lo
 * que Google muestra sin recortar.
 */
export const services: {
  num: string;
  slug: string;
  title: Bi;
  desc: Bi;
  seo: { title: Bi; description: Bi };
}[] = [
  {
    num: '01',
    slug: 'branding',
    title: {
      es: 'Branding e identidad',
      en: 'Branding & identity',
      eu: 'Brandinga eta identitatea',
    },
    desc: {
      es: 'Logo, paleta y un sistema visual que hace que te recuerden.',
      en: 'Logo, palette and a visual system that makes you memorable.',
      eu: 'Logoa, paleta eta gogoan hartuko zaituzten sistema bisual bat.',
    },
    seo: {
      title: {
        es: 'Diseño de logos y branding en Irún, Gipuzkoa',
        en: 'Logo design and brand identity',
        eu: 'Logo eta branding diseinua Irunen, Gipuzkoan',
      },
      description: {
        es:
          'Diseño de logotipos e identidad de marca para negocios de Irún, San Sebastián y Gipuzkoa. Logo, paleta, tipografías y guía de marca. Presupuesto sin compromiso.',
        en:
          'Logo, colour palette, typography and brand guidelines for small businesses. Remote studio based in Irún, Basque Country. Free quote, no strings attached.',
          eu: 'Logotipoen eta marka-identitatearen diseinua Irungo, Donostiako eta Gipuzkoako negozioentzat. Logoa, paleta, tipografiak eta marka-gida. Aurrekontua konpromisorik gabe.',
      },
    },
  },
  {
    num: '02',
    slug: 'diseno-web',
    title: { es: 'Diseño de páginas web', en: 'Web design', eu: 'Web orrien diseinua' },
    desc: {
      es: 'Diseños a medida pensados para tu negocio, nunca plantillas.',
      en: 'Custom designs built for your business — never templates.',
      eu: 'Zure negoziorako pentsatutako neurrirako diseinuak, inoiz ez txantiloiak.',
    },
    /* Sin ciudad en el title, a diferencia de la home: esta página explica el
       servicio ("a medida, sin plantillas") y la home se queda la consulta
       local. Dos páginas casi idénticas se restan la una a la otra. */
    seo: {
      title: {
        es: 'Diseño de páginas web a medida, sin plantillas',
        en: 'Custom web design and development — never templates',
        eu: 'Neurrira egindako web orrien diseinua, txantiloirik gabe',
      },
      description: {
        es:
          'Diseñamos y programamos tu web desde cero, adaptada a tu negocio: responsive, rápida y con SEO técnico desde el primer día. Estudio en Irún, Gipuzkoa.',
        en:
          'We design and build your website from scratch, tailored to your business: responsive, fast and with technical SEO from day one. Remote studio in the Basque Country.',
          eu: 'Zure weba hutsetik diseinatu eta programatzen dugu, zure negoziora egokituta: responsive, azkarra eta SEO teknikoarekin lehen egunetik. Estudioa Irunen, Gipuzkoan.',
      },
    },
  },
  {
    num: '03',
    slug: 'tiendas-online',
    title: { es: 'Tiendas online', en: 'Online stores', eu: 'Online dendak' },
    desc: {
      es: 'E-commerce rápido y fácil de gestionar que convierte.',
      en: 'Fast, easy-to-manage e-commerce that converts.',
      eu: 'Kudeatzen erraza eta azkarra den e-commerce bat, saltzen duena.',
    },
    seo: {
      title: {
        es: 'Crear tienda online en Irún y Gipuzkoa | E-commerce',
        en: 'Online store development | E-commerce',
        eu: 'Online denda sortu Irunen eta Gipuzkoan | E-commerce',
      },
      description: {
        es:
          'Creamos tu tienda online: catálogo, carrito, pagos seguros y panel para gestionarla tú. Para comercios de Irún, San Sebastián y toda Gipuzkoa. Desde 99 €/mes.',
        en:
          'We build your online store: catalogue, cart, secure payments and a panel you manage yourself. Flat rate from €99/month, no lock-in.',
          eu: 'Zure online denda sortzen dugu: katalogoa, saskia, ordainketa seguruak eta zuk kudeatzeko panela. Irungo, Donostiako eta Gipuzkoa osoko dendentzat. 99 €/hilabetetik aurrera.',
      },
    },
  },
  {
    num: '04',
    slug: 'landing-pages',
    title: { es: 'Landing pages', en: 'Landing pages', eu: 'Landing orriak' },
    desc: {
      es: 'Páginas de campaña con un único objetivo: convertir.',
      en: 'Campaign pages with one single goal: converting.',
      eu: 'Helburu bakarreko kanpaina-orriak: bihurtzea.',
    },
    seo: {
      title: {
        es: 'Landing pages para campañas | Irún, Gipuzkoa',
        en: 'Landing pages for campaigns',
        eu: 'Kanpainetarako landing orriak | Irun, Gipuzkoa',
      },
      description: {
        es:
          'Páginas de campaña con un único objetivo: que te contacten. Copy persuasivo, analítica y listas en días. Para negocios de Irún, Donostia y Gipuzkoa.',
        en:
          'Campaign pages with a single goal: getting people to contact you. Persuasive copy, analytics and live in days rather than months.',
          eu: 'Helburu bakarreko kanpaina-orriak: zurekin harremanetan jar daitezen. Testu limurtzailea, analitika eta egun gutxitan prest. Irungo, Donostiako eta Gipuzkoako negozioentzat.',
      },
    },
  },
  {
    num: '05',
    slug: 'ux-ui',
    title: { es: 'UX / UI de apps', en: 'App UX / UI', eu: 'Appen UX / UI' },
    desc: {
      es: 'Interfaces claras para aplicaciones web y móviles.',
      en: 'Clear interfaces for web and mobile apps.',
      eu: 'Interfaze argiak web eta mugikorreko aplikazioetarako.',
    },
    seo: {
      title: {
        es: 'Diseño UX/UI de apps y aplicaciones web | arianet',
        en: 'UX/UI design for apps and web applications',
        eu: 'Appen eta web aplikazioen UX/UI diseinua | arianet',
      },
      description: {
        es:
          'Diseño de interfaces para aplicaciones web y móviles: flujos, sistema de diseño y prototipos navegables antes de programar. Estudio en Irún, Gipuzkoa.',
        en:
          'Interface design for web and mobile applications: user flows, design system and clickable prototypes before a single line of code is written.',
          eu: 'Web eta mugikorreko aplikazioetarako interfazeen diseinua: fluxuak, diseinu-sistema eta prototipo nabigagarriak programatu aurretik. Estudioa Irunen, Gipuzkoan.',
      },
    },
  },
  {
    num: '06',
    slug: 'apps-moviles',
    title: { es: 'Aplicaciones móviles', en: 'Mobile apps', eu: 'Mugikorreko aplikazioak' },
    desc: {
      es: 'Apps nativas para iOS y Android, del diseño a la publicación.',
      en: 'Native iOS and Android apps, from design to release.',
      eu: 'iOS eta Androiderako app natiboak, diseinutik argitalpenera.',
    },
    /* Va justo detrás de UX/UI y con title distinto a propósito: aquel cubre
       "diseño de interfaces de apps" y éste "desarrollo de apps nativas". Con
       titles parecidos competirían entre sí por la misma búsqueda. */
    seo: {
      title: {
        es: 'Desarrollo de apps para iOS y Android | arianet',
        en: 'Native iOS and Android app development',
        eu: 'iOS eta Androiderako appen garapena | arianet',
      },
      description: {
        es:
          'Desarrollo de aplicaciones móviles nativas para iOS y Android: diseño, programación y publicación en App Store y Google Play. Estudio en Irún, Gipuzkoa.',
        en:
          'Native mobile app development for iOS and Android: design, build and publishing on the App Store and Google Play.',
          eu: 'iOS eta Androiderako mugikorreko aplikazio natiboen garapena: diseinua, programazioa eta App Store eta Google Play-n argitaratzea. Estudioa Irunen, Gipuzkoan.',
      },
    },
  },
  {
    num: '07',
    slug: 'seo',
    title: { es: 'SEO y posicionamiento', en: 'SEO', eu: 'SEOa eta posizionamendua' },
    desc: {
      es: 'Optimización técnica y de contenido para que te encuentren.',
      en: 'Technical and content optimization so people find you.',
      eu: 'Optimizazio teknikoa eta edukiarena, aurki zaitzaten.',
    },
    seo: {
      title: {
        es: 'Posicionamiento SEO en Irún y San Sebastián',
        en: 'SEO and search engine positioning',
        eu: 'SEO posizionamendua Irunen eta Donostian',
      },
      description: {
        es:
          'SEO técnico y de contenido para salir en Google cuando tu cliente te busca. Posicionamiento local para negocios de Irún, Donostia-San Sebastián y Gipuzkoa.',
        en:
          'Technical and content SEO so you show up on Google when your customer is searching. Local positioning for small businesses.',
          eu: 'SEO teknikoa eta edukiarena, zure bezeroak bilatzen zaituenean Googlen agertzeko. Tokiko posizionamendua Irungo, Donostiako eta Gipuzkoako negozioentzat.',
      },
    },
  },
  {
    num: '08',
    slug: 'mantenimiento',
    title: { es: 'Mantenimiento web', en: 'Maintenance', eu: 'Web mantentze-lanak' },
    desc: {
      es: 'Actualizaciones, seguridad y soporte continuo.',
      en: 'Updates, security and ongoing support.',
      eu: 'Eguneratzeak, segurtasuna eta etengabeko laguntza.',
    },
    seo: {
      title: {
        es: 'Mantenimiento de páginas web | Irún, Gipuzkoa',
        en: 'Website maintenance and support',
        eu: 'Web orrien mantentze-lanak | Irun, Gipuzkoa',
      },
      description: {
        es:
          'Mantenimiento web mensual: actualizaciones, seguridad, copias de seguridad y soporte real. Incluido en la tarifa plana, sin permanencia. Estudio en Irún.',
        en:
          'Monthly website maintenance: updates, security, backups and real support. Included in the flat rate, with no lock-in.',
          eu: 'Hileroko web mantentze-lanak: eguneratzeak, segurtasuna, segurtasun-kopiak eta benetako laguntza. Tarifa lauan barne, iraunkortasunik gabe. Estudioa Irunen.',
      },
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
      eu: 'Kode-lerro bakar bat idatzi aurretik, nor zaren definitzen dugu: logoa, koloreak, tipografia eta zure bezeroekin erabiltzen duzun tonua. Ondoren datorren guztia — weba, sare sozialak, fakturak ere — hemendik abiatzen da.',
    },
    bullets: [
      {
        title: { es: 'Logo y variantes', en: 'Logo and variants', eu: 'Logoa eta aldaerak' },
        desc: {
          es: 'Tu marca en positivo, en negativo y a una sola tinta, lista para cualquier soporte.',
          en: 'Your mark in positive, negative and single-colour versions, ready for any medium.',
          eu: 'Zure marka positiboan, negatiboan eta tinta bakarrean, edozein euskarritarako prest.',
        },
      },
      {
        title: {
          es: 'Paleta y tipografía',
          en: 'Colour palette and type',
          eu: 'Paleta eta tipografia',
        },
        desc: {
          es: 'Los colores y las fuentes que te van a representar en todas partes, no solo en la web.',
          en: 'The colours and typefaces that represent you everywhere, not just on the website.',
          eu: 'Nonahi ordezkatuko zaituzten koloreak eta letra-tipoak, ez soilik weban.',
        },
      },
      {
        title: { es: 'Mini guía de marca', en: 'Mini brand guide', eu: 'Marka-gida laburra' },
        desc: {
          es: 'Un documento corto con las reglas básicas, para que quien use tu marca no la desvirtúe.',
          en: 'A short document with the basic rules, so anyone using your brand keeps it consistent.',
          eu: 'Oinarrizko arauak biltzen dituen dokumentu labur bat, zure marka erabiltzen duenak desitxura ez dezan.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Aún no tenemos un caso de branding público — si quieres ser el primero, hablamos.',
      en: "We don't have a public branding case yet — if you want to be the first, let's talk.",
      eu: 'Oraindik ez dugu branding kasu publikorik — lehena izan nahi baduzu, hitz egin dezagun.',
    },
  },
  {
    slug: 'diseno-web',
    intro: {
      es: 'Diseñamos cada pantalla pensando en tu negocio real, no en una plantilla genérica. Estructura, jerarquía visual y texto persuasivo — todo colocado con intención.',
      en: 'We design every screen thinking about your actual business, not a generic template. Structure, visual hierarchy and persuasive copy — all placed with intention.',
      eu: 'Pantaila bakoitza zure benetako negozioan pentsatuz diseinatzen dugu, ez txantiloi generiko batean. Egitura, hierarkia bisuala eta testu limurtzailea — dena asmoz jarrita.',
    },
    bullets: [
      {
        title: { es: 'Diseño a medida', en: 'Custom design', eu: 'Neurrirako diseinua' },
        desc: {
          es: 'Cada sección pensada para tu contenido real, no rellenada con texto de relleno.',
          en: 'Every section designed for your real content, not filled with placeholder text.',
          eu: 'Atal bakoitza zure benetako edukirako pentsatua, ez betegarrizko testuz betea.',
        },
      },
      {
        title: { es: '100% responsive', en: '100% responsive', eu: '% 100 responsive' },
        desc: {
          es: 'Se ve bien en el móvil de tu cliente igual que en tu portátil.',
          en: "Looks good on your customer's phone just as well as on your laptop.",
          eu: 'Zure bezeroaren mugikorrean zure ordenagailu eramangarrian bezain ondo ikusten da.',
        },
      },
      {
        title: {
          es: 'SEO técnico desde la base',
          en: 'Technical SEO from day one',
          eu: 'SEO teknikoa oinarritik',
        },
        desc: {
          es: 'Estructura y velocidad pensadas para que Google te encuentre desde el primer día.',
          en: 'Structure and speed built so Google finds you from day one.',
          eu: 'Egitura eta abiadura Googlek lehen egunetik aurki zaitzan pentsatuak.',
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
      eu: 'Katalogoa, saskia, ordainketak eta kudeaketa — dena konektatuta lehen egunetik saltzeko, prezio-aldaketa bakoitzerako gure mende egon gabe.',
    },
    bullets: [
      {
        title: {
          es: 'Catálogo y categorías',
          en: 'Catalogue and categories',
          eu: 'Katalogoa eta kategoriak',
        },
        desc: {
          es: 'Organiza tus productos como tiene sentido para tus clientes, no para una plantilla.',
          en: 'Organise your products the way your customers expect, not the way a template dictates.',
          eu: 'Antolatu zure produktuak zure bezeroentzat zentzuzkoa den moduan, ez txantiloi batentzat.',
        },
      },
      {
        title: {
          es: 'Pasarela de pago segura',
          en: 'Secure payment gateway',
          eu: 'Ordainketa-pasabide segurua',
        },
        desc: {
          es: 'Cobros online con los proveedores habituales, sin que tengas que gestionar tarjetas tú mismo.',
          en: "Online payments with standard providers, without you having to handle card data yourself.",
          eu: 'Online kobrantzak ohiko hornitzaileekin, txartelak zuk zeuk kudeatu beharrik gabe.',
        },
      },
      {
        title: {
          es: 'Panel de gestión propio',
          en: 'Your own admin panel',
          eu: 'Kudeaketa-panel propioa',
        },
        desc: {
          es: 'Añade productos, cambia precios y stock tú mismo, sin escribirnos cada vez.',
          en: 'Add products, change prices and stock yourself, without writing to us every time.',
          eu: 'Gehitu produktuak, aldatu prezioak eta stocka zuk zeuk, aldiro guri idatzi gabe.',
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
      eu: 'Orri bat, helburu bat. Kanpainetarako, aurkezpenetarako edo iragarkietarako ezin hobea — egun gutxitan prest, ez asteetan.',
    },
    bullets: [
      {
        title: { es: 'Un solo objetivo', en: 'A single goal', eu: 'Helburu bakarra' },
        desc: {
          es: 'Nada de menús ni enlaces de salida — todo empuja hacia la misma acción.',
          en: 'No menus or exit links — everything pushes toward the same action.',
          eu: 'Menurik eta irteera-estekarik ez — dena ekintza berera bultzatzen du.',
        },
      },
      {
        title: { es: 'Copy persuasivo', en: 'Persuasive copy', eu: 'Testu limurtzailea' },
        desc: {
          es: 'Texto escrito para convertir, no solo para informar.',
          en: 'Copy written to convert, not just to inform.',
          eu: 'Bihurtzeko idatzitako testua, ez soilik informatzeko.',
        },
      },
      {
        title: {
          es: 'Medible desde el día uno',
          en: 'Measurable from day one',
          eu: 'Neurgarria lehen egunetik',
        },
        desc: {
          es: 'Lista para conectar analítica y medir qué funciona de verdad.',
          en: 'Ready to connect analytics and measure what actually works.',
          eu: 'Analitika konektatzeko eta zerk funtzionatzen duen benetan neurtzeko prest.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Aún no tenemos una landing propia que enseñar — muy pronto.',
      en: "We don't have our own landing example to show yet — coming soon.",
      eu: 'Oraindik ez dugu geure landing orririk erakusteko — oso laster.',
    },
  },
  {
    slug: 'ux-ui',
    intro: {
      es: 'Interfaces claras para aplicaciones web y móviles — desde el primer boceto hasta la pantalla final, pensando en cómo la usa alguien de verdad, no en cómo queda en una presentación.',
      en: 'Clear interfaces for web and mobile apps — from the first sketch to the final screen, designed around how someone actually uses it, not how it looks in a slide.',
      eu: 'Interfaze argiak web eta mugikorreko aplikazioetarako — lehen zirriborrotik azken pantailaraino, norbaitek benetan nola erabiltzen duen pentsatuz, ez aurkezpen batean nola gelditzen den.',
    },
    bullets: [
      {
        title: {
          es: 'Flujos de principio a fin',
          en: 'End-to-end flows',
          eu: 'Fluxuak hasieratik amaierara',
        },
        desc: {
          es: 'Cada pantalla resuelve un paso concreto del usuario, sin fricción de más.',
          en: 'Every screen solves one concrete user step, with no extra friction.',
          eu: 'Pantaila bakoitzak erabiltzailearen urrats zehatz bat ebazten du, gehiegizko marruskadurarik gabe.',
        },
      },
      {
        title: {
          es: 'Sistemas de diseño reutilizables',
          en: 'Reusable design systems',
          eu: 'Berrerabil daitezkeen diseinu-sistemak',
        },
        desc: {
          es: 'Componentes consistentes que escalan cuando la aplicación crece.',
          en: 'Consistent components that scale as the application grows.',
          eu: 'Osagai koherenteak, aplikazioa hazten denean eskalatzen direnak.',
        },
      },
      {
        title: {
          es: 'Prototipos navegables',
          en: 'Clickable prototypes',
          eu: 'Prototipo nabigagarriak',
        },
        desc: {
          es: 'Pruebas la aplicación antes de que se escriba una sola línea de código de producción.',
          en: 'You try the app before a single line of production code is written.',
          eu: 'Aplikazioa probatzen duzu produkzioko kode-lerro bakar bat idatzi aurretik.',
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
    slug: 'apps-moviles',
    intro: {
      es: 'Desarrollamos aplicaciones nativas para iOS y Android: el diseño, la programación y la publicación en App Store y Google Play. A diferencia del resto de servicios, una app no entra en la tarifa plana — cada proyecto se presupuesta aparte, porque no se parece en nada al anterior.',
      en: 'We build native apps for iOS and Android: the design, the development and the release on the App Store and Google Play. Unlike our other services, an app does not fit the flat rate — each project is quoted separately, because no two are alike.',
      eu: 'iOS eta Androiderako aplikazio natiboak garatzen ditugu: diseinua, programazioa eta App Store eta Google Play-n argitaratzea. Gainerako zerbitzuak ez bezala, app bat ez da tarifa lauan sartzen — proiektu bakoitza aparte aurrekontatzen da, bata ez baita bestearen antzekoa.',
    },
    bullets: [
      {
        title: {
          es: 'Nativas en las dos plataformas',
          en: 'Native on both platforms',
          eu: 'Natiboak bi plataformetan',
        },
        desc: {
          es: 'iOS y Android desarrolladas en su lenguaje propio, no una web metida dentro de una app.',
          en: 'iOS and Android built in their own languages, not a website wrapped inside an app.',
          eu: 'iOS eta Android bakoitza bere hizkuntzan garatuak, ez app baten barruan sartutako web bat.',
        },
      },
      {
        title: {
          es: 'Del boceto a la tienda',
          en: 'From sketch to store',
          eu: 'Zirriborrotik dendara',
        },
        desc: {
          es: 'Nos encargamos también de las fichas, capturas y del proceso de revisión de Apple y Google.',
          en: 'We also handle store listings, screenshots and the Apple and Google review process.',
          eu: 'Fitxak, pantaila-argazkiak eta Apple eta Googleren berrikuspen-prozesua ere gure gain hartzen ditugu.',
        },
      },
      {
        title: {
          es: 'Presupuesto cerrado antes de empezar',
          en: 'A closed quote before we start',
          eu: 'Aurrekontu itxia hasi aurretik',
        },
        desc: {
          es: 'Analizamos qué necesita la app y te damos un precio y un plazo por escrito, sin sorpresas a mitad.',
          en: 'We analyse what the app needs and give you a written price and timeline, with no surprises halfway.',
          eu: 'Appak zer behar duen aztertzen dugu eta prezioa eta epea idatziz ematen dizkizugu, erdibidean ezustekorik gabe.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Todavía no tenemos una app publicada que enseñar. Preferimos decirlo antes que rellenar esto con capturas de otro.',
      en: "We don't have a published app to show yet. We'd rather say so than fill this with someone else's screenshots.",
      eu: 'Oraindik ez dugu argitaratutako apprik erakusteko. Nahiago dugu hori esan, atal hau beste baten pantaila-argazkiz bete baino.',
    },
  },
  {
    slug: 'seo',
    intro: {
      es: 'De poco sirve una web bonita si nadie la encuentra. Trabajamos la parte técnica y el contenido para que aparezcas cuando tu cliente te busca.',
      en: "A beautiful website is not much use if nobody finds it. We work the technical side and the content so you show up when your customer searches for you.",
      eu: 'Web polit batek ez du ezertarako balio inork aurkitzen ez badu. Alde teknikoa eta edukia lantzen ditugu, zure bezeroak bilatzen zaituenean ager zaitezen.',
    },
    bullets: [
      {
        title: { es: 'SEO técnico', en: 'Technical SEO', eu: 'SEO teknikoa' },
        desc: {
          es: 'Velocidad, estructura y metadatos — la base que Google necesita para entenderte.',
          en: 'Speed, structure and metadata — the foundation Google needs to understand you.',
          eu: 'Abiadura, egitura eta metadatuak — Googlek zu ulertzeko behar duen oinarria.',
        },
      },
      {
        title: {
          es: 'Contenido pensado para buscar',
          en: 'Content built for search',
          eu: 'Bilaketarako pentsatutako edukia',
        },
        desc: {
          es: 'Textos escritos para las preguntas reales que hace tu cliente, no solo para sonar bien.',
          en: 'Copy written for the real questions your customers ask, not just to sound good.',
          eu: 'Zure bezeroak egiten dituen benetako galderetarako idatzitako testuak, ez soilik ondo entzuteko.',
        },
      },
      {
        title: {
          es: 'Seguimiento de posiciones',
          en: 'Ranking tracking',
          eu: 'Posizioen jarraipena',
        },
        desc: {
          es: 'Medimos si subes en Google, no solo si publicamos contenido.',
          en: 'We measure whether you climb in Google, not just whether content gets published.',
          eu: 'Googlen igotzen ari zaren neurtzen dugu, ez soilik edukia argitaratzen dugun.',
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
      eu: 'Web bat ez da abiarazteko egunean amaitzen. Guk zaintzen dugu funtzionatzen jarrai dezan, segurua eta eguneratua — zuk horretan pentsatu behar ez izateko.',
    },
    bullets: [
      {
        title: {
          es: 'Actualizaciones y seguridad',
          en: 'Updates and security',
          eu: 'Eguneratzeak eta segurtasuna',
        },
        desc: {
          es: 'Parcheamos y actualizamos por ti, sin que tengas que estar pendiente.',
          en: 'We patch and update on your behalf, without you needing to keep watch.',
          eu: 'Guk adabakitzen eta eguneratzen dugu zure ordez, zu adi egon beharrik gabe.',
        },
      },
      {
        title: { es: 'Copias de seguridad', en: 'Backups', eu: 'Segurtasun-kopiak' },
        desc: {
          es: 'Si algo falla, hay una versión anterior a la que volver.',
          en: 'If something breaks, there is a previous version to fall back to.',
          eu: 'Zerbaitek huts eginez gero, aurreko bertsio batera itzul daiteke.',
        },
      },
      {
        title: { es: 'Soporte real', en: 'Real support', eu: 'Benetako laguntza' },
        desc: {
          es: 'Nos escribes, te respondemos — no un ticket que desaparece en un buzón.',
          en: "You write to us, we reply — not a ticket that disappears into an inbox.",
          eu: 'Zuk idatzi, guk erantzun — ez postontzi batean desagertzen den txartel bat.',
        },
      },
    ],
    example: null,
    exampleNote: {
      es: 'Es un servicio continuo, no un proyecto puntual — por eso no lleva un ejemplo cerrado.',
      en: "It's an ongoing service, not a one-off project — that's why it has no single example.",
      eu: 'Zerbitzu jarraitua da, ez proiektu puntual bat — horregatik ez du adibide itxirik.',
    },
  },
];

/** Textos de interfaz compartidos por las páginas de detalle de servicio. */
export const SERVICE_PAGE = {
  back: { es: '← Volver al inicio', en: '← Back to home', eu: '← Hasierara itzuli' },
  index: { es: 'Servicios', en: 'Services', eu: 'Zerbitzuak' },
  includes: { es: 'Qué incluye', en: "What's included", eu: 'Zer sartzen den' },
  example: { es: 'Ejemplo real', en: 'Real example', eu: 'Benetako adibidea' },
  visitSite: { es: 'Ver sitio →', en: 'Visit site →', eu: 'Gunea ikusi →' },
  cta: {
    es: '¿Hablamos de tu proyecto? →',
    en: "Let's talk about your project →",
    eu: 'Zure proiektuaz hitz egingo dugu? →',
  },
};

/** Qué te llevas / deliverables. */
export const PROYECTOS_INTRO = {
  label: { es: '(QUÉ INCLUYE / 02)', en: '(WHAT YOU GET / 02)', eu: '(ZER SARTZEN DEN / 02)' },
  h2: { es: 'QUÉ TE LLEVAS', en: 'WHAT YOU GET', eu: 'ZER ERAMATEN DUZUN' },
  para: {
    es: 'Entregables claros, cero sorpresas — justo lo que acaba en tus manos.',
    en: 'Clear deliverables, zero surprises — exactly what ends up in your hands.',
    eu: 'Entregagai argiak, ezustekorik gabe — zure eskuetara iristen dena, zehazki.',
  },
};

export const packages: { num: string; title: Bi; line: Bi; items: Bi[] }[] = [
  {
    num: '01',
    title: { es: 'Web a medida', en: 'Custom website', eu: 'Neurrirako weba' },
    line: {
      es: 'Tu sitio diseñado desde cero, sin plantillas.',
      en: 'Your site designed from scratch — no templates.',
      eu: 'Zure gunea hutsetik diseinatua, txantiloirik gabe.',
    },
    items: [
      {
        es: 'Diseño único para tu marca',
        en: 'A design unique to your brand',
        eu: 'Zure markarako diseinu bakarra',
      },
      {
        es: '100% responsive (móvil y escritorio)',
        en: '100% responsive (mobile & desktop)',
        eu: '% 100 responsive (mugikorra eta mahaigaina)',
      },
      { es: 'Rápida y optimizada', en: 'Fast and optimized', eu: 'Azkarra eta optimizatua' },
      { es: 'SEO básico incluido', en: 'Basic SEO included', eu: 'Oinarrizko SEOa barne' },
    ],
  },
  {
    num: '02',
    title: { es: 'Tienda online', en: 'Online store', eu: 'Online denda' },
    line: {
      es: 'Lista para empezar a vender desde el día uno.',
      en: 'Ready to start selling from day one.',
      eu: 'Lehen egunetik saltzen hasteko prest.',
    },
    items: [
      { es: 'Catálogo de productos', en: 'Product catalogue', eu: 'Produktuen katalogoa' },
      {
        es: 'Pasarela de pago segura',
        en: 'Secure payment gateway',
        eu: 'Ordainketa-pasabide segurua',
      },
      {
        es: 'Gestión fácil para ti',
        en: 'Easy to manage yourself',
        eu: 'Zuretzat kudeaketa erraza',
      },
      { es: 'Pensada para convertir', en: 'Built to convert', eu: 'Bihurtzeko pentsatua' },
    ],
  },
  {
    num: '03',
    title: { es: 'Branding', en: 'Branding', eu: 'Brandinga' },
    line: {
      es: 'Una identidad que hace que te recuerden.',
      en: 'An identity that makes you memorable.',
      eu: 'Gogoan hartuko zaituzten identitate bat.',
    },
    items: [
      { es: 'Logo y marca', en: 'Logo and wordmark', eu: 'Logoa eta marka' },
      {
        es: 'Paleta de color y tipografías',
        en: 'Colour palette and type',
        eu: 'Kolore-paleta eta tipografiak',
      },
      { es: 'Mini guía de uso', en: 'Mini brand guide', eu: 'Erabilera-gida laburra' },
      { es: 'Coherencia en todo', en: 'Consistency everywhere', eu: 'Koherentzia guztian' },
    ],
  },
  {
    num: '04',
    title: { es: 'Landing / campaña', en: 'Landing / campaign', eu: 'Landing / kanpaina' },
    line: {
      es: 'Una página, un objetivo: convertir.',
      en: 'One page, one goal: convert.',
      eu: 'Orri bat, helburu bat: bihurtzea.',
    },
    items: [
      {
        es: 'Enfocada en un solo objetivo',
        en: 'Focused on a single goal',
        eu: 'Helburu bakarrera bideratua',
      },
      { es: 'Texto persuasivo', en: 'Persuasive copy', eu: 'Testu limurtzailea' },
      { es: 'Lista en pocos días', en: 'Ready in a few days', eu: 'Egun gutxitan prest' },
      {
        es: 'Medible y optimizable',
        en: 'Measurable and optimizable',
        eu: 'Neurgarria eta optimizagarria',
      },
    ],
  },
];

/** Manifiesto (sección oscura). */
export const MANIFIESTO = {
  label: { es: '(MANIFIESTO)', en: '(MANIFESTO)', eu: '(MANIFESTUA)' },
  statement: {
    es: 'No vendemos plantillas. Diseñamos cada píxel a propósito — para que tu marca no se parezca a ninguna otra.',
    en: "We don't sell templates. We design every pixel on purpose — so your brand looks like nobody else's.",
    eu: 'Ez dugu txantiloirik saltzen. Pixel bakoitza asmoz diseinatzen dugu — zure marka beste inorenaren antzekoa izan ez dadin.',
  },
};

export const commitments: { title: Bi; sub: Bi }[] = [
  {
    title: {
      es: 'Revisiones sin límite en el diseño',
      en: 'Unlimited design revisions',
      eu: 'Diseinuan berrikuspen mugagabeak',
    },
    sub: {
      es: 'Hasta que estés 100% contento con tu web.',
      en: "Until you're 100% happy with your site.",
      eu: 'Zure webarekin % 100 pozik egon arte.',
    },
  },
  {
    title: { es: 'Entrega rápida', en: 'Fast delivery', eu: 'Entrega azkarra' },
    sub: {
      es: 'Plazos cortos, sin esperas eternas.',
      en: 'Short timelines, no endless waits.',
      eu: 'Epe laburrak, amaigabeko itxaronaldirik gabe.',
    },
  },
  {
    title: { es: 'Sin permanencias', en: 'No lock-ins', eu: 'Iraunkortasunik gabe' },
    sub: {
      es: 'Ni letra pequeña. Cero sorpresas.',
      en: 'No fine print. Zero surprises.',
      eu: 'Letra txikirik ez. Ezustekorik ez.',
    },
  },
  {
    title: { es: 'Dedicación total', en: 'Full dedication', eu: 'Erabateko dedikazioa' },
    sub: {
      es: 'Trato directo y foco en tu proyecto.',
      en: 'Direct contact, focused on your project.',
      eu: 'Harreman zuzena eta zure proiektuan jarritako arreta.',
    },
  },
];

/** Proceso. */
export const PROCESO_INTRO = {
  label: { es: '(PROCESO / 03)', en: '(PROCESS / 03)', eu: '(PROZESUA / 03)' },
  h2: { es: 'CÓMO TRABAJAMOS', en: 'HOW WE WORK', eu: 'NOLA EGITEN DUGUN LAN' },
};

export const steps: { num: string; title: Bi; desc: Bi }[] = [
  {
    num: '01',
    title: { es: 'Descubrimiento', en: 'Discovery', eu: 'Deskubritzea' },
    desc: {
      es: 'Entendemos tu negocio, tu público y tus objetivos.',
      en: 'We understand your business, audience and goals.',
      eu: 'Zure negozioa, zure publikoa eta zure helburuak ulertzen ditugu.',
    },
  },
  {
    num: '02',
    title: { es: 'Diseño', en: 'Design', eu: 'Diseinua' },
    desc: {
      es: 'Damos forma a la identidad y a cada pantalla, contigo.',
      en: 'We shape the identity and every screen, with you.',
      eu: 'Identitateari eta pantaila bakoitzari forma ematen diegu, zurekin.',
    },
  },
  {
    num: '03',
    title: { es: 'Desarrollo', en: 'Development', eu: 'Garapena' },
    desc: {
      es: 'Construimos una web rápida, segura y lista para crecer.',
      en: 'We build a fast, secure site ready to grow.',
      eu: 'Web azkar, seguru eta hazteko prest dagoen bat eraikitzen dugu.',
    },
  },
  {
    num: '04',
    title: { es: 'Lanzamiento', en: 'Launch', eu: 'Abiaraztea' },
    desc: {
      es: 'Publicamos, medimos y te acompañamos después.',
      en: 'We publish, measure and support you after.',
      eu: 'Argitaratu, neurtu eta ondoren ere zure ondoan jarraitzen dugu.',
    },
  },
];

/** Tarifas. */
export const TARIFAS_INTRO = {
  label: { es: '(TARIFAS / 05)', en: '(PRICING / 05)', eu: '(TARIFAK / 05)' },
  h2: { es: 'TARIFAS PLANAS', en: 'FLAT-RATE PLANS', eu: 'TARIFA LAUAK' },
  para: {
    es: 'Una cuota fija al mes. Hosting, SSL y mantenimiento — todo dentro. Sin facturas raras.',
    en: 'One fixed fee a month. Hosting, SSL and maintenance — all in. No weird invoices.',
    eu: 'Hileroko kuota finko bat. Hostinga, SSLa eta mantentze-lanak — dena barne. Faktura arrarorik gabe.',
  },
  from: { es: 'DESDE', en: 'FROM', eu: 'HEMENDIK AURRERA' },
  perMonth: { es: '/mes', en: '/mo', eu: '/hil' },
  altaLabel: { es: '+ alta única', en: '+ one-time setup', eu: '+ hasierako kuota' },
  noAlta: { es: 'Sin cuota de alta', en: 'No setup fee', eu: 'Hasierako kuotarik gabe' },
  changesLabel: { es: 'CAMBIOS INCLUIDOS', en: 'INCLUDED CHANGES', eu: 'ALDAKETAK BARNE' },
  cta: { es: 'EMPEZAR →', en: 'GET STARTED →', eu: 'HASI →' },
  swipe: {
    es: 'DESLIZA PARA VER LOS PLANES →',
    en: 'SWIPE TO SEE THE PLANS →',
    eu: 'LERRATU PLANAK IKUSTEKO →',
  },
  footnote: {
    es: '* Precios sin IVA. Dominio sujeto a disponibilidad y precio, pago único aparte. Cada plan incluye una alta única de puesta en marcha (ver cada tarjeta). En Tienda online y Premium, gestionar tu catálogo desde tu propio panel no cuenta como cambio; las comisiones de la pasarela de pago las cobra directamente tu proveedor de pago. Sin permanencia — cancela cuando quieras.',
    en: "* Prices exclude VAT. Domain subject to availability and price, one-time payment. Each plan includes a one-time setup fee (see each card). On Online store and Premium, managing your catalogue from your own panel doesn't count as a change; payment gateway fees are charged directly by your payment provider. No lock-in — cancel whenever you want.",
    eu: '* Prezioak BEZ gabe. Domeinua erabilgarritasunaren eta prezioaren mende, ordainketa bakarra aparte. Plan bakoitzak abian jartzeko hasierako kuota bakar bat barne hartzen du (ikus txartel bakoitza). Online denda eta Premium planetan, zure katalogoa zure panelatik kudeatzea ez da aldaketatzat hartzen; ordainketa-pasabidearen komisioak zure ordainketa-hornitzaileak kobratzen ditu zuzenean. Iraunkortasunik gabe — utzi bertan behera nahi duzunean.',
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
    name: { es: 'Esencial', en: 'Essential', eu: 'Funtsezkoa' },
    tag: null,
    price: '29',
    alta: '49',
    line: {
      es: 'Tu presencia online, lista y sin preocupaciones.',
      en: 'Your online presence, sorted and worry-free.',
      eu: 'Zure online presentzia, prest eta kezkarik gabe.',
    },
    items: [
      { es: 'Web de hasta 5 páginas', en: 'Website up to 5 pages', eu: '5 orrialde arteko weba' },
      { es: 'Hosting + SSL incluidos', en: 'Hosting + SSL included', eu: 'Hostinga + SSLa barne' },
      { es: 'Dominio gestionado*', en: 'Managed domain*', eu: 'Domeinu kudeatua*' },
      {
        es: 'Mantenimiento y actualizaciones',
        en: 'Maintenance & updates',
        eu: 'Mantentze-lanak eta eguneratzeak',
      },
      { es: 'Soporte por email', en: 'Email support', eu: 'Laguntza emailez' },
    ],
    changes: {
      es: 'Hasta 2 cambios de contenido/mes',
      en: 'Up to 2 content changes/mo',
      eu: 'Hilean 2 eduki-aldaketa arte',
    },
  },
  {
    slug: 'profesional',
    name: { es: 'Profesional', en: 'Professional', eu: 'Profesionala' },
    tag: { es: 'POPULAR', en: 'POPULAR', eu: 'POPULARRA' },
    price: '59',
    alta: '79',
    line: {
      es: 'Para negocios que quieren crecer en serio.',
      en: 'For businesses that want to grow for real.',
      eu: 'Benetan hazi nahi duten negozioentzat.',
    },
    items: [
      { es: 'Todo lo de Esencial', en: 'Everything in Essential', eu: 'Funtsezkoaren guztia' },
      { es: 'Hasta 15 páginas', en: 'Up to 15 pages', eu: '15 orrialde arte' },
      { es: 'Blog y formularios', en: 'Blog and forms', eu: 'Bloga eta inprimakiak' },
      {
        es: 'SEO y velocidad optimizados',
        en: 'SEO & speed optimized',
        eu: 'SEOa eta abiadura optimizatuak',
      },
      { es: 'Soporte prioritario', en: 'Priority support', eu: 'Lehentasunezko laguntza' },
    ],
    changes: {
      es: 'Hasta 5 cambios de contenido/mes',
      en: 'Up to 5 content changes/mo',
      eu: 'Hilean 5 eduki-aldaketa arte',
    },
  },
  {
    slug: 'tienda-online',
    name: { es: 'Tienda online', en: 'Online store', eu: 'Online denda' },
    tag: null,
    price: '99',
    alta: '129',
    line: {
      es: 'Vende online con login, carrito y pagos.',
      en: 'Sell online with login, cart and payments.',
      eu: 'Saldu online saioa hasteko aukerarekin, saskiarekin eta ordainketekin.',
    },
    items: [
      {
        es: 'Todo lo de Profesional',
        en: 'Everything in Professional',
        eu: 'Profesionalaren guztia',
      },
      {
        es: 'Carrito y pasarela de pago',
        en: 'Cart & payment gateway',
        eu: 'Saskia eta ordainketa-pasabidea',
      },
      {
        es: 'Login y área de clientes',
        en: 'Login & customer area',
        eu: 'Saioa hastea eta bezeroen gunea',
      },
      {
        es: 'Gestión de productos y stock',
        en: 'Product & stock management',
        eu: 'Produktuen eta stockaren kudeaketa',
      },
      { es: 'Integraciones a medida', en: 'Custom integrations', eu: 'Neurrirako integrazioak' },
    ],
    changes: {
      es: 'Hasta 5 cambios de contenido/diseño al mes*',
      en: 'Up to 5 content/design changes a month*',
      eu: 'Hilean 5 eduki/diseinu aldaketa arte*',
    },
  },
  {
    slug: 'premium',
    name: { es: 'Premium', en: 'Premium', eu: 'Premium' },
    tag: { es: 'SIN ALTA', en: 'NO SETUP FEE', eu: 'HASIERAKO KUOTARIK EZ' },
    price: '199',
    alta: null,
    line: {
      es: 'Para negocios que se han quedado pequeños en Tienda online.',
      en: 'For businesses that have outgrown Online store.',
      eu: 'Online denda planean txiki geratu diren negozioentzat.',
    },
    items: [
      {
        es: 'Todo lo de Tienda online',
        en: 'Everything in Online store',
        eu: 'Online dendaren guztia',
      },
      {
        es: 'Catálogo de productos sin límite',
        en: 'Unlimited product catalogue',
        eu: 'Produktu-katalogo mugagabea',
      },
      {
        es: 'Integraciones avanzadas (marketplaces, CRM, email marketing)',
        en: 'Advanced integrations (marketplaces, CRM, email marketing)',
        eu: 'Integrazio aurreratuak (marketplaceak, CRM, email marketinga)',
      },
      {
        es: 'Informe mensual de rendimiento',
        en: 'Monthly performance report',
        eu: 'Hileroko errendimendu-txostena',
      },
      {
        es: 'Soporte prioritario por WhatsApp/teléfono',
        en: 'Priority WhatsApp/phone support',
        eu: 'Lehentasunezko laguntza WhatsAppez/telefonoz',
      },
      {
        es: 'Llamada mensual de seguimiento',
        en: 'Monthly check-in call',
        eu: 'Hileroko jarraipen-deia',
      },
    ],
    changes: {
      es: 'Hasta 12 cambios de contenido/diseño al mes',
      en: 'Up to 12 content/design changes a month',
      eu: 'Hilean 12 eduki/diseinu aldaketa arte',
    },
  },
];

/** FAQ. */
export const FAQ_INTRO = {
  label: { es: '(FAQ / 06)', en: '(FAQ / 06)', eu: '(FAQ / 06)' },
  h2: { es: 'PREGUNTAS\nFRECUENTES', en: 'FREQUENTLY\nASKED', eu: 'OHIKO\nGALDERAK' },
  para: {
    es: 'Lo que casi todo el mundo nos pregunta antes de empezar. ¿Te queda otra duda? Escríbenos.',
    en: 'What almost everyone asks before starting. Still have a question? Just write to us.',
    eu: 'Ia guztiek hasi aurretik galdetzen digutena. Beste zalantzarik duzu? Idatzi iezaguzu.',
  },
};

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: {
      es: '¿Cuánto tarda un proyecto?',
      en: 'How long does a project take?',
      eu: 'Zenbat denbora behar du proiektu batek?',
    },
    a: {
      es: 'Una landing puede estar lista en pocos días; una web a medida o una tienda, entre 2 y 4 semanas según el alcance. Fijamos plazos claros antes de empezar.',
      en: 'A landing page can be ready in a few days; a custom site or store, 2 to 4 weeks depending on scope. We agree on clear timelines before starting.',
      eu: 'Landing bat egun gutxitan egon daiteke prest; neurrirako web bat edo denda bat, 2 eta 4 aste artean irismenaren arabera. Epe argiak finkatzen ditugu hasi aurretik.',
    },
  },
  {
    q: {
      es: '¿Qué incluye la cuota mensual?',
      en: "What's included in the monthly fee?",
      eu: 'Zer sartzen da hileroko kuotan?',
    },
    a: {
      es: 'Hosting, certificado SSL, dominio gestionado, mantenimiento y actualizaciones. Una sola cuota fija, sin facturas sorpresa.',
      en: 'Hosting, SSL certificate, managed domain, maintenance and updates. One fixed fee, no surprise invoices.',
      eu: 'Hostinga, SSL ziurtagiria, domeinu kudeatua, mantentze-lanak eta eguneratzeak. Kuota finko bakarra, ezusteko fakturarik gabe.',
    },
  },
  {
    q: {
      es: '¿Hay algún coste además de la cuota mensual?',
      en: 'Is there any cost besides the monthly fee?',
      eu: 'Hileroko kuotaz gain, beste kosturik badago?',
    },
    a: {
      es: 'Solo una alta única al empezar (entre 49€ y 129€ según el plan; gratis en Premium) que cubre la puesta en marcha. Aparte de eso, únicamente el dominio es un pago aparte si lo compramos por ti. Sin sorpresas después.',
      en: "Just a one-time setup fee when you start (between €49 and €129 depending on the plan; free on Premium) that covers getting everything up and running. Beyond that, only the domain is a separate payment if we buy it for you. No surprises after that.",
      eu: 'Hasieran hasierako kuota bakar bat besterik ez (49 € eta 129 € artean planaren arabera; doan Premium planean), abian jartzea estaltzen duena. Horretaz aparte, domeinua bakarrik da aparteko ordainketa, guk zure izenean erosten badugu. Ondoren ezustekorik ez.',
    },
  },
  {
    q: { es: '¿Hay permanencia?', en: 'Is there a lock-in?', eu: 'Iraunkortasunik badago?' },
    a: {
      es: 'Ninguna. Sin permanencias ni letra pequeña: puedes cancelar cuando quieras.',
      en: 'None. No lock-ins, no fine print: you can cancel whenever you want.',
      eu: 'Bat ere ez. Iraunkortasunik eta letra txikirik gabe: nahi duzunean utz dezakezu.',
    },
  },
  {
    q: {
      es: '¿Tengo que preocuparme del dominio o la parte técnica?',
      en: 'Do I have to worry about the domain or the technical side?',
      eu: 'Domeinuaz edo alde teknikoaz arduratu behar dut?',
    },
    a: {
      es: 'No, de eso nos encargamos nosotros. Compramos el dominio por ti —es un pago único aparte de la cuota, ya que su precio depende del nombre que elijas— y desarrollamos y mantenemos toda la web en casa. Mientras sigas con tu tarifa plana, tu web está siempre online, actualizada y a punto — y si algún día decides no continuar, la damos de baja sin complicaciones.',
      en: 'No, we take care of all that. We buy the domain for you —a one-time purchase separate from your monthly fee, since its price depends on the name you choose— and we build and maintain the whole site in-house. As long as you keep your flat-rate plan, your website stays online, updated and in shape — and if one day you decide not to continue, we take it down with no hassle.',
      eu: 'Ez, horretaz guk arduratzen gara. Domeinua zure izenean erosten dugu —kuotatik aparteko ordainketa bakarra da, bere prezioa aukeratzen duzun izenaren araberakoa baita— eta web osoa etxean garatu eta mantentzen dugu. Zure tarifa lauarekin jarraitzen duzun bitartean, zure weba beti online, eguneratuta eta prest dago — eta egunen batean jarraitu nahi ez baduzu, konplikaziorik gabe kentzen dugu.',
    },
  },
  {
    q: {
      es: '¿Hacéis cambios después del lanzamiento?',
      en: 'Do you make changes after launch?',
      eu: 'Aldaketarik egiten duzue abiarazi ondoren?',
    },
    a: {
      es: 'Sí. Cada plan incluye un número de cambios de contenido al mes (2 en Esencial, 5 en Profesional y Tienda online, 12 en Premium), y seguimos contigo para que la web crezca con tu negocio.',
      en: 'Yes. Each plan includes a number of monthly content changes (2 on Essential, 5 on Professional and Online store, 12 on Premium), and we stay with you so the site grows with your business.',
      eu: 'Bai. Plan bakoitzak hilean eduki-aldaketa kopuru bat barne hartzen du (2 Funtsezkoan, 5 Profesionalean eta Online dendan, 12 Premiumean), eta zurekin jarraitzen dugu weba zure negozioarekin batera hazteko.',
    },
  },
  {
    q: {
      es: '¿Y si ya tengo web o marca?',
      en: 'What if I already have a site or brand?',
      eu: 'Eta jada weba edo marka badut?',
    },
    a: {
      es: 'Perfecto. Partimos de lo que ya tienes: rediseñamos, migramos o ampliamos sin empezar de cero salvo que tú quieras.',
      en: "Great. We build on what you already have: redesign, migrate or extend — no starting from scratch unless you want to.",
      eu: 'Ezin hobeto. Dagoeneko duzunetik abiatzen gara: berdiseinatu, migratu edo zabaldu egiten dugu, hutsetik hasi gabe, zuk hala nahi ezean.',
    },
  },
  /* Las dos siguientes responden búsquedas locales reales ("cuánto cuesta una
     página web en Irún", "diseñador web cerca de mí") y alimentan el JSON-LD
     FAQPage, que es lo que Google puede desplegar bajo el resultado. */
  {
    q: {
      es: '¿Cuánto cuesta una página web en Irún o San Sebastián?',
      en: 'How much does a website cost in Irún or San Sebastián?',
      eu: 'Zenbat balio du web orri batek Irunen edo Donostian?',
    },
    a: {
      es: 'Con nosotros no pagas 1.500 € de golpe: trabajamos con tarifa plana desde 29 €/mes más un alta única desde 49 €, y ahí dentro va el diseño, el alojamiento, el SSL y el mantenimiento. Una web de comercio o restaurante suele encajar en el plan Esencial o Profesional; una tienda online, en el de 99 €/mes.',
      en: "You don't pay €1,500 upfront: we work on a flat rate from €29/mo plus a one-time setup from €49, and that covers design, hosting, SSL and maintenance. A shop or restaurant site usually fits the Essential or Professional plan; an online store, the €99/mo one.",
      eu: 'Gurekin ez duzu 1.500 € kolpetik ordaintzen: tarifa lauarekin egiten dugu lan, 29 €/hilabetetik aurrera eta 49 €-tik aurrerako hasierako kuota bakar batekin, eta hor barruan doaz diseinua, ostatatzea, SSLa eta mantentze-lanak. Denda edo jatetxe baten webak Funtsezko edo Profesional planean egiten du bat normalean; online denda batek, 99 €/hilabetekoan.',
    },
  },
  {
    q: {
      es: '¿Trabajáis solo con negocios de Irún?',
      en: 'Do you only work with businesses from Irún?',
      eu: 'Irungo negozioekin bakarrik egiten duzue lan?',
    },
    a: {
      es: 'No. Somos de Irún y de ahí viene buena parte de nuestros clientes, pero trabajamos en remoto: con toda Gipuzkoa —Donostia-San Sebastián, Hondarribia, Errenteria, Oiartzun, Pasaia, Lezo, Hernani— y con cualquier punto de España. Todo se lleva por videollamada, email y WhatsApp, sin que tengas que desplazarte a ningún sitio.',
      en: 'No. We are from Irún and a good share of our clients are from here, but we work remotely: across Gipuzkoa —Donostia-San Sebastián, Hondarribia, Errenteria, Oiartzun, Pasaia, Lezo, Hernani— and anywhere in Spain. Everything runs over video call, email and WhatsApp, with no need for you to travel anywhere.',
      eu: 'Ez. Irungoak gara eta gure bezeroen zati handi bat hemengoa da, baina urrunetik egiten dugu lan: Gipuzkoa osoarekin —Donostia, Hondarribia, Errenteria, Oiartzun, Pasaia, Lezo, Hernani— eta Espainiako edozein tokitarekin. Dena bideo-deiz, emailez eta WhatsAppez eramaten da, inora joan beharrik gabe.',
    },
  },
];

/** Formulario "Empezar proyecto" (/empezar). */
export const EMPEZAR = {
  /* El title no reutiliza el H2 de la página ("CUÉNTANOS DE TU PROYECTO"): en
     los resultados de Google se leería como un grito y no contiene ninguna
     palabra que alguien busque. Ésta es la página de conversión — el title y la
     descripción se escriben para quien está pidiendo presupuesto. */
  seo: {
    title: {
      es: 'Pide presupuesto para tu web | arianet, Irún',
      en: 'Get a quote for your website | arianet',
      eu: 'Eskatu aurrekontua zure webarentzat | arianet, Irun',
    },
    description: {
      es: 'Cuéntanos qué necesitas y te enviamos presupuesto en menos de 24 horas, sin compromiso. Páginas web y tiendas online en Irún, San Sebastián y Gipuzkoa.',
      en: 'Tell us what you need and we will send you a quote within 24 hours, no strings attached. Websites and online stores, built remotely from the Basque Country.',
      eu: 'Kontatu iezaguzu zer behar duzun eta 24 ordu baino gutxiagoan bidaliko dizugu aurrekontua, konpromisorik gabe. Web orriak eta online dendak Irunen, Donostian eta Gipuzkoan.',
    },
  },
  label: { es: '(EMPEZAR PROYECTO)', en: '(START A PROJECT)', eu: '(PROIEKTUA HASI)' },
  h2: {
    es: 'CUÉNTANOS DE TU PROYECTO',
    en: 'TELL US ABOUT YOUR PROJECT',
    eu: 'KONTATU IEZAGUZU ZURE PROIEKTUA',
  },
  para: {
    es: 'Unas pocas preguntas para entender qué necesitas. Sin ningún compromiso: te respondemos en menos de 24 horas.',
    en: 'A few questions so we understand what you need. No commitment at all: we reply within 24 hours.',
    eu: 'Galdera gutxi batzuk zer behar duzun ulertzeko. Inolako konpromisorik gabe: 24 ordu baino gutxiagoan erantzuten dizugu.',
  },
  back: { es: '← Volver al inicio', en: '← Back to home', eu: '← Hasierara itzuli' },

  step1: {
    num: '01',
    title: { es: 'Tus datos', en: 'Your details', eu: 'Zure datuak' },
    name: { es: 'Nombre', en: 'Name', eu: 'Izena' },
    email: { es: 'Email', en: 'Email', eu: 'Emaila' },
    phone: { es: 'Teléfono (opcional)', en: 'Phone (optional)', eu: 'Telefonoa (aukerakoa)' },
  },
  step2: {
    num: '02',
    title: { es: 'Tu negocio', en: 'Your business', eu: 'Zure negozioa' },
    business: {
      es: '¿Cómo se llama tu negocio?',
      en: "What's your business called?",
      eu: 'Nola du izena zure negozioak?',
    },
    about: {
      es: '¿A qué te dedicas? Cuéntanoslo con tus palabras.',
      en: 'What do you do? Tell us in your own words.',
      eu: 'Zertan zabiltza? Kontatu iezaguzu zure hitzekin.',
    },
    hasSite: {
      es: '¿Ya tienes una web?',
      en: 'Do you already have a website?',
      eu: 'Jada baduzu weba?',
    },
    hasSiteYes: { es: 'Sí', en: 'Yes', eu: 'Bai' },
    hasSiteNo: { es: 'No', en: 'No', eu: 'Ez' },
    currentUrl: {
      es: 'URL de tu web actual (opcional)',
      en: 'Your current website URL (optional)',
      eu: 'Zure oraingo webaren URLa (aukerakoa)',
    },
  },
  step3: {
    num: '03',
    title: { es: 'Qué necesitas', en: 'What you need', eu: 'Zer behar duzun' },
    hint: {
      es: 'Elige el plan que más se ajuste. Si no lo tienes claro, dínoslo y te aconsejamos nosotros.',
      en: "Pick the plan that fits best. If you're not sure, tell us and we'll advise you.",
      eu: 'Aukeratu ondoen egokitzen den plana. Argi ez baduzu, esaguzu eta guk aholkatuko dizugu.',
    },
    unsure: {
      es: 'No lo tengo claro, aconsejadme',
      en: "I'm not sure, advise me",
      eu: 'Ez daukat argi, aholkatu iezadazue',
    },
  },
  stepStyle: {
    num: '04',
    title: {
      es: 'Qué estilo te gusta',
      en: 'What style do you like',
      eu: 'Zein estilo gustatzen zaizun',
    },
    hint: {
      es: 'Son 3 proyectos reales nuestros, cada uno con una personalidad distinta. Elige el que más se acerque a lo que imaginas para ti.',
      en: 'These are 3 real projects of ours, each with a different personality. Pick the one closest to what you imagine for yourself.',
      eu: 'Gure 3 benetako proiektu dira, bakoitza nortasun desberdinarekin. Aukeratu zeuretzat irudikatzen duzunetik gertuen dagoena.',
    },
    unsure: {
      es: 'No tengo preferencia, aconsejadme',
      en: 'No preference, advise me',
      eu: 'Ez dut lehentasunik, aholkatu iezadazue',
    },
  },
  styles: [
    {
      slug: 'elegante',
      label: { es: 'Elegante y premium', en: 'Elegant and premium', eu: 'Dotorea eta premium' },
      image: '/work/supermercado-jonathan.jpg',
    },
    {
      slug: 'atrevido',
      label: {
        es: 'Atrevido y con carácter',
        en: 'Bold and full of character',
        eu: 'Ausarta eta izaeraduna',
      },
      image: '/work/king-of-spain.jpg',
    },
    {
      slug: 'minimalista',
      label: { es: 'Limpio y minimalista', en: 'Clean and minimal', eu: 'Garbia eta minimalista' },
      image: '/work/mejores-purificadores.jpg',
    },
  ],
  step4: {
    num: '05',
    title: { es: 'Algo más', en: 'Anything else', eu: 'Beste zerbait' },
    notes: {
      es: '¿Algo más que debamos saber? Referencias, plazos, lo que sea.',
      en: 'Anything else we should know? References, timelines, anything at all.',
      eu: 'Beste zerbait jakin behar dugu? Erreferentziak, epeak, edozer.',
    },
  },
  submit: { es: 'ENVIAR →', en: 'SEND →', eu: 'BIDALI →' },
  sending: { es: 'ENVIANDO…', en: 'SENDING…', eu: 'BIDALTZEN…' },
  required: { es: '* Campo obligatorio', en: '* Required field', eu: '* Nahitaezko eremua' },

  /** Aviso de error si falla el envío (API caída, sin red, etc.). */
  error: {
    es: 'No hemos podido enviar tu solicitud. Comprueba tu conexión e inténtalo de nuevo, o escríbenos directamente.',
    en: "We couldn't send your request. Check your connection and try again, or email us directly.",
    eu: 'Ezin izan dugu zure eskaera bidali. Egiaztatu zure konexioa eta saiatu berriro, edo idatzi iezaguzu zuzenean.',
  },
  errorCta: { es: 'ESCRIBIR UN EMAIL →', en: 'SEND AN EMAIL →', eu: 'EMAIL BAT IDATZI →' },

  /** Panel final tras enviar (rama con plan elegido). */
  donePlan: {
    title: {
      es: '¡Gracias! Pedido recibido.',
      en: 'Thanks! Order received.',
      eu: 'Eskerrik asko! Eskaera jasota.',
    },
    body: {
      es: 'Hemos recibido tu pedido — en breve te llegará un email de confirmación. Te escribiremos en menos de 24 horas para poner en marcha tu web y acordar la forma de pago. No pagas nada por adelantado.',
      en: "We've received your order — a confirmation email is on its way. We'll write to you within 24 hours to get your website started and arrange payment. You don't pay anything upfront.",
      eu: 'Zure eskaera jaso dugu — laster helduko zaizu berrespen-email bat. 24 ordu baino gutxiagoan idatziko dizugu zure weba abian jartzeko eta ordaintzeko modua adosteko. Ez duzu ezer aurretik ordaintzen.',
    },
  },

  /** Panel final tras enviar (rama "no lo tengo claro"). */
  doneUnsure: {
    title: { es: '¡Gracias!', en: 'Thanks!', eu: 'Eskerrik asko!' },
    body: {
      es: 'Hemos recibido tu pedido y en breve te llegará un email de confirmación. Te responderemos en menos de 24 horas con el plan que mejor encaja contigo, antes de pedirte nada de pago.',
      en: "We've received your order and a confirmation email is on its way. We'll get back to you within 24 hours with the plan that fits best, before asking for any payment.",
      eu: 'Zure eskaera jaso dugu eta laster helduko zaizu berrespen-email bat. 24 ordu baino gutxiagoan erantzungo dizugu zuri ondoen egokitzen zaizun planarekin, ordainketarik eskatu aurretik.',
    },
  },
};

/** CTA final. */
export const CTA = {
  label: { es: '(CONTACTO / 08)', en: '(CONTACT / 08)', eu: '(KONTAKTUA / 08)' },
  h2: { es: '¿HABLAMOS?', en: "LET'S TALK?", eu: 'HITZ EGINGO DUGU?' },
  para: {
    es: 'Cuéntanos dónde estás y a dónde quieres llegar. Te respondemos en menos de 24 horas.',
    en: 'Tell us where you are and where you want to go. We reply within 24 hours.',
    eu: 'Kontatu iezaguzu non zauden eta nora iritsi nahi duzun. 24 ordu baino gutxiagoan erantzuten dizugu.',
  },
  ctaStart: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →', eu: 'PROIEKTUA HASI →' },
};

/**
 * Landings locales (/diseno-web-irun, /diseno-web-san-sebastian,
 * /paginas-web-gipuzkoa).
 *
 * Cada una responde a una búsqueda distinta y tiene texto PROPIO: si fueran la
 * misma página con la ciudad cambiada, Google las trata como doorway pages y
 * las descarta (o penaliza). De ahí que cada bloque hable de cosas diferentes —
 * cercanía en Irún, precio y turismo en Donostia, cobertura en Gipuzkoa.
 */
export type LocalPage = {
  slug: string;
  /** Nombre del municipio/zona tal cual va al `areaServed` del JSON-LD. */
  area: string;
  seo: { title: string; description: string };
  h1: { line1: Bi; line2: Bi };
  intro: Bi;
  blocks: { num: string; title: Bi; body: Bi }[];
  nearbyLabel: Bi;
  nearby: string[];
  faqs: { q: Bi; a: Bi }[];
};

export const localPages: LocalPage[] = [
  {
    slug: 'diseno-web-irun',
    area: 'Irún',
    /* Ojo con la canibalización: la home ya ataca "diseño web Irún". Esta
       landing apunta a la otra consulta grande de la zona —"páginas web Irún" y
       "cuánto cuesta una web en Irún"— con ángulo de precio y comercio local.
       Si las dos llevaran el mismo H1 competirían entre sí y Google elegiría
       una, normalmente la que no te interesa. */
    seo: {
      title: 'Páginas web para negocios de Irún | Desde 29 €/mes',
      description:
        'Creamos páginas web y tiendas online para comercios, hostelería y pymes de Irún. Estudio local en el Bidasoa, tarifa plana desde 29 €/mes y sin permanencia.',
    },
    h1: {
      line1: { es: 'PÁGINAS WEB', en: 'WEBSITES', eu: 'WEB ORRIAK' },
      line2: { es: 'EN IRÚN', en: 'IN IRÚN', eu: 'IRUNEN' },
    },
    intro: {
      es: 'Somos de Irún y trabajamos en remoto, sin oficina de cara al público. Eso no nos aleja de ti: significa que no pagas metros cuadrados vacíos y que puedes contratar tu web sin salir de tu negocio.',
      en: 'We are from Irún and we work remotely, with no walk-in office. That does not put distance between us: it means you are not paying for empty square metres, and you can commission your website without leaving your business.',
      eu: 'Irungoak gara eta urrunetik egiten dugu lan, jendaurreko bulegorik gabe. Horrek ez gaitu zugandik urruntzen: metro koadro hutsik ordaintzen ez dituzula esan nahi du, eta zure weba zure negoziotik atera gabe kontrata dezakezula.',
    },
    blocks: [
      {
        num: '01',
        title: { es: 'Un estudio de aquí', en: 'A studio from here', eu: 'Hemengo estudio bat' },
        body: {
          es: 'Conocemos Irún: sabemos la diferencia entre un comercio del centro y uno de Anaka, y que en verano el cliente que entra por tu puerta puede venir de Hendaya. Eso cambia cómo se plantea una web — qué idiomas, qué horarios, qué se enseña primero. No hace falta vernos para que eso se note.',
          en: "We know Irún: we know the difference between a shop downtown and one in Anaka, and that in summer the customer walking in may be coming from Hendaye. That changes how you plan a website — which languages, which opening hours, what you show first. We don't need to meet for that to show.",
          eu: 'Irun ezagutzen dugu: badakigu zer alde dagoen erdiguneko denda baten eta Anakako baten artean, eta udan zure atetik sartzen den bezeroa Hendaiatik etor daitekeela. Horrek aldatzen du web bat nola planteatzen den — zein hizkuntza, zein ordutegi, zer erakusten den lehenengo. Ez da beharrezkoa elkar ikustea hori nabaritzeko.',
        },
      },
      {
        num: '02',
        title: {
          es: 'Para el comercio del Bidasoa',
          en: 'For Bidasoa businesses',
          eu: 'Bidasoako merkataritzarentzat',
        },
        body: {
          es: 'Tiendas, bares y restaurantes, talleres, clínicas, autónomos y pymes. Si vendes en local, tu web tiene que llevar gente a la puerta; si vendes online, tiene que cobrar sin fricción. Montamos una cosa o la otra, no un folleto bonito que no hace nada.',
          en: 'Shops, bars and restaurants, workshops, clinics, freelancers and small businesses. If you sell locally, your site has to bring people through the door; if you sell online, it has to take payment without friction. We build one or the other — not a pretty brochure that does nothing.',
          eu: 'Dendak, tabernak eta jatetxeak, tailerrak, klinikak, autonomoak eta ETEak. Bertan saltzen baduzu, zure webak jendea aterantz eraman behar du; online saltzen baduzu, marruskadurarik gabe kobratu behar du. Bata edo bestea muntatzen dugu, ez ezer egiten ez duen liburuxka polit bat.',
        },
      },
      {
        num: '03',
        title: {
          es: 'Que te encuentren los de aquí',
          en: 'So local people find you',
          eu: 'Hemengoek aurki zaitzaten',
        },
        body: {
          es: 'De poco sirve salir en Google en Sevilla si tu cliente está a tres calles. Trabajamos el posicionamiento local: ficha de empresa en Google, datos coherentes, contenido escrito para lo que la gente busca de verdad en Irún.',
          en: "Ranking in Seville is no use if your customer is three streets away. We work on local search: your Google business profile, consistent data, and content written for what people actually search for in Irún.",
          eu: 'Ez du askorako balio Sevillan Googlen ateratzeak zure bezeroa hiru kale harago badago. Tokiko posizionamendua lantzen dugu: Googleko enpresa-fitxa, datu koherenteak, jendeak Irunen benetan bilatzen duenerako idatzitako edukia.',
        },
      },
      {
        num: '04',
        title: { es: 'Una cuota y ya está', en: 'One fee and done', eu: 'Kuota bat eta kito' },
        body: {
          es: 'Nada de 1.500 € de golpe y luego arréglatelas. Una cuota fija desde 29 €/mes con el alojamiento, el certificado, el mantenimiento y los cambios dentro. Si un día no te interesa, te vas: no hay permanencia.',
          en: "No €1,500 upfront and then you're on your own. A fixed fee from €29/mo with hosting, certificate, maintenance and changes included. If one day it stops making sense, you leave: there's no lock-in.",
          eu: '1.500 € kolpetik eta gero moldatu zaitez, hori ez. Kuota finko bat 29 €/hilabetetik aurrera, ostatatzea, ziurtagiria, mantentze-lanak eta aldaketak barne. Egunen batean interesatzen ez bazaizu, joan egiten zara: ez dago iraunkortasunik.',
        },
      },
    ],
    nearbyLabel: {
      es: 'También trabajamos en',
      en: 'We also work in',
      eu: 'Hemen ere egiten dugu lan',
    },
    /* Sin Hendaya: es Francia y declarar cobertura allí sería afirmar algo que
       no está confirmado. Se menciona en el bloque 01 como origen de clientes
       que cruzan, que sí es cierto. */
    nearby: ['Hondarribia', 'Lezo', 'Pasaia', 'Errenteria', 'Oiartzun', 'Behobia'],
    faqs: [
      {
        q: {
          es: '¿Hace falta que nos veamos?',
          en: 'Do we need to meet?',
          eu: 'Beharrezkoa da elkar ikustea?',
        },
        a: {
          es: 'No. Trabajamos en remoto de principio a fin: la primera toma de contacto por videollamada, y el resto por email o WhatsApp. Suele salir más ágil para los dos, porque no hay que cuadrar agendas ni cerrar el negocio media hora para una reunión.',
          en: 'No. We work remotely from start to finish: a first video call, and the rest over email or WhatsApp. It usually turns out quicker for both sides — no diaries to align and no closing your shop for half an hour.',
          eu: 'Ez. Urrunetik egiten dugu lan hasieratik amaierara: lehen harremana bideo-deiz, eta gainerakoa emailez edo WhatsAppez. Normalean biontzat arinagoa ateratzen da, ez baita agendarik koadratu behar ezta negozioa ordu erdiz itxi ere bilera baterako.',
        },
      },
      {
        q: {
          es: '¿Trabajáis con comercios pequeños o solo con empresas grandes?',
          en: 'Do you work with small shops or only with large companies?',
          eu: 'Denda txikiekin egiten duzue lan ala enpresa handiekin bakarrik?',
        },
        a: {
          es: 'Sobre todo con negocios pequeños y autónomos. El plan Esencial (29 €/mes) está pensado exactamente para eso: un comercio o un profesional que necesita una web decente y no puede soltar mil euros de entrada.',
          en: 'Mostly with small businesses and freelancers. The Essential plan (€29/mo) is designed exactly for that: a shop or a professional who needs a decent website and cannot drop a thousand euros upfront.',
          eu: 'Batez ere negozio txiki eta autonomoekin. Funtsezko plana (29 €/hilabetean) horretarako dago pentsatua, hain zuzen: web duin bat behar duen eta mila euro sarreran jarri ezin dituen denda edo profesional batentzat.',
        },
      },
    ],
  },
  {
    slug: 'diseno-web-san-sebastian',
    area: 'Donostia-San Sebastián',
    seo: {
      title: 'Diseño de páginas web en San Sebastián (Donostia)',
      description:
        'Diseño y programación de páginas web para negocios de Donostia-San Sebastián. Estudio en Irún, a 20 minutos. Tarifa plana desde 29 €/mes, sin permanencia.',
    },
    h1: {
      line1: { es: 'DISEÑO WEB', en: 'WEB DESIGN', eu: 'WEB DISEINUA' },
      line2: { es: 'EN DONOSTIA', en: 'IN DONOSTIA', eu: 'DONOSTIAN' },
    },
    intro: {
      es: 'Somos un estudio de Irún que trabaja con negocios de Donostia en remoto. Lo decimos claro desde el principio: no tenemos oficina en la ciudad ni te vamos a cobrar el sobreprecio de tenerla.',
      en: 'We are a studio from Irún working remotely with businesses in Donostia. We say it upfront: we have no office in the city, and we are not charging you the premium of keeping one.',
      eu: 'Irungo estudio bat gara, Donostiako negozioekin urrunetik lan egiten duena. Argi esaten dugu hasieratik: ez dugu bulegorik hirian eta ez dizugu hori edukitzearen gainprezioa kobratuko.',
    },
    blocks: [
      {
        num: '01',
        title: {
          es: 'Sin precios de la Parte Vieja',
          en: 'Without old-town prices',
          eu: 'Parte Zaharreko preziorik gabe',
        },
        body: {
          es: 'Una web de agencia en Donostia empieza en cuatro cifras y sigue con una factura de mantenimiento aparte. Nosotros trabajamos con tarifa plana: desde 29 €/mes con todo dentro. Mismo resultado, sin el sobrecoste de tener oficina en la Avenida.',
          en: 'An agency website in Donostia starts in four figures and then adds a separate maintenance invoice. We work on a flat rate: from €29/mo with everything included. Same outcome, without the overhead of an office on the Avenida.',
          eu: 'Donostian agentzia bateko web bat lau zifratan hasten da eta gero mantentze-faktura bat aparte dator. Guk tarifa lauarekin egiten dugu lan: 29 €/hilabetetik aurrera dena barne. Emaitza bera, Avenidan bulegoa edukitzearen gainkosturik gabe.',
        },
      },
      {
        num: '02',
        title: {
          es: 'Hostelería y comercio',
          en: 'Hospitality and retail',
          eu: 'Ostalaritza eta merkataritza',
        },
        body: {
          es: 'Bares, restaurantes, pensiones, tiendas. En Donostia tu web compite con las plataformas de reservas y con TripAdvisor: si no tienes una página propia rápida, con la carta actualizada y un botón de reserva claro, el cliente acaba reservando en otro sitio y pagando comisión.',
          en: 'Bars, restaurants, guesthouses, shops. In Donostia your website competes with booking platforms and TripAdvisor: without a fast site of your own, an up-to-date menu and a clear booking button, the customer ends up booking elsewhere and paying commission.',
          eu: 'Tabernak, jatetxeak, ostatuak, dendak. Donostian zure webak erreserba-plataformekin eta TripAdvisorrekin lehiatzen du: web propio azkarrik ez baduzu, karta eguneratuta eta erreserba-botoi argi batekin, bezeroak beste nonbait erreserbatzen amaitzen du eta komisioa ordaintzen.',
        },
      },
      {
        num: '03',
        title: {
          es: 'En los idiomas que necesitas',
          en: 'In the languages you need',
          eu: 'Behar dituzun hizkuntzetan',
        },
        body: {
          es: 'Aquí entra gente que busca en castellano, en euskera, en francés y en inglés. Montamos la web multiidioma desde el principio, que es mucho más barato que añadirlo después. El contenido lo escribes tú o lo preparamos juntos.',
          en: 'People here search in Spanish, Basque, French and English. We build the site multilingual from the start, which is far cheaper than bolting it on later. You write the content or we prepare it together.',
          eu: 'Hemen gaztelaniaz, euskaraz, frantsesez eta ingelesez bilatzen duen jendea sartzen da. Weba hizkuntza anitzekoa muntatzen dugu hasieratik, gero gehitzea baino askoz merkeagoa baita. Edukia zuk idazten duzu edo elkarrekin prestatzen dugu.',
        },
      },
      {
        num: '04',
        title: {
          es: 'Que salga en el mapa',
          en: 'So you show on the map',
          eu: 'Mapan ager zaitezen',
        },
        body: {
          es: 'La mitad de las búsquedas de un negocio donostiarra acaban en el mapa de Google, no en la lista de resultados. Dejamos tu ficha, tus datos y tu web coherentes entre sí para que el mapa te tenga en cuenta.',
          en: 'Half the searches for a San Sebastián business end up on the Google map, not in the results list. We keep your profile, your data and your website consistent with each other so the map takes you into account.',
          eu: 'Donostiako negozio baten bilaketen erdiak Googleren mapan amaitzen dute, ez emaitzen zerrendan. Zure fitxa, zure datuak eta zure weba elkarren artean koherente uzten ditugu mapak kontuan har zaitzan.',
        },
      },
    ],
    nearbyLabel: {
      es: 'También trabajamos en',
      en: 'We also work in',
      eu: 'Hemen ere egiten dugu lan',
    },
    nearby: ['Errenteria', 'Pasaia', 'Lasarte-Oria', 'Hernani', 'Usurbil', 'Astigarraga'],
    faqs: [
      {
        q: {
          es: '¿Tenéis oficina en San Sebastián?',
          en: 'Do you have an office in San Sebastián?',
          eu: 'Bulegorik baduzue Donostian?',
        },
        a: {
          es: 'No tenemos oficina en Donostia ni en ningún sitio: somos un estudio de Irún que trabaja en remoto. Preferimos decírtelo antes que fingir una dirección en el centro, como hacen algunos. Todo el proyecto se lleva por videollamada, email y WhatsApp, y eso es parte de por qué la cuota es la que es.',
          en: 'We have no office in Donostia or anywhere else: we are a studio from Irún working remotely. We would rather tell you than fake a city-centre address, as some do. The whole project runs over video call, email and WhatsApp — and that is part of why the fee is what it is.',
          eu: 'Ez dugu bulegorik Donostian ezta beste inon ere: urrunetik lan egiten duen Irungo estudio bat gara. Nahiago dugu hori esan, batzuek egiten duten bezala erdiguneko helbide bat asmatu baino. Proiektu osoa bideo-deiz, emailez eta WhatsAppez eramaten da, eta hori da kuota den bezalakoa izatearen arrazoietako bat.',
        },
      },
      {
        q: {
          es: '¿Hacéis webs en euskera?',
          en: 'Do you build websites in Basque?',
          eu: 'Euskarazko webak egiten dituzue?',
        },
        a: {
          es: 'Sí, montamos la web en tantos idiomas como necesites — euskera, castellano, francés, inglés. La parte técnica la ponemos nosotros; los textos en euskera los aportas tú o los encargamos a un traductor.',
          en: 'Yes, we build the site in as many languages as you need — Basque, Spanish, French, English. We handle the technical side; the Basque copy either comes from you or we commission a translator.',
          eu: 'Bai, weba behar dituzun hizkuntza guztietan muntatzen dugu — euskara, gaztelania, frantsesa, ingelesa. Alde teknikoa guk jartzen dugu; euskarazko testuak zuk ekartzen dituzu edo itzultzaile bati eskatzen dizkiogu.',
        },
      },
    ],
  },
  {
    slug: 'diseno-web-hondarribia',
    area: 'Hondarribia',
    /* Enfoque deliberadamente distinto al de Irún: allí el cliente tipo es el
       comercio de barrio; aquí, hostelería y turismo. Si fueran el mismo texto
       con otro topónimo, Google las trataría como doorway pages. */
    seo: {
      title: 'Diseño de páginas web en Hondarribia | arianet',
      description:
        'Páginas web para restaurantes, hoteles y comercios de Hondarribia. Reservas, carta y multiidioma para el visitante. Estudio en Irún, desde 29 €/mes.',
    },
    h1: {
      line1: { es: 'DISEÑO WEB', en: 'WEB DESIGN', eu: 'WEB DISEINUA' },
      line2: { es: 'HONDARRIBIA', en: 'HONDARRIBIA', eu: 'HONDARRIBIA' },
    },
    intro: {
      es: 'Hondarribia vive del que viene de fuera, y el que viene de fuera te busca en el móvil antes de decidir dónde come o dónde duerme. Si a esa hora tu web no carga o no tiene la carta actualizada, ya has perdido la mesa.',
      en: 'Hondarribia lives off visitors, and visitors look you up on their phone before deciding where to eat or sleep. If at that moment your site is slow or your menu is out of date, the table is already lost.',
      eu: 'Hondarribia kanpotik datorrenetik bizi da, eta kanpotik datorrenak mugikorrean bilatzen zaitu non jan edo non lo egin erabaki aurretik. Ordu horretan zure weba kargatzen ez bada edo karta eguneratuta ez badago, mahaia galduta duzu jada.',
    },
    blocks: [
      {
        num: '01',
        title: {
          es: 'Hostelería que se reserva sola',
          en: 'Hospitality that books itself',
          eu: 'Bere kabuz erreserbatzen den ostalaritza',
        },
        body: {
          es: 'Restaurantes, sidrerías, pensiones y casas rurales. Carta actualizable por ti, botón de reserva visible y fotos que abran el apetito — sin depender de una plataforma que te cobra comisión por cada cliente que ya era tuyo.',
          en: 'Restaurants, cider houses, guesthouses and rural lodgings. A menu you update yourself, a visible booking button and photos that whet the appetite — without depending on a platform charging commission on customers who were already yours.',
          eu: 'Jatetxeak, sagardotegiak, ostatuak eta landetxeak. Zuk egunera dezakezun karta, erreserba-botoi ikusgarria eta gogoa pizten duten argazkiak — jada zurea zen bezero bakoitzeko komisioa kobratzen dizun plataforma baten mende egon gabe.',
        },
      },
      {
        num: '02',
        title: {
          es: 'En el idioma del visitante',
          en: "In the visitor's language",
          eu: 'Bisitariaren hizkuntzan',
        },
        body: {
          es: 'Aquí entra francés de Hendaya, turista de crucero y visitante del interior. Montamos la web en castellano, euskera, francés e inglés desde el principio, que sale mucho más barato que añadirlo cuando ya está hecha.',
          en: 'Here you get French visitors from Hendaye, cruise tourists and travellers from inland. We build the site in Spanish, Basque, French and English from the start — far cheaper than bolting it on afterwards.',
          eu: 'Hemen Hendaiako frantsesa, gurutzaldiko turista eta barnealdeko bisitaria sartzen dira. Weba gaztelaniaz, euskaraz, frantsesez eta ingelesez muntatzen dugu hasieratik, eginda dagoenean gehitzea baino askoz merkeagoa baita.',
        },
      },
      {
        num: '03',
        title: {
          es: 'Que te encuentren en el mapa',
          en: 'So they find you on the map',
          eu: 'Mapan aurki zaitzaten',
        },
        body: {
          es: 'Casi nadie busca tu nombre: buscan "dónde comer en Hondarribia" con el móvil en la mano y a doscientos metros de tu puerta. Trabajamos tu ficha de Google y tu web para que aparezcas en ese momento exacto.',
          en: 'Almost nobody searches your name: they search "where to eat in Hondarribia" with their phone in hand, two hundred metres from your door. We work on your Google profile and your site so you show up at that exact moment.',
          eu: 'Ia inork ez du zure izena bilatzen: "non jan Hondarribian" bilatzen dute mugikorra eskuan eta zure atetik berrehun metrora. Zure Googleko fitxa eta zure weba lantzen ditugu une horretan bertan ager zaitezen.',
        },
      },
      {
        num: '04',
        title: {
          es: 'Una cuota, no una inversión',
          en: 'A fee, not an investment',
          eu: 'Kuota bat, ez inbertsio bat',
        },
        body: {
          es: 'Un negocio con temporada alta y baja no debería soltar mil euros de golpe por una web. Desde 29 €/mes con alojamiento, certificado y mantenimiento dentro, y sin permanencia si un invierno decides parar.',
          en: 'A business with high and low seasons should not drop a thousand euros at once on a website. From €29/mo with hosting, certificate and maintenance included, and no lock-in if one winter you decide to stop.',
          eu: 'Denboraldi altua eta baxua dituen negozio batek ez luke mila euro kolpetik bota behar web batengatik. 29 €/hilabetetik aurrera ostatatzea, ziurtagiria eta mantentze-lanak barne, eta iraunkortasunik gabe neguren batean gelditzea erabakitzen baduzu.',
        },
      },
    ],
    nearbyLabel: {
      es: 'También trabajamos en',
      en: 'We also work in',
      eu: 'Hemen ere egiten dugu lan',
    },
    nearby: ['Irún', 'Lezo', 'Pasaia', 'Errenteria', 'Oiartzun', 'Donostia'],
    faqs: [
      {
        q: {
          es: '¿Podéis poner la carta del restaurante para que la cambie yo?',
          en: 'Can you set up the menu so I can change it myself?',
          eu: 'Jatetxeko karta jar dezakezue nik neuk aldatzeko?',
        },
        a: {
          es: 'Sí, y es de lo primero que montamos. Cambias platos y precios desde el móvil sin escribirnos ni esperar a nadie — algo esencial cuando la carta se mueve con la temporada o con lo que haya en la lonja.',
          en: 'Yes, and it is one of the first things we set up. You change dishes and prices from your phone without writing to us or waiting for anyone — essential when the menu shifts with the season or with the day’s catch.',
          eu: 'Bai, eta muntatzen dugun lehenetakoa da. Platerak eta prezioak mugikorretik aldatzen dituzu guri idatzi gabe eta inori itxaron gabe — funtsezkoa karta denboraldiaren edo arrandegian dagoenaren arabera mugitzen denean.',
        },
      },
      {
        q: {
          es: '¿Merece la pena una web si ya salgo en las plataformas de reservas?',
          en: 'Is a website worth it if I am already on the booking platforms?',
          eu: 'Merezi du webak erreserba-plataformetan jada agertzen banaiz?',
        },
        a: {
          es: 'Precisamente por eso. En esas plataformas compites en una lista con todos tus vecinos y pagas comisión por cada reserva. Con web propia, quien te busca por tu nombre reserva directamente contigo y esa comisión te la quedas tú.',
          en: 'That is exactly why. On those platforms you compete in a list against all your neighbours and pay commission on every booking. With your own site, whoever searches your name books directly with you and that commission stays with you.',
          eu: 'Horrexegatik hain zuzen. Plataforma horietan zerrenda batean lehiatzen zara zure auzokide guztiekin eta erreserba bakoitzeko komisioa ordaintzen duzu. Web propioarekin, zure izenagatik bilatzen zaituenak zuzenean zurekin erreserbatzen du eta komisio hori zuretzat gelditzen da.',
        },
      },
    ],
  },
  {
    slug: 'paginas-web-gipuzkoa',
    area: 'Gipuzkoa',
    seo: {
      title: 'Páginas web en Gipuzkoa | Diseño y programación',
      description:
        'Diseño y programación de páginas web y tiendas online en Gipuzkoa. De Irún a Eibar, con tarifa plana desde 29 €/mes y sin permanencia. Estudio en Irún.',
    },
    h1: {
      line1: { es: 'PÁGINAS WEB', en: 'WEBSITES', eu: 'WEB ORRIAK' },
      line2: { es: 'EN GIPUZKOA', en: 'IN GIPUZKOA', eu: 'GIPUZKOAN' },
    },
    intro: {
      es: 'Diseñamos y programamos páginas web para negocios de toda Gipuzkoa. Somos de Irún y trabajamos en remoto, así que estés en Tolosa, en Eibar o en Zarautz, el proceso es exactamente el mismo.',
      en: 'We design and build websites for businesses across Gipuzkoa. We are from Irún and we work remotely, so whether you are in Tolosa, Eibar or Zarautz, the process is exactly the same.',
      eu: 'Gipuzkoa osoko negozioentzat diseinatzen eta programatzen ditugu web orriak. Irungoak gara eta urrunetik egiten dugu lan, beraz Tolosan, Eibarren edo Zarautzen egon, prozesua zehazki bera da.',
    },
    blocks: [
      {
        num: '01',
        title: { es: 'De Irún a Eibar', en: 'From Irún to Eibar', eu: 'Irundik Eibarrera' },
        body: {
          es: 'Trabajamos con negocios de la costa, del Bidasoa, de Donostialdea, del Goierri y del Alto Deba. Al ser todo en remoto, da igual que estés en Irún o en Eibar: el trato es el mismo y no hay desplazamientos que cuadrar.',
          en: 'We work with businesses on the coast, in the Bidasoa, Donostialdea, Goierri and Alto Deba. Since everything is remote, it makes no difference whether you are in Irún or Eibar: same service, and no travel to schedule.',
          eu: 'Kostaldeko, Bidasoako, Donostialdeko, Goierriko eta Debagoieneko negozioekin egiten dugu lan. Dena urrunetik denez, berdin dio Irunen edo Eibarren zauden: tratua bera da eta ez dago joan-etorririk koadratzeko.',
        },
      },
      {
        num: '02',
        title: {
          es: 'Industria, comercio y servicios',
          en: 'Industry, retail and services',
          eu: 'Industria, merkataritza eta zerbitzuak',
        },
        body: {
          es: 'En Gipuzkoa hay mucho taller, mucha empresa industrial y mucho proveedor que factura fuera y sigue con una web de hace quince años. Ese perfil es el que más gana con un rediseño: no necesitas vender online, necesitas que quien te busque por el nombre no piense que has cerrado.',
          en: 'Gipuzkoa is full of workshops, industrial firms and suppliers who invoice abroad and still run a fifteen-year-old website. That profile gains the most from a redesign: you do not need to sell online, you need whoever searches your name not to assume you have shut down.',
          eu: 'Gipuzkoan tailer asko, enpresa industrial asko eta kanpora fakturatzen duen hornitzaile asko dago, oraindik duela hamabost urteko webarekin. Profil horrek irabazten du gehien berdiseinu batekin: ez duzu online saldu behar, izenagatik bilatzen zaituenak itxi duzula pentsa ez dezan behar duzu.',
        },
      },
      {
        num: '03',
        title: { es: 'Todo desde aquí', en: 'All from here', eu: 'Dena hemendik' },
        body: {
          es: 'Diseño, programación, alojamiento y mantenimiento los llevamos nosotros, sin subcontratar. Tu web se aloja en servidores propios en Europa, no en una plantilla alquilada que se rompe cuando el proveedor cambia de opinión.',
          en: 'Design, development, hosting and maintenance are all ours, nothing subcontracted. Your site runs on our own servers in Europe, not on a rented template that breaks when the provider changes its mind.',
          eu: 'Diseinua, programazioa, ostatatzea eta mantentze-lanak guk eramaten ditugu, azpikontratatu gabe. Zure weba Europako gure zerbitzari propioetan ostatatzen da, ez hornitzaileak iritzia aldatzean apurtzen den alokatutako txantiloi batean.',
        },
      },
      {
        num: '04',
        title: { es: 'Precio cerrado', en: 'A closed price', eu: 'Prezio itxia' },
        body: {
          es: 'Desde 29 €/mes más un alta única desde 49 €. Tienda online completa, 99 €/mes. Todo con alojamiento, SSL, mantenimiento y un número de cambios al mes incluidos. Sin permanencia y sin letra pequeña.',
          en: 'From €29/mo plus a one-time setup from €49. A full online store, €99/mo. All with hosting, SSL, maintenance and a number of monthly changes included. No lock-in and no fine print.',
          eu: '29 €/hilabetetik aurrera gehi 49 €-tik aurrerako hasierako kuota bakarra. Online denda osoa, 99 €/hilabetean. Dena ostatatzearekin, SSLarekin, mantentze-lanekin eta hileko aldaketa kopuru batekin barne. Iraunkortasunik eta letra txikirik gabe.',
        },
      },
    ],
    nearbyLabel: {
      es: 'Algunos municipios donde trabajamos',
      en: 'Some of the towns we work in',
      eu: 'Lan egiten dugun udalerri batzuk',
    },
    nearby: [
      'Irún',
      'Donostia-San Sebastián',
      'Errenteria',
      'Hondarribia',
      'Hernani',
      'Tolosa',
      'Zarautz',
      'Eibar',
      'Arrasate',
      'Beasain',
    ],
    faqs: [
      {
        q: {
          es: '¿Trabajáis en remoto o hay que veros?',
          en: 'Do you work remotely, or do we have to meet?',
          eu: 'Urrunetik egiten duzue lan ala elkar ikusi behar dugu?',
        },
        a: {
          es: 'Todo en remoto, de principio a fin. Arrancamos con una videollamada para entender tu negocio y a partir de ahí vamos por email o WhatsApp, enseñándote avances reales. No hay que cuadrar visitas ni cerrar el negocio para atendernos.',
          en: 'Everything remotely, start to finish. We open with a video call to understand your business and carry on over email or WhatsApp, showing you real progress. No visits to schedule and no closing your shop to receive us.',
          eu: 'Dena urrunetik, hasieratik amaierara. Bideo-dei batekin hasten gara zure negozioa ulertzeko eta hortik aurrera emailez edo WhatsAppez jarraitzen dugu, benetako aurrerapenak erakutsiz. Ez dago bisitarik koadratu beharrik ezta negozioa itxi beharrik gu hartzeko.',
        },
      },
      {
        q: {
          es: '¿Y si mi negocio está fuera de Gipuzkoa?',
          en: 'What if my business is outside Gipuzkoa?',
          eu: 'Eta nire negozioa Gipuzkoatik kanpo badago?',
        },
        a: {
          es: 'Ningún problema: trabajamos con toda España exactamente igual. Como todo es en remoto, que estés en Gipuzkoa o en Málaga no cambia el precio, el proceso ni el resultado.',
          en: 'No problem at all: we work with the whole of Spain in exactly the same way. Since everything is remote, being in Gipuzkoa or in Málaga changes neither the price, the process nor the result.',
          eu: 'Inolako arazorik ez: Espainia osoarekin zehazki modu berean egiten dugu lan. Dena urrunetik denez, Gipuzkoan edo Malagan egoteak ez du prezioa, prozesua ezta emaitza ere aldatzen.',
        },
      },
    ],
  },
];

/** Textos de interfaz compartidos por las landings locales. */
export const LOCAL_PAGE = {
  back: { es: '← Volver al inicio', en: '← Back to home', eu: '← Hasierara itzuli' },
  servicesTitle: { es: 'Qué hacemos', en: 'What we do', eu: 'Zer egiten dugun' },
  faqTitle: { es: 'Preguntas frecuentes', en: 'Frequently asked', eu: 'Ohiko galderak' },
  pricingTitle: { es: 'Cuánto cuesta', en: 'What it costs', eu: 'Zenbat balio duen' },
  pricingCta: {
    es: 'VER TODAS LAS TARIFAS →',
    en: 'SEE ALL PLANS →',
    eu: 'TARIFA GUZTIAK IKUSI →',
  },
  footerPricing: { es: 'Tarifas', en: 'Pricing', eu: 'Tarifak' },
  footerStart: { es: 'Empezar proyecto', en: 'Start a project', eu: 'Proiektua hasi' },
  cta: { es: 'EMPEZAR PROYECTO →', en: 'START A PROJECT →', eu: 'PROIEKTUA HASI →' },
  ctaNote: {
    es: 'Cuéntanos qué necesitas. Te respondemos en menos de 24 horas, sin compromiso.',
    en: 'Tell us what you need. We reply within 24 hours, no strings attached.',
    eu: 'Kontatu iezaguzu zer behar duzun. 24 ordu baino gutxiagoan erantzuten dizugu, konpromisorik gabe.',
  },
};

/** Página 404. */
export const NOT_FOUND = {
  eyebrow: { es: '(ERROR 404)', en: '(ERROR 404)', eu: '(404 ERROREA)' },
  title: { es: 'Página no encontrada', en: 'Page not found', eu: 'Ez da orria aurkitu' },
  message: {
    es: 'La página que buscas no existe o se ha movido de sitio.',
    en: "The page you're looking for doesn't exist or has moved.",
    eu: 'Bilatzen ari zaren orria ez da existitzen edo lekuz aldatu da.',
  },
  cta: { es: 'VOLVER AL INICIO →', en: 'BACK TO HOME →', eu: 'HASIERARA ITZULI →' },
};

/** Footer. */
export const FOOTER = {
  studioCol: {
    heading: { es: 'ESTUDIO', en: 'STUDIO', eu: 'ESTUDIOA' },
    links: [
      { href: '#servicios', label: { es: 'Servicios', en: 'Services', eu: 'Zerbitzuak' } },
      { href: '#proyectos', label: { es: 'Qué incluye', en: 'What you get', eu: 'Zer sartzen den' } },
      { href: '#proceso', label: { es: 'Proceso', en: 'Process', eu: 'Prozesua' } },
      { href: '#trabajo', label: { es: 'Trabajo', en: 'Work', eu: 'Lana' } },
      { href: '#tarifas', label: { es: 'Tarifas', en: 'Pricing', eu: 'Tarifak' } },
      { href: '#faq', label: { es: 'FAQ', en: 'FAQ', eu: 'FAQ' } },
    ],
  },
  contactCol: {
    heading: { es: 'CONTACTO', en: 'CONTACT', eu: 'KONTAKTUA' },
    note: { es: 'Respondemos en <24h', en: 'We reply within 24h', eu: 'Erantzuna <24h-tan' },
  },
  /* Columna de zona: repite el NAP en todas las páginas (señal local constante)
     y reparte enlaces internos hacia las landings de ciudad desde cualquier
     punto del sitio, no sólo desde la home. */
  areaCol: {
    heading: { es: 'ZONA', en: 'AREA', eu: 'EREMUA' },
    links: [
      {
        href: '/diseno-web-irun/',
        label: {
          es: 'Diseño web en Irún',
          en: 'Web design in Irún',
          eu: 'Web diseinua Irunen',
        },
      },
      {
        href: '/diseno-web-san-sebastian/',
        label: {
          es: 'Diseño web en San Sebastián',
          en: 'Web design in San Sebastián',
          eu: 'Web diseinua Donostian',
        },
      },
      {
        href: '/diseno-web-hondarribia/',
        label: {
          es: 'Diseño web en Hondarribia',
          en: 'Web design in Hondarribia',
          eu: 'Web diseinua Hondarribian',
        },
      },
      {
        href: '/paginas-web-gipuzkoa/',
        label: {
          es: 'Páginas web en Gipuzkoa',
          en: 'Websites in Gipuzkoa',
          eu: 'Web orriak Gipuzkoan',
        },
      },
    ],
  },
  /* Aquí va el SLUG canónico, no la ruta: los documentos legales existen en
     todos los idiomas y cada uno tiene su propia URL, así que la ruta la
     construye el componente con `legalPath()`. */
  legalCol: {
    heading: { es: 'LEGAL', en: 'LEGAL', eu: 'LEGEZKOA' },
    links: [
      { slug: 'aviso-legal', label: { es: 'Aviso legal', en: 'Legal notice', eu: 'Lege oharra' } },
      { slug: 'privacidad', label: { es: 'Privacidad', en: 'Privacy', eu: 'Pribatutasuna' } },
      { slug: 'cookies', label: { es: 'Cookies', en: 'Cookies', eu: 'Cookieak' } },
      { slug: 'terminos', label: { es: 'Términos', en: 'Terms', eu: 'Baldintzak' } },
    ],
  },
  copyright: {
    es: `© ${YEAR} ${BRAND} ESTUDIO`,
    en: `© ${YEAR} ${BRAND} STUDIO`,
    eu: `© ${YEAR} ${BRAND} ESTUDIOA`,
  },
  /* Ciudad y provincia, sin la calle: al no haber oficina de cara al público,
     publicar el portal no aporta nada al cliente y expone un domicilio. La
     señal local que Google necesita es el municipio, y ése sí se mantiene.
     El domicilio completo sigue en el aviso legal, donde la LSSI lo exige. */
  location: {
    es: `${BUSINESS.city} · ${BUSINESS.region} · España`,
    en: `${BUSINESS.city} · ${BUSINESS.region} · Spain`,
    eu: `${BUSINESS.city} · ${BUSINESS.region} · Espainia`,
  },
};

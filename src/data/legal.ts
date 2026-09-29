/**
 * Contenido legal del sitio (bilingüe ES/EN) + datos del banner de cookies.
 *
 * Estas plantillas cubren los documentos habituales de una web en España
 * (LSSI-CE + RGPD/LOPDGDD); conviene que un asesor legal las revise.
 *
 * Cada documento se renderiza desde `src/pages/[legal].astro` (y su equivalente
 * por idioma) con el layout `Legal.astro`. El texto traducible usa el mismo
 * patrón { es, en } que el resto del sitio, por lo que los párrafos deben ser
 * TEXTO PLANO, sin etiquetas HTML internas.
 *
 * La versión en castellano es la vinculante: las traducciones son de cortesía y
 * el layout lo advierte al pie en cualquier idioma que no sea el castellano.
 */
import type { Bi } from './copy.ts';
import { BRAND, CONTACT } from './copy.ts';

/** Datos identificativos del titular. */
export const LEGAL = {
  marca: BRAND,
  titular: 'Arianet WebStudio SL',
  nif: { es: 'B93796357', en: 'B93796357', eu: 'B93796357' },
  domicilio: 'C/ María Juncal Labandibar n.º 9, 1.º derecha, 20305 Irún (Guipúzcoa), España',
  email: CONTACT.email,
  web: 'arianet.eu',
  updated: {
    es: 'Última actualización: julio de 2026',
    en: 'Last updated: July 2026',
    eu: 'Azken eguneratzea: 2026ko uztaila',
  },
  back: { es: '← Volver al inicio', en: '← Back to home', eu: '← Hasierara itzuli' },
  index: { es: 'Documentos legales', en: 'Legal documents', eu: 'Legezko dokumentuak' },
  /* Se muestra sólo fuera del castellano: la traducción ayuda a entender el
     documento, pero el texto con valor legal es el original. */
  translationNote: {
    es: '',
    en: 'Courtesy translation. Only the Spanish version is legally binding.',
    eu: 'Kortesiazko itzulpena. Gaztelaniazko bertsioak baino ez du balio legalik.',
  },
};

/** Banner de consentimiento de cookies. */
export const COOKIES = {
  title: { es: 'Usamos cookies', en: 'We use cookies', eu: 'Cookieak erabiltzen ditugu' },
  text: {
    es: 'Solo utilizamos cookies técnicas propias, necesarias para el funcionamiento del sitio y para recordar tus preferencias (como el idioma). No usamos cookies de seguimiento; medimos visitas con analítica propia sin cookies y sin compartir datos con terceros. Puedes leer más en nuestra política de cookies.',
    en: 'We only use our own technical cookies, needed for the site to work and to remember your preferences (such as language). We don’t use tracking cookies; we measure visits with our own cookieless analytics and share no data with third parties. You can read more in our cookie policy.',
    eu: 'Geure cookie teknikoak baino ez ditugu erabiltzen, gunea funtzionatzeko eta zure hobespenak (hizkuntza, esaterako) gogoratzeko beharrezkoak direnak. Ez dugu jarraipen-cookierik erabiltzen; bisitak geure analitikarekin neurtzen ditugu, cookierik gabe eta hirugarrenekin daturik partekatu gabe. Gehiago irakur dezakezu gure cookie-politikan.',
  },
  accept: { es: 'Aceptar', en: 'Accept', eu: 'Onartu' },
  reject: { es: 'Rechazar', en: 'Reject', eu: 'Ezetsi' },
  more: { es: 'Política de cookies', en: 'Cookie policy', eu: 'Cookie-politika' },
};

/**
 * Bloque de una sección: un párrafo (la cadena suelta), un párrafo con
 * entradilla en negrita (`lead`) o una lista de viñetas (`list`).
 */
export type LegalBlock = Bi | { lead: Bi; text: Bi } | { list: Bi[] };
/** `annex` separa la sección del articulado con una línea, como anexo. */
export type LegalSection = { heading: Bi; paragraphs: LegalBlock[]; annex?: boolean };
export type LegalDoc = {
  slug: string;
  nav: Bi;
  title: Bi;
  intro: Bi;
  /** Fecha propia del documento; si falta, se muestra `LEGAL.updated`. */
  updated?: Bi;
  sections: LegalSection[];
};

/** Los 4 documentos legales. El orden define el menú lateral entre páginas. */
export const legalDocs: LegalDoc[] = [
  {
    slug: 'aviso-legal',
    nav: { es: 'Aviso legal', en: 'Legal notice', eu: 'Lege oharra' },
    title: { es: 'Aviso legal', en: 'Legal notice', eu: 'Lege oharra' },
    intro: {
      es: 'Condiciones que regulan el acceso y uso de este sitio web, en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).',
      en: 'Terms governing access to and use of this website, in compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE).',
      eu: 'Web gune honetarako sarbidea eta erabilera arautzen dituzten baldintzak, Informazioaren Gizartearen eta Merkataritza Elektronikoaren Zerbitzuei buruzko 34/2002 Legea (LSSI-CE) betez.',
    },
    sections: [
      {
        heading: {
          es: '1. Datos identificativos',
          en: '1. Identifying details',
          eu: '1. Identifikazio-datuak',
        },
        paragraphs: [
          {
            es: `En cumplimiento de la normativa vigente, se informa de que este sitio web es titularidad de ${LEGAL.titular}, con NIF ${LEGAL.nif.es} y domicilio en ${LEGAL.domicilio}.`,
            en: `In accordance with applicable law, this website is owned by ${LEGAL.titular}, tax ID ${LEGAL.nif.en}, with registered address at ${LEGAL.domicilio}.`,
            eu: `Indarrean dagoen araudia betez, jakinarazten da web gune honen titularra ${LEGAL.titular} dela, ${LEGAL.nif.es} IFZ duena eta ${LEGAL.domicilio} helbidean egoitza duena.`,
          },
          {
            es: `Correo electrónico de contacto: ${LEGAL.email}. En adelante, "${BRAND}" o "el titular".`,
            en: `Contact email: ${LEGAL.email}. Hereinafter, "${BRAND}" or "the owner".`,
            eu: `Harremanetarako helbide elektronikoa: ${LEGAL.email}. Aurrerantzean, "${BRAND}" edo "titularra".`,
          },
        ],
      },
      {
        heading: {
          es: '2. Objeto y condiciones de uso',
          en: '2. Purpose and terms of use',
          eu: '2. Xedea eta erabilera-baldintzak',
        },
        paragraphs: [
          {
            es: 'El acceso a este sitio atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o que dañen los derechos e intereses de terceros.',
            en: 'Accessing this site grants the condition of user and implies acceptance of these terms. The user agrees to make appropriate use of the content and not to use it for unlawful activities or in ways that harm the rights and interests of third parties.',
            eu: 'Gune honetara sartzeak erabiltzaile-izaera ematen du eta baldintza hauek onartzea dakar. Erabiltzaileak edukien erabilera egokia egiteko konpromisoa hartzen du, eta ez ditu erabiliko jarduera ez-zilegietarako edo hirugarrenen eskubide eta interesak kaltetzen dituzten moduetan.',
          },
        ],
      },
      {
        heading: {
          es: '3. Propiedad intelectual e industrial',
          en: '3. Intellectual and industrial property',
          eu: '3. Jabetza intelektuala eta industriala',
        },
        paragraphs: [
          {
            es: `Todos los contenidos del sitio (textos, diseño, código, logotipos e imágenes) son propiedad del titular o de terceros que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa de ${BRAND}.`,
            en: `All content on the site (text, design, code, logos and images) is owned by the owner or by third parties who have authorised its use, and is protected by intellectual and industrial property rights. Its reproduction, distribution or transformation without the express authorisation of ${BRAND} is prohibited.`,
            eu: `Guneko eduki guztiak (testuak, diseinua, kodea, logotipoak eta irudiak) titularrarenak dira edo horien erabilera baimendu duten hirugarrenenak, eta jabetza intelektualaren eta industrialaren eskubideek babestuta daude. Debekatuta dago horiek erreproduzitzea, banatzea edo eraldatzea ${BRAND} markaren berariazko baimenik gabe.`,
          },
        ],
      },
      {
        heading: { es: '4. Responsabilidad', en: '4. Liability', eu: '4. Erantzukizuna' },
        paragraphs: [
          {
            es: 'El titular no se hace responsable de los daños derivados del mal uso del sitio ni de las interrupciones, errores u omisiones que pudieran existir. Se reserva el derecho a modificar o suspender el sitio y sus contenidos sin previo aviso.',
            en: 'The owner is not liable for damages arising from misuse of the site, nor for any interruptions, errors or omissions that may exist. It reserves the right to modify or suspend the site and its content without prior notice.',
            eu: 'Titularra ez da gunearen erabilera okerretik eratorritako kalteen erantzule, ezta egon litezkeen etenaldi, akats edo hutsuneena ere. Gunea eta bere edukiak aldatzeko edo eteteko eskubidea gordetzen du, aldez aurretik jakinarazi gabe.',
          },
        ],
      },
      {
        heading: { es: '5. Enlaces', en: '5. Links', eu: '5. Estekak' },
        paragraphs: [
          {
            es: 'Este sitio puede contener enlaces a páginas de terceros. El titular no asume responsabilidad alguna sobre los contenidos o servicios de dichos sitios.',
            en: 'This site may contain links to third-party pages. The owner assumes no responsibility for the content or services of such sites.',
            eu: 'Gune honek hirugarrenen orrietarako estekak izan ditzake. Titularrak ez du inolako erantzukizunik hartzen gune horien eduki edo zerbitzuen gainean.',
          },
        ],
      },
      {
        heading: {
          es: '6. Legislación aplicable',
          en: '6. Applicable law',
          eu: '6. Aplikatu beharreko legeria',
        },
        paragraphs: [
          {
            es: 'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la ley disponga otra cosa.',
            en: 'These terms are governed by Spanish law. For the resolution of any dispute, the parties submit to the courts of the owner’s domicile, unless the law provides otherwise.',
            eu: 'Baldintza hauek Espainiako legeriak arautzen ditu. Edozein auzi ebazteko, alderdiak titularraren egoitzako epaitegi eta auzitegien mende jartzen dira, legeak bestelakorik xedatzen ez badu.',
          },
        ],
      },
    ],
  },
  {
    slug: 'privacidad',
    nav: { es: 'Privacidad', en: 'Privacy', eu: 'Pribatutasuna' },
    title: { es: 'Política de privacidad', en: 'Privacy policy', eu: 'Pribatutasun-politika' },
    intro: {
      es: 'Información sobre el tratamiento de tus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
      en: 'Information on the processing of your personal data under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
      eu: 'Zure datu pertsonalen tratamenduari buruzko informazioa, 2016/679 (EB) Erregelamenduaren (DBEO) eta 3/2018 Lege Organikoaren (DBLO) arabera.',
    },
    sections: [
      {
        heading: {
          es: '1. Responsable del tratamiento',
          en: '1. Data controller',
          eu: '1. Tratamenduaren arduraduna',
        },
        paragraphs: [
          {
            es: `El responsable del tratamiento de tus datos es ${LEGAL.titular}, con NIF ${LEGAL.nif.es}, domicilio en ${LEGAL.domicilio} y correo de contacto ${LEGAL.email}.`,
            en: `The controller of your data is ${LEGAL.titular}, tax ID ${LEGAL.nif.en}, address ${LEGAL.domicilio}, contact email ${LEGAL.email}.`,
            eu: `Zure datuen tratamenduaren arduraduna ${LEGAL.titular} da, ${LEGAL.nif.es} IFZ duena, ${LEGAL.domicilio} helbidean eta ${LEGAL.email} harremanetarako helbide elektronikoarekin.`,
          },
        ],
      },
      {
        heading: {
          es: '2. Datos que tratamos y finalidad',
          en: '2. Data we process and purpose',
          eu: '2. Tratatzen ditugun datuak eta helburua',
        },
        paragraphs: [
          {
            es: 'Tratamos los datos que nos facilitas voluntariamente a través del formulario "Empezar proyecto" o al contactarnos por correo electrónico (nombre, email, teléfono si lo indicas, datos de tu negocio y la información que incluyas en tu mensaje), con la finalidad de atender tu solicitud, elaborar una propuesta y, en su caso, prestarte nuestros servicios. Los envíos del formulario se almacenan en nuestros propios sistemas y generan un correo de confirmación automático.',
            en: 'We process the data you voluntarily provide through the "Start a project" form or when contacting us by email (name, email, phone if given, details about your business and any information you include in your message), in order to handle your request, prepare a proposal and, where applicable, provide our services. Form submissions are stored on our own systems and trigger an automatic confirmation email.',
            eu: '"Proiektua hasi" inprimakiaren bidez edo posta elektronikoz harremanetan jartzean borondatez ematen dizkiguzun datuak tratatzen ditugu (izena, emaila, telefonoa adierazten baduzu, zure negozioaren datuak eta zure mezuan sartzen duzun informazioa), zure eskaerari erantzuteko, proposamen bat prestatzeko eta, hala badagokio, gure zerbitzuak emateko. Inprimakiaren bidalketak gure sistemetan gordetzen dira eta berrespen-mezu automatiko bat sortzen dute.',
          },
        ],
      },
      {
        heading: { es: '3. Legitimación', en: '3. Legal basis', eu: '3. Legitimazioa' },
        paragraphs: [
          {
            es: 'La base legal es tu consentimiento al contactarnos y, cuando proceda, la ejecución de un contrato de servicios o el interés legítimo en responder a tus solicitudes.',
            en: 'The legal basis is your consent when contacting us and, where applicable, the performance of a service contract or the legitimate interest in responding to your requests.',
            eu: 'Oinarri legala harremanetan jartzean ematen duzun baimena da eta, hala badagokio, zerbitzu-kontratu baten betearazpena edo zure eskaerei erantzuteko interes legitimoa.',
          },
        ],
      },
      {
        heading: {
          es: '4. Conservación de los datos',
          en: '4. Data retention',
          eu: '4. Datuak gordetzea',
        },
        paragraphs: [
          {
            es: 'Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, si llegamos a trabajar juntos, durante la relación contractual y los plazos legales aplicables. Después se suprimen de forma segura.',
            en: 'We keep your data for as long as necessary to handle your request and, if we end up working together, for the duration of the contractual relationship and the applicable legal periods. They are then securely deleted.',
            eu: 'Zure datuak zure eskaerari erantzuteko beharrezkoa den denboran gordetzen ditugu eta, elkarrekin lan egitera iristen bagara, harreman kontraktualak dirauen bitartean eta aplikatu beharreko legezko epeetan. Ondoren, modu seguruan ezabatzen dira.',
          },
        ],
      },
      {
        heading: { es: '5. Destinatarios', en: '5. Recipients', eu: '5. Hartzaileak' },
        paragraphs: [
          {
            es: 'No cedemos tus datos a terceros, salvo obligación legal. Podemos utilizar proveedores de servicios (alojamiento, correo) que actúan como encargados del tratamiento con las debidas garantías.',
            en: 'We do not share your data with third parties except where legally required. We may use service providers (hosting, email) acting as data processors with the appropriate safeguards.',
            eu: 'Ez ditugu zure datuak hirugarrenei lagatzen, legezko betebeharra izan ezean. Zerbitzu-hornitzaileak erabil ditzakegu (ostatatzea, posta), tratamenduaren eragile gisa jarduten dutenak behar diren bermeekin.',
          },
        ],
      },
      {
        heading: { es: '6. Tus derechos', en: '6. Your rights', eu: '6. Zure eskubideak' },
        paragraphs: [
          {
            es: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${LEGAL.email}. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
            en: `You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${LEGAL.email}. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
            eu: `Sarbide, zuzenketa, ezabatze, aurkakotasun, mugatze eta eramangarritasun eskubideak balia ditzakezu ${LEGAL.email} helbidera idatziz. Halaber, Datuak Babesteko Espainiako Agentziaren aurrean erreklamazioa aurkezteko eskubidea duzu (www.aepd.es).`,
          },
        ],
      },
      {
        heading: { es: '7. Seguridad', en: '7. Security', eu: '7. Segurtasuna' },
        paragraphs: [
          {
            es: 'Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.',
            en: 'We apply appropriate technical and organisational measures to protect your data against unauthorised access, loss or alteration.',
            eu: 'Neurri tekniko eta antolakuntzazko egokiak aplikatzen ditugu zure datuak baimenik gabeko sarbide, galera edo aldaketen aurrean babesteko.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    nav: { es: 'Cookies', en: 'Cookies', eu: 'Cookieak' },
    title: { es: 'Política de cookies', en: 'Cookie policy', eu: 'Cookie-politika' },
    intro: {
      es: 'Información sobre el uso de cookies en este sitio, conforme al artículo 22.2 de la LSSI-CE.',
      en: 'Information on the use of cookies on this site, in accordance with article 22.2 of the LSSI-CE.',
      eu: 'Gune honetan cookieen erabilerari buruzko informazioa, LSSI-CEren 22.2 artikuluaren arabera.',
    },
    sections: [
      {
        heading: {
          es: '1. ¿Qué son las cookies?',
          en: '1. What are cookies?',
          eu: '1. Zer dira cookieak?',
        },
        paragraphs: [
          {
            es: 'Las cookies son pequeños archivos que se descargan en tu dispositivo al visitar una web y permiten su funcionamiento, así como recopilar información sobre la navegación.',
            en: 'Cookies are small files downloaded to your device when you visit a website. They allow the site to work and can collect information about your browsing.',
            eu: 'Cookieak web bat bisitatzean zure gailuan deskargatzen diren fitxategi txikiak dira eta haren funtzionamendua ahalbidetzen dute, baita nabigazioari buruzko informazioa biltzea ere.',
          },
        ],
      },
      {
        heading: {
          es: '2. Cookies que utilizamos',
          en: '2. Cookies we use',
          eu: '2. Erabiltzen ditugun cookieak',
        },
        paragraphs: [
          {
            es: 'Cookies técnicas necesarias: imprescindibles para el funcionamiento del sitio y para recordar tus preferencias (como el idioma o tu decisión sobre cookies). No requieren consentimiento.',
            en: 'Necessary technical cookies: essential for the site to work and to remember your preferences (such as language or your cookie choice). They do not require consent.',
            eu: 'Beharrezko cookie teknikoak: ezinbestekoak gunearen funtzionamendurako eta zure hobespenak gogoratzeko (hizkuntza edo cookieei buruzko zure erabakia, esaterako). Ez dute baimenik behar.',
          },
          {
            es: 'No utilizamos cookies de terceros ni de seguimiento. Para medir las visitas usamos Umami, una herramienta de analítica autoalojada en nuestros propios servidores que no usa cookies, no identifica a los visitantes y no comparte datos con terceros. El resto de recursos del sitio, incluidas las fuentes tipográficas, también se sirven desde nuestros propios dominios.',
            en: 'We do not use third-party or tracking cookies. To measure visits we use Umami, an analytics tool self-hosted on our own servers that sets no cookies, does not identify visitors and shares no data with third parties. All other site resources, including the typefaces, are also served from our own domains.',
            eu: 'Ez dugu hirugarrenen cookierik ezta jarraipenekorik ere erabiltzen. Bisitak neurtzeko Umami erabiltzen dugu, gure zerbitzari propioetan auto-ostatatutako analitika-tresna bat, cookierik erabiltzen ez duena, bisitariak identifikatzen ez dituena eta hirugarrenekin daturik partekatzen ez duena. Guneko gainerako baliabideak, letra-tipoak barne, gure domeinu propioetatik ere zerbitzatzen dira.',
          },
        ],
      },
      {
        heading: {
          es: '3. Gestión de cookies',
          en: '3. Managing cookies',
          eu: '3. Cookieen kudeaketa',
        },
        paragraphs: [
          {
            es: 'Puedes aceptar o rechazar las cookies no necesarias desde el aviso que aparece al entrar. Además, puedes configurar o eliminar las cookies desde los ajustes de tu navegador en cualquier momento.',
            en: 'You can accept or reject non-essential cookies from the banner shown on entry. You can also configure or delete cookies from your browser settings at any time.',
            eu: 'Sartzean agertzen den oharretik onar edo ezets ditzakezu beharrezkoak ez diren cookieak. Gainera, zure nabigatzailearen ezarpenetatik konfigura edo ezaba ditzakezu cookieak edonoiz.',
          },
        ],
      },
      {
        heading: { es: '4. Consentimiento', en: '4. Consent', eu: '4. Baimena' },
        paragraphs: [
          {
            es: 'Al aceptar, consientes el uso de las cookies descritas. Puedes cambiar tu decisión en cualquier momento borrando las cookies del sitio en tu navegador.',
            en: 'By accepting, you consent to the use of the cookies described. You can change your decision at any time by clearing the site’s cookies in your browser.',
            eu: 'Onartzean, deskribatutako cookieen erabilera baimentzen duzu. Zure erabakia edonoiz alda dezakezu zure nabigatzailean guneko cookieak ezabatuz.',
          },
        ],
      },
    ],
  },
  {
    slug: 'terminos',
    nav: { es: 'Términos', en: 'Terms', eu: 'Baldintzak' },
    title: {
      es: 'Términos y condiciones del servicio',
      en: 'Terms and conditions of service',
      eu: 'Zerbitzuaren baldintza orokorrak',
    },
    intro: {
      es: 'Condiciones generales que regulan la contratación de los servicios de diseño y desarrollo web ofrecidos por el titular.',
      en: 'General terms governing the contracting of the web design and development services offered by the owner.',
      eu: 'Titularrak eskaintzen dituen web diseinu eta garapen zerbitzuen kontratazioa arautzen duten baldintza orokorrak.',
    },
    updated: {
      es: 'Última actualización: 29 de septiembre de 2026',
      en: 'Last updated: 29 September 2026',
      eu: 'Azken eguneratzea: 2026ko irailaren 29a',
    },
    sections: [
      {
        heading: {
          es: '1. Titular y objeto',
          en: '1. Owner and purpose',
          eu: '1. Titularra eta xedea',
        },
        paragraphs: [
          {
            es: `Estas condiciones regulan los servicios que presta ${LEGAL.titular}, con NIF ${LEGAL.nif.es} y domicilio en ${LEGAL.domicilio} (en adelante, «${BRAND}»), a través de ${LEGAL.web}.`,
            en: `These terms govern the services provided by ${LEGAL.titular}, tax ID ${LEGAL.nif.en}, with registered address at ${LEGAL.domicilio} (hereinafter, “${BRAND}”), through ${LEGAL.web}.`,
            eu: `Baldintza hauek ${LEGAL.titular} sozietateak ${LEGAL.web} webgunearen bidez ematen dituen zerbitzuak arautzen dituzte; sozietateak ${LEGAL.nif.eu} IFZ du eta egoitza ${LEGAL.domicilio} helbidean (aurrerantzean, «${BRAND}»).`,
          },
          {
            es: `${BRAND} ofrece servicios de branding, diseño y desarrollo de páginas web, tiendas online, aplicaciones y mantenimiento, bajo una cuota fija mensual (tarifa plana) según el plan contratado. Los servicios están dirigidos a empresas y profesionales.`,
            en: `${BRAND} provides branding, design and development of websites, online stores and applications, and maintenance services, for a fixed monthly fee (flat rate) according to the plan contracted. The services are intended for businesses and professionals.`,
            eu: `${BRAND}ek branding, web orrien, online denden eta aplikazioen diseinu eta garapen, eta mantentze-lan zerbitzuak eskaintzen ditu, hileroko kuota finko baten truke (tarifa laua), kontratatutako planaren arabera. Zerbitzuak enpresei eta profesionalei zuzenduta daude.`,
          },
        ],
      },
      {
        heading: {
          es: '2. Condiciones particulares',
          en: '2. Specific terms',
          eu: '2. Baldintza partikularrak',
        },
        paragraphs: [
          {
            es: 'Cada proyecto puede contar con una propuesta o condiciones particulares aceptadas por escrito por el cliente (plan, cuota, alcance, fases u otros acuerdos). En caso de discrepancia, las condiciones particulares prevalecen sobre estas condiciones generales.',
            en: 'Each project may have a proposal or specific terms accepted in writing by the client (plan, fee, scope, phases or other agreements). In the event of any discrepancy, the specific terms prevail over these general terms.',
            eu: 'Proiektu bakoitzak bezeroak idatziz onartutako proposamen bat edo baldintza partikularrak izan ditzake (plana, kuota, irismena, faseak edo beste akordio batzuk). Desadostasunik izanez gero, baldintza partikularrak baldintza orokor hauen gainetik nagusitzen dira.',
          },
        ],
      },
      {
        heading: {
          es: '3. Qué incluye la cuota',
          en: '3. What the fee includes',
          eu: '3. Zer sartzen den kuotan',
        },
        paragraphs: [
          {
            es: 'La cuota mensual incluye, según el plan contratado:',
            en: 'The monthly fee includes, according to the plan contracted:',
            eu: 'Hileroko kuotak honako hauek hartzen ditu barne, kontratatutako planaren arabera:',
          },
          {
            list: [
              {
                es: 'El diseño y desarrollo de la web o tienda dentro del alcance acordado.',
                en: 'The design and development of the website or store within the agreed scope.',
                eu: 'Webaren edo dendaren diseinua eta garapena, adostutako irismenaren barruan.',
              },
              {
                es: 'Alojamiento (hosting) y certificado SSL.',
                en: 'Hosting and SSL certificate.',
                eu: 'Ostatatzea (hostinga) eta SSL ziurtagiria.',
              },
              {
                es: 'Mantenimiento técnico, actualizaciones y copias de seguridad.',
                en: 'Technical maintenance, updates and backups.',
                eu: 'Mantentze-lan teknikoak, eguneratzeak eta segurtasun-kopiak.',
              },
              {
                es: 'Soporte por los canales indicados en cada plan.',
                en: 'Support through the channels indicated in each plan.',
                eu: 'Laguntza, plan bakoitzean adierazitako kanalen bidez.',
              },
              {
                es: 'El número de cambios mensuales indicado en cada plan.',
                en: 'The number of monthly changes indicated in each plan.',
                eu: 'Plan bakoitzean adierazitako hileko aldaketa kopurua.',
              },
            ],
          },
          {
            es: `Las características concretas de cada plan son las publicadas en ${LEGAL.web} en el momento de la contratación, o las indicadas en las condiciones particulares.`,
            en: `The specific features of each plan are those published on ${LEGAL.web} at the time of contracting, or those set out in the specific terms.`,
            eu: `Plan bakoitzaren ezaugarri zehatzak kontratazioaren unean ${LEGAL.web} webgunean argitaratutakoak dira, edo baldintza partikularretan adierazitakoak.`,
          },
        ],
      },
      {
        heading: {
          es: '4. Qué no incluye la cuota',
          en: '4. What the fee does not include',
          eu: '4. Zer ez den sartzen kuotan',
        },
        paragraphs: [
          {
            es: 'Salvo que se indique expresamente en las condiciones particulares, no están incluidos y se presupuestarán aparte:',
            en: 'Unless expressly stated in the specific terms, the following are not included and will be quoted separately:',
            eu: 'Baldintza partikularretan berariaz adierazi ezean, honako hauek ez daude barne eta aparte aurrekontuztatuko dira:',
          },
          {
            list: [
              {
                es: 'La creación, redacción o traducción de contenidos.',
                en: 'The creation, writing or translation of content.',
                eu: 'Edukiak sortzea, idaztea edo itzultzea.',
              },
              {
                es: 'La fotografía, el vídeo o el tratamiento de imágenes.',
                en: 'Photography, video or image editing.',
                eu: 'Argazkigintza, bideoa edo irudien tratamendua.',
              },
              {
                es: 'La carga inicial o masiva de productos o contenidos.',
                en: 'The initial or bulk upload of products or content.',
                eu: 'Produktuen edo edukien hasierako karga edo karga masiboa.',
              },
              {
                es: 'La gestión de campañas de publicidad, email marketing, redes sociales o marketplaces (la cuota incluye, en su caso, la conexión técnica con estas herramientas, no su gestión).',
                en: 'The management of advertising campaigns, email marketing, social media or marketplaces (the fee includes, where applicable, the technical connection with these tools, not their management).',
                eu: 'Publizitate-kanpainen, email marketinaren, sare sozialen edo marketplaceen kudeaketa (kuotak, hala badagokio, tresna horiekiko konexio teknikoa hartzen du barne, ez horien kudeaketa).',
              },
              {
                es: 'El desarrollo de nuevas funcionalidades no incluidas en el alcance acordado.',
                en: 'The development of new features not included in the agreed scope.',
                eu: 'Adostutako irismenean sartuta ez dauden funtzionalitate berrien garapena.',
              },
              {
                es: 'El registro y la renovación del dominio (ver punto 9).',
                en: 'The registration and renewal of the domain (see section 9).',
                eu: 'Domeinuaren erregistroa eta berritzea (ikus 9. puntua).',
              },
              {
                es: 'Los servicios de terceros que el cliente contrate directamente (pasarelas de pago, transportistas, herramientas externas, etc.).',
                en: 'Third-party services contracted directly by the client (payment gateways, carriers, external tools, etc.).',
                eu: 'Bezeroak zuzenean kontratatzen dituen hirugarrenen zerbitzuak (ordainketa-pasabideak, garraiolariak, kanpoko tresnak, etab.).',
              },
            ],
          },
        ],
      },
      {
        heading: {
          es: '5. Cambios incluidos',
          en: '5. Included changes',
          eu: '5. Barne hartutako aldaketak',
        },
        paragraphs: [
          {
            es: 'Se considera «cambio» la modificación de contenidos o elementos de diseño ya existentes: textos, imágenes, precios, enlaces o pequeños ajustes visuales. No se considera cambio, sino un nuevo desarrollo, la creación de nuevas secciones o funcionalidades, ni las integraciones con servicios externos no previstas en el alcance.',
            en: 'A “change” means the modification of existing content or design elements: text, images, prices, links or small visual adjustments. The creation of new sections or features, and integrations with external services not provided for in the scope, are not considered changes but new development.',
            eu: '«Aldaketatzat» hartzen da lehendik dauden edukiak edo diseinu-elementuak aldatzea: testuak, irudiak, prezioak, estekak edo doikuntza bisual txikiak. Ez da aldaketatzat hartzen, garapen berritzat baizik, atal edo funtzionalitate berriak sortzea, ezta irismenean aurreikusi gabeko kanpoko zerbitzuekiko integrazioak ere.',
          },
          {
            es: 'Los cambios no utilizados en un mes no se acumulan para meses posteriores. En los planes con tienda online, la gestión del catálogo que el cliente realiza desde su propio panel no cuenta como cambio.',
            en: 'Changes not used in a given month do not carry over to later months. On plans with an online store, catalogue management carried out by the client from their own panel does not count as a change.',
            eu: 'Hilabete batean erabili ez diren aldaketak ez dira hurrengo hilabeteetarako metatzen. Online denda duten planetan, bezeroak bere paneletik egiten duen katalogoaren kudeaketa ez da aldaketatzat hartzen.',
          },
        ],
      },
      {
        heading: {
          es: '6. Desarrollo, plazos y revisiones',
          en: '6. Development, timelines and revisions',
          eu: '6. Garapena, epeak eta berrikuspenak',
        },
        paragraphs: [
          {
            es: 'Los plazos de cada proyecto se fijan por escrito antes de empezar y son orientativos. Dependen de que el cliente facilite a tiempo la información, los contenidos y los materiales necesarios. Los retrasos en su entrega o en las validaciones del cliente ampliarán los plazos en la misma medida.',
            en: 'The timelines for each project are set in writing before work begins and are indicative. They depend on the client providing the necessary information, content and materials on time. Delays in their delivery or in the client’s approvals will extend the timelines to the same extent.',
            eu: 'Proiektu bakoitzaren epeak idatziz finkatzen dira hasi aurretik, eta orientagarriak dira. Bezeroak beharrezko informazioa, edukiak eta materialak garaiz ematearen mende daude. Horiek ematean edo bezeroaren balidazioetan gertatzen diren atzerapenek neurri berean luzatuko dituzte epeak.',
          },
          {
            es: 'El diseño incluye hasta 2 rondas de revisión antes de su aprobación. Las revisiones adicionales, o los cambios sobre un diseño ya aprobado, podrán presupuestarse aparte.',
            en: 'The design includes up to 2 rounds of revisions before its approval. Additional revisions, or changes to an already approved design, may be quoted separately.',
            eu: 'Diseinuak gehienez 2 berrikuspen-txanda hartzen ditu barne, onartu aurretik. Berrikuspen gehigarriak, edo dagoeneko onartutako diseinu baten gaineko aldaketak, aparte aurrekontuztatu ahal izango dira.',
          },
        ],
      },
      {
        heading: {
          es: '7. Tarifas y pagos',
          en: '7. Fees and payments',
          eu: '7. Tarifak eta ordainketak',
        },
        paragraphs: [
          {
            es: 'La cuota se factura mensualmente por adelantado, mediante domiciliación bancaria o tarjeta, desde la publicación de la web o, si esta se retrasa por causas imputables al cliente, a los 60 días del inicio del proyecto, salvo que las condiciones particulares indiquen otra cosa. Los precios publicados no incluyen IVA.',
            en: 'The fee is billed monthly in advance, by direct debit or card, from the publication of the website or, if publication is delayed for reasons attributable to the client, from 60 days after the start of the project, unless the specific terms state otherwise. Published prices do not include VAT.',
            eu: 'Kuota hilero eta aurretiaz fakturatzen da, banku-helbideratze edo txartel bidez, weba argitaratzen denetik aurrera edo, argitalpena bezeroari egotz dakizkiokeen arrazoiengatik atzeratzen bada, proiektua hasi eta 60 egunera, baldintza partikularrek bestelakorik adierazi ezean. Argitaratutako prezioek ez dute BEZa barne hartzen.',
          },
          {
            es: `Algunos planes pueden incluir una cuota de alta única de puesta en marcha, según las tarifas vigentes. ${BRAND} puede ofrecer promociones que eximan de esta cuota durante un periodo limitado. La cuota de alta no es reembolsable una vez iniciado el servicio.`,
            en: `Some plans may include a one-time setup fee, according to current pricing. ${BRAND} may offer promotions that waive this fee for a limited period. The setup fee is non-refundable once the service has started.`,
            eu: `Plan batzuek abian jartzeko hasierako kuota bakar bat izan dezakete, indarrean dauden tarifen arabera. ${BRAND}ek kuota horretatik denbora mugatu batez salbuesten duten promozioak eskain ditzake. Hasierako kuota ez da itzulgarria zerbitzua hasi ondoren.`,
          },
          {
            es: `${BRAND} puede actualizar sus precios comunicándolo al cliente con al menos 30 días de antelación. Si el cliente no está de acuerdo, puede cancelar el servicio antes de que se aplique el nuevo precio.`,
            en: `${BRAND} may update its prices by notifying the client at least 30 days in advance. If the client does not agree, they may cancel the service before the new price applies.`,
            eu: `${BRAND}ek bere prezioak egunera ditzake, bezeroari gutxienez 30 egun lehenago jakinaraziz. Bezeroa ados ez badago, zerbitzua bertan behera utz dezake prezio berria aplikatu aurretik.`,
          },
        ],
      },
      {
        heading: { es: '8. Impago', en: '8. Non-payment', eu: '8. Ez-ordaintzea' },
        paragraphs: [
          {
            es: `Si una cuota no se abona a su vencimiento, ${BRAND} lo comunicará al cliente. Si el pago no se regulariza en los 15 días siguientes a esa comunicación, ${BRAND} podrá suspender el servicio hasta que se abonen las cantidades pendientes, y resolver el contrato si el impago se mantiene durante más de 30 días.`,
            en: `If a fee is not paid when due, ${BRAND} will notify the client. If payment is not settled within 15 days of that notice, ${BRAND} may suspend the service until the outstanding amounts are paid, and terminate the contract if the non-payment continues for more than 30 days.`,
            eu: `Kuota bat mugaegunean ordaintzen ez bada, ${BRAND}ek bezeroari jakinaraziko dio. Jakinarazpen horren ondorengo 15 egunetan ordainketa erregularizatzen ez bada, ${BRAND}ek zerbitzua eten ahal izango du zor diren zenbatekoak ordaindu arte, eta kontratua suntsiarazi, ez-ordaintzeak 30 egun baino gehiago irauten badu.`,
          },
        ],
      },
      {
        heading: { es: '9. Dominio', en: '9. Domain', eu: '9. Domeinua' },
        paragraphs: [
          {
            es: `El dominio no está incluido en la cuota. Su registro es un pago independiente cuyo importe depende del nombre y la extensión elegidos. ${BRAND} puede gestionar su compra por cuenta del cliente; en ese caso, el dominio se registrará a nombre del cliente siempre que sea técnicamente posible, y seguirá las condiciones de su registrador.`,
            en: `The domain is not included in the fee. Its registration is a separate payment whose amount depends on the chosen name and extension. ${BRAND} may handle its purchase on behalf of the client; in that case, the domain will be registered in the client’s name whenever technically possible, and will be subject to the terms of its registrar.`,
            eu: `Domeinua ez dago kuotan sartuta. Haren erregistroa ordainketa independente bat da, eta zenbatekoa aukeratutako izenaren eta luzapenaren araberakoa da. ${BRAND}ek bezeroaren kontura kudea dezake haren erosketa; kasu horretan, domeinua bezeroaren izenean erregistratuko da, teknikoki posible den guztietan, eta bere erregistratzailearen baldintzei jarraituko die.`,
          },
        ],
      },
      {
        heading: {
          es: '10. Servicios de terceros',
          en: '10. Third-party services',
          eu: '10. Hirugarrenen zerbitzuak',
        },
        paragraphs: [
          {
            es: `Las tiendas online pueden utilizar servicios de terceros, como pasarelas de pago (por ejemplo, Stripe o Redsys), transportistas o herramientas externas. Sus comisiones y tarifas las factura directamente cada proveedor al cliente y no forman parte de la cuota. ${BRAND} no es responsable del funcionamiento, las caídas ni los cambios de condiciones de estos servicios.`,
            en: `Online stores may use third-party services, such as payment gateways (for example, Stripe or Redsys), carriers or external tools. Their commissions and fees are billed directly by each provider to the client and are not part of the fee. ${BRAND} is not responsible for the operation, outages or changes in terms of these services.`,
            eu: `Online dendek hirugarrenen zerbitzuak erabil ditzakete, hala nola ordainketa-pasabideak (adibidez, Stripe edo Redsys), garraiolariak edo kanpoko tresnak. Horien komisioak eta tarifak hornitzaile bakoitzak zuzenean fakturatzen dizkio bezeroari, eta ez dira kuotaren parte. ${BRAND} ez da zerbitzu horien funtzionamenduaren, erorketen edo baldintza-aldaketen erantzule.`,
          },
        ],
      },
      {
        heading: {
          es: '11. Duración y cancelación',
          en: '11. Term and cancellation',
          eu: '11. Iraupena eta bertan behera uztea',
        },
        paragraphs: [
          {
            es: 'No existe permanencia. El cliente puede cancelar el servicio en cualquier momento comunicándolo por escrito con al menos 30 días de antelación.',
            en: 'There is no minimum commitment period. The client may cancel the service at any time by giving written notice at least 30 days in advance.',
            eu: 'Ez dago iraunkortasunik. Bezeroak edozein unetan utz dezake zerbitzua bertan behera, idatziz eta gutxienez 30 egun lehenago jakinaraziz.',
          },
          {
            es: `Al finalizar el servicio, la web deja de estar operativa y se da de baja. En los 30 días siguientes, y si el cliente lo solicita, ${BRAND} le entregará una exportación de sus contenidos y datos (textos, imágenes aportadas por el cliente y, en tiendas online, productos, clientes y pedidos) en un formato estándar. Transcurrido ese plazo, los datos se eliminarán.`,
            en: `When the service ends, the website ceases to be operational and is taken down. Within the following 30 days, and if the client so requests, ${BRAND} will provide an export of their content and data (text, images supplied by the client and, for online stores, products, customers and orders) in a standard format. After that period, the data will be deleted.`,
            eu: `Zerbitzua amaitzean, weba ez da operatibo egongo eta baja emango zaio. Ondorengo 30 egunetan, eta bezeroak hala eskatzen badu, ${BRAND}ek bere edukien eta datuen esportazio bat emango dio (testuak, bezeroak emandako irudiak eta, online dendetan, produktuak, bezeroak eta eskaerak), formatu estandar batean. Epe hori igarota, datuak ezabatu egingo dira.`,
          },
        ],
      },
      {
        heading: {
          es: '12. Propiedad intelectual',
          en: '12. Intellectual property',
          eu: '12. Jabetza intelektuala',
        },
        paragraphs: [
          {
            es: `El diseño, el código, la plataforma y la infraestructura de la web son desarrollados y mantenidos por ${BRAND}, que conserva su titularidad. El cliente dispone de un derecho de uso mientras mantenga el servicio en vigor.`,
            en: `The design, code, platform and infrastructure of the website are developed and maintained by ${BRAND}, which retains ownership of them. The client has a right of use for as long as they keep the service active.`,
            eu: `Webaren diseinua, kodea, plataforma eta azpiegitura ${BRAND}ek garatzen eta mantentzen ditu, eta horien titulartasuna gordetzen du. Bezeroak erabilera-eskubidea du zerbitzua indarrean mantentzen duen bitartean.`,
          },
          {
            es: 'Los contenidos aportados por el cliente (textos, imágenes, logotipos, datos de productos y de clientes) son del cliente, que garantiza tener los derechos necesarios para usarlos.',
            en: 'Content supplied by the client (text, images, logos, product and customer data) belongs to the client, who warrants that they hold the rights needed to use it.',
            eu: 'Bezeroak emandako edukiak (testuak, irudiak, logotipoak, produktuen eta bezeroen datuak) bezeroarenak dira, eta bezeroak bermatzen du horiek erabiltzeko beharrezko eskubideak dituela.',
          },
          {
            es: `${BRAND} podrá mencionar el proyecto y mostrarlo en su portfolio, salvo que el cliente se oponga por escrito.`,
            en: `${BRAND} may mention the project and show it in its portfolio, unless the client objects in writing.`,
            eu: `${BRAND}ek proiektua aipatu eta bere portfolioan erakutsi ahal izango du, bezeroak idatziz aurka egin ezean.`,
          },
        ],
      },
      {
        heading: {
          es: '13. Obligaciones del cliente',
          en: '13. Client obligations',
          eu: '13. Bezeroaren betebeharrak',
        },
        paragraphs: [
          {
            es: 'El cliente se compromete a:',
            en: 'The client undertakes to:',
            eu: 'Bezeroak konpromiso hauek hartzen ditu:',
          },
          {
            list: [
              {
                es: 'Facilitar a tiempo la información y los materiales necesarios para el servicio.',
                en: 'Provide on time the information and materials needed for the service.',
                eu: 'Zerbitzurako beharrezkoak diren informazioa eta materialak garaiz ematea.',
              },
              {
                es: 'Garantizar que sus contenidos no infringen derechos de terceros ni la legislación vigente.',
                en: 'Ensure that their content does not infringe third-party rights or applicable law.',
                eu: 'Bere edukiek hirugarrenen eskubideak eta indarrean dagoen legeria urratzen ez dituztela bermatzea.',
              },
              {
                es: 'Cumplir las obligaciones legales y fiscales de su propia actividad, incluidas, en su caso, sus condiciones de venta, la normativa de consumo, la fiscalidad de sus ventas (IVA, ventanilla única, sistemas de facturación obligatorios) y la protección de datos de sus clientes.',
                en: 'Comply with the legal and tax obligations of their own business, including, where applicable, their terms of sale, consumer regulations, the taxation of their sales (VAT, One-Stop Shop, mandatory invoicing systems) and the protection of their customers’ data.',
                eu: 'Bere jardueraren lege- eta zerga-betebeharrak betetzea, barne direla, hala badagokio, bere salmenta-baldintzak, kontsumo-araudia, bere salmenten fiskalitatea (BEZa, leihatila bakarra, nahitaezko fakturazio-sistemak) eta bere bezeroen datuen babesa.',
              },
              {
                es: 'Custodiar sus claves de acceso al panel.',
                en: 'Keep their access credentials to the panel safe.',
                eu: 'Panelerako sarbide-gakoak zaintzea.',
              },
            ],
          },
          {
            es: `${BRAND} ofrece la herramienta técnica, pero no asesora legal ni fiscalmente sobre la actividad del cliente.`,
            en: `${BRAND} provides the technical tool, but does not give legal or tax advice on the client’s business.`,
            eu: `${BRAND}ek tresna teknikoa eskaintzen du, baina ez du bezeroaren jarduerari buruzko lege- edo zerga-aholkularitzarik ematen.`,
          },
        ],
      },
      {
        heading: {
          es: '14. Protección de datos',
          en: '14. Data protection',
          eu: '14. Datuen babesa',
        },
        paragraphs: [
          {
            es: `Cuando para prestar el servicio ${BRAND} trate datos personales de los que el cliente es responsable (por ejemplo, datos de los clientes o pedidos de una tienda online), ${BRAND} actuará como encargado del tratamiento, conforme al artículo 28 del Reglamento (UE) 2016/679 (RGPD), en los términos del Anexo I, que forma parte de estas condiciones.`,
            en: `Where, in order to provide the service, ${BRAND} processes personal data for which the client is the controller (for example, data on the customers or orders of an online store), ${BRAND} will act as data processor, in accordance with Article 28 of Regulation (EU) 2016/679 (GDPR), under the terms of Annex I, which forms part of these terms.`,
            eu: `Zerbitzua emateko ${BRAND}ek bezeroa arduradun duten datu pertsonalak tratatzen dituenean (adibidez, online denda baten bezeroen edo eskaeren datuak), ${BRAND}ek tratamenduaren eragile gisa jardungo du, 2016/679 (EB) Erregelamenduaren (DBEO) 28. artikuluaren arabera, I. eranskinean ezarritako baldintzetan; eranskin hori baldintza hauen parte da.`,
          },
          {
            es: `El tratamiento de los datos del propio cliente como contratante de ${BRAND} se rige por la Política de Privacidad publicada en ${LEGAL.web}.`,
            en: `The processing of the client’s own data as a party contracting with ${BRAND} is governed by the Privacy Policy published on ${LEGAL.web}.`,
            eu: `Bezeroak berak ${BRAND}en kontratatzaile gisa dituen datuen tratamendua ${LEGAL.web} webgunean argitaratutako Pribatutasun Politikak arautzen du.`,
          },
        ],
      },
      {
        heading: {
          es: '15. Disponibilidad y responsabilidad',
          en: '15. Availability and liability',
          eu: '15. Erabilgarritasuna eta erantzukizuna',
        },
        paragraphs: [
          {
            es: `${BRAND} pondrá todos los medios razonables para garantizar la disponibilidad, la seguridad y el correcto funcionamiento del servicio, y realizará copias de seguridad periódicas. No obstante, no garantiza un funcionamiento ininterrumpido, y podrá realizar interrupciones puntuales por mantenimiento, avisando con antelación cuando sea posible.`,
            en: `${BRAND} will use all reasonable means to ensure the availability, security and proper functioning of the service, and will make regular backups. However, it does not guarantee uninterrupted operation, and may carry out occasional interruptions for maintenance, giving advance notice where possible.`,
            eu: `${BRAND}ek arrazoizko bitarteko guztiak jarriko ditu zerbitzuaren erabilgarritasuna, segurtasuna eta funtzionamendu egokia bermatzeko, eta aldian-aldian segurtasun-kopiak egingo ditu. Hala ere, ez du etenik gabeko funtzionamendua bermatzen, eta mantentze-lanengatik etenaldi puntualak egin ahal izango ditu, ahal denean aldez aurretik jakinaraziz.`,
          },
          {
            es: `${BRAND} no será responsable de incidencias ajenas a su control, como fallos de proveedores o servicios de terceros, ataques informáticos pese a las medidas razonables adoptadas, o causas de fuerza mayor.`,
            en: `${BRAND} will not be liable for incidents beyond its control, such as failures of third-party providers or services, cyberattacks despite the reasonable measures adopted, or force majeure.`,
            eu: `${BRAND} ez da bere kontroletik kanpoko gorabeheren erantzule izango, hala nola hirugarrenen hornitzaileen edo zerbitzuen hutsegiteena, hartutako arrazoizko neurriak gorabehera gertatutako eraso informatikoena edo ezinbesteko kasuena.`,
          },
          {
            es: `En ningún caso ${BRAND} responderá del lucro cesante, la pérdida de ventas, de clientes o de oportunidades de negocio. La responsabilidad total de ${BRAND} derivada del servicio se limitará, como máximo, al importe de las cuotas abonadas por el cliente en los 12 meses anteriores al hecho que la origine. Estas limitaciones no se aplican en caso de dolo o culpa grave.`,
            en: `In no event will ${BRAND} be liable for loss of profit, or loss of sales, customers or business opportunities. The total liability of ${BRAND} arising from the service will be limited, at most, to the amount of the fees paid by the client in the 12 months preceding the event giving rise to it. These limitations do not apply in cases of wilful misconduct or gross negligence.`,
            eu: `${BRAND}ek ez du inola ere erantzungo lortu gabeko irabaziagatik, ezta salmenten, bezeroen edo negozio-aukeren galeragatik ere. Zerbitzutik eratorritako ${BRAND}en erantzukizun osoa, gehienez ere, erantzukizuna sorrarazi duen gertakariaren aurreko 12 hilabeteetan bezeroak ordaindutako kuoten zenbatekora mugatuko da. Muga horiek ez dira aplikatzen dolo edo erru larriko kasuetan.`,
          },
        ],
      },
      {
        heading: {
          es: '16. Modificación de las condiciones',
          en: '16. Changes to these terms',
          eu: '16. Baldintzen aldaketa',
        },
        paragraphs: [
          {
            es: `${BRAND} podrá modificar estas condiciones comunicándolo a los clientes con al menos 30 días de antelación. Las condiciones particulares ya aceptadas se mantendrán durante su vigencia.`,
            en: `${BRAND} may amend these terms by notifying clients at least 30 days in advance. Specific terms already accepted will remain in place for as long as they are in force.`,
            eu: `${BRAND}ek baldintza hauek aldatu ahal izango ditu, bezeroei gutxienez 30 egun lehenago jakinaraziz. Dagoeneko onartutako baldintza partikularrak mantendu egingo dira indarrean dauden bitartean.`,
          },
        ],
      },
      {
        heading: {
          es: '17. Legislación y jurisdicción',
          en: '17. Governing law and jurisdiction',
          eu: '17. Legeria eta jurisdikzioa',
        },
        paragraphs: [
          {
            es: `Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio de ${BRAND}, salvo que la ley disponga otra cosa.`,
            en: `These terms are governed by Spanish law. For any dispute, the parties submit to the courts of the domicile of ${BRAND}, unless the law provides otherwise.`,
            eu: `Baldintza hauek Espainiako legeriak arautzen ditu. Edozein auzitarako, alderdiak ${BRAND}en egoitzako epaitegi eta auzitegien mende jartzen dira, legeak bestelakorik xedatzen ez badu.`,
          },
        ],
      },
      {
        annex: true,
        heading: {
          es: 'Anexo I. Encargo del tratamiento de datos',
          en: 'Annex I. Data processing agreement',
          eu: 'I. eranskina. Datuen tratamenduaren enkargua',
        },
        paragraphs: [
          {
            lead: { es: '1. Objeto.', en: '1. Purpose.', eu: '1. Xedea.' },
            text: {
              es: `${BRAND} (encargado) trata, por cuenta del cliente (responsable), los datos personales necesarios para prestar el servicio: alojamiento, mantenimiento y funcionamiento de la web o tienda online.`,
              en: `${BRAND} (processor) processes, on behalf of the client (controller), the personal data needed to provide the service: hosting, maintenance and operation of the website or online store.`,
              eu: `${BRAND}ek (eragilea) bezeroaren (arduraduna) kontura tratatzen ditu zerbitzua emateko beharrezkoak diren datu pertsonalak: webaren edo online dendaren ostatatzea, mantentze-lanak eta funtzionamendua.`,
            },
          },
          {
            lead: {
              es: '2. Datos y personas afectadas.',
              en: '2. Data and data subjects.',
              eu: '2. Datuak eta eragindako pertsonak.',
            },
            text: {
              es: 'Datos identificativos, de contacto, de pedidos y de facturación de los clientes, usuarios y contactos de la web del cliente.',
              en: 'Identification, contact, order and billing data of the customers, users and contacts of the client’s website.',
              eu: 'Bezeroaren webguneko bezeroen, erabiltzaileen eta kontaktuen identifikazio-, harreman-, eskaera- eta fakturazio-datuak.',
            },
          },
          {
            lead: {
              es: `3. Obligaciones de ${BRAND}.`,
              en: `3. Obligations of ${BRAND}.`,
              eu: `3. ${BRAND}en betebeharrak.`,
            },
            text: {
              es: `${BRAND} se compromete a:`,
              en: `${BRAND} undertakes to:`,
              eu: `${BRAND}ek konpromiso hauek hartzen ditu:`,
            },
          },
          {
            list: [
              {
                es: 'Tratar los datos solo según las instrucciones documentadas del cliente y para prestar el servicio.',
                en: 'Process the data only on the client’s documented instructions and in order to provide the service.',
                eu: 'Datuak bezeroaren jarraibide dokumentatuen arabera eta zerbitzua emateko soilik tratatzea.',
              },
              {
                es: 'Garantizar la confidencialidad de las personas autorizadas a tratar los datos.',
                en: 'Ensure that the persons authorised to process the data are bound by confidentiality.',
                eu: 'Datuak tratatzeko baimena duten pertsonen konfidentzialtasuna bermatzea.',
              },
              {
                es: 'Aplicar medidas de seguridad técnicas y organizativas adecuadas (cifrado de las comunicaciones, control de accesos, copias de seguridad).',
                en: 'Apply appropriate technical and organisational security measures (encryption of communications, access control, backups).',
                eu: 'Segurtasun-neurri tekniko eta antolakuntzazko egokiak aplikatzea (komunikazioen zifratzea, sarbide-kontrola, segurtasun-kopiak).',
              },
              {
                es: 'Notificar al cliente, sin dilación indebida, cualquier violación de seguridad que afecte a los datos.',
                en: 'Notify the client, without undue delay, of any security breach affecting the data.',
                eu: 'Datuei eragiten dien edozein segurtasun-urraketa bezeroari jakinaraztea, bidegabeko atzerapenik gabe.',
              },
              {
                es: 'Ayudar al cliente a atender las solicitudes de ejercicio de derechos de los interesados.',
                en: 'Assist the client in responding to requests from data subjects exercising their rights.',
                eu: 'Bezeroari laguntzea interesdunek beren eskubideak baliatzeko egiten dituzten eskaerei erantzuten.',
              },
              {
                es: 'Al finalizar el servicio, devolver los datos al cliente y suprimirlos, conforme al punto 11 de estas condiciones.',
                en: 'When the service ends, return the data to the client and delete them, in accordance with section 11 of these terms.',
                eu: 'Zerbitzua amaitzean, datuak bezeroari itzultzea eta ezabatzea, baldintza hauen 11. puntuaren arabera.',
              },
              {
                es: 'Poner a disposición del cliente la información necesaria para demostrar el cumplimiento de estas obligaciones.',
                en: 'Make available to the client the information needed to demonstrate compliance with these obligations.',
                eu: 'Betebehar hauek betetzen direla frogatzeko beharrezkoa den informazioa bezeroaren eskura jartzea.',
              },
            ],
          },
          {
            lead: { es: '4. Subencargados.', en: '4. Sub-processors.', eu: '4. Azpieragileak.' },
            text: {
              es: `El cliente autoriza a ${BRAND} a recurrir a los siguientes subencargados para prestar el servicio: Hetzner Online GmbH (Alemania), como proveedor de alojamiento, y Cloudflare, Inc., como proveedor de CDN y seguridad, con las garantías adecuadas previstas en el RGPD para las transferencias internacionales, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo. ${BRAND} informará al cliente de cualquier cambio previsto, y el cliente podrá oponerse.`,
              en: `The client authorises ${BRAND} to engage the following sub-processors to provide the service: Hetzner Online GmbH (Germany), as hosting provider, and Cloudflare, Inc., as CDN and security provider, with the appropriate safeguards provided for in the GDPR for international transfers, such as the EU-U.S. Data Privacy Framework or standard contractual clauses. ${BRAND} will inform the client of any planned change, and the client may object.`,
              eu: `Bezeroak baimena ematen dio ${BRAND}i zerbitzua emateko azpieragile hauetara jotzeko: Hetzner Online GmbH (Alemania), ostatatze-hornitzaile gisa, eta Cloudflare, Inc., CDN eta segurtasun hornitzaile gisa, nazioarteko transferentzietarako DBEOn aurreikusitako berme egokiekin, hala nola EB-AEB Datuen Pribatutasun Esparrua edo kontratu-klausula tipoak. ${BRAND}ek aurreikusitako edozein aldaketaren berri emango dio bezeroari, eta bezeroak aurka egin ahal izango du.`,
            },
          },
          {
            lead: {
              es: '5. Obligaciones del cliente.',
              en: '5. Obligations of the client.',
              eu: '5. Bezeroaren betebeharrak.',
            },
            text: {
              es: 'El cliente, como responsable, garantiza que los datos se han obtenido lícitamente y que ha informado a los interesados conforme al RGPD.',
              en: 'The client, as controller, warrants that the data have been lawfully obtained and that it has informed the data subjects in accordance with the GDPR.',
              eu: 'Bezeroak, arduradun gisa, bermatzen du datuak zilegitasunez lortu direla eta interesdunei DBEOren arabera informatu diela.',
            },
          },
        ],
      },
    ],
  },
];

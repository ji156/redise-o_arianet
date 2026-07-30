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

export type LegalSection = { heading: Bi; paragraphs: Bi[] };
export type LegalDoc = { slug: string; nav: Bi; title: Bi; intro: Bi; sections: LegalSection[] };

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
    title: { es: 'Términos y condiciones', en: 'Terms & conditions', eu: 'Baldintza orokorrak' },
    intro: {
      es: 'Condiciones generales que regulan la contratación de los servicios de diseño y desarrollo web ofrecidos por el titular.',
      en: 'General terms governing the contracting of the web design and development services offered by the owner.',
      eu: 'Titularrak eskaintzen dituen web diseinu eta garapen zerbitzuen kontratazioa arautzen duten baldintza orokorrak.',
    },
    sections: [
      {
        heading: { es: '1. Objeto', en: '1. Purpose', eu: '1. Xedea' },
        paragraphs: [
          {
            es: `${BRAND} ofrece servicios de branding, diseño y desarrollo web, tiendas online y mantenimiento, bajo una cuota fija mensual (tarifa plana) según el plan contratado.`,
            en: `${BRAND} provides branding, web design and development, online stores and maintenance services, under a fixed monthly fee (flat rate) according to the plan contracted.`,
            eu: `${BRAND} markak branding, web diseinu eta garapen, online denda eta mantentze-lan zerbitzuak eskaintzen ditu, hileroko kuota finko baten pean (tarifa laua), kontratatutako planaren arabera.`,
          },
        ],
      },
      {
        heading: {
          es: '2. Tarifas y pagos',
          en: '2. Fees and payments',
          eu: '2. Tarifak eta ordainketak',
        },
        paragraphs: [
          {
            es: 'Los servicios se prestan mediante una cuota mensual que incluye alojamiento, certificado SSL, mantenimiento y actualizaciones, según el plan elegido. La cuota se factura de forma periódica y los precios pueden actualizarse comunicándolo previamente al cliente.',
            en: 'Services are provided through a monthly fee that includes hosting, SSL certificate, maintenance and updates, according to the chosen plan. The fee is billed periodically and prices may be updated with prior notice to the client.',
            eu: 'Zerbitzuak hileroko kuota baten bidez ematen dira, ostatatzea, SSL ziurtagiria, mantentze-lanak eta eguneratzeak barne hartzen dituena, aukeratutako planaren arabera. Kuota aldizka fakturatzen da eta prezioak egunera daitezke bezeroari aldez aurretik jakinaraziz.',
          },
          {
            es: 'El dominio no está incluido en la cuota: su registro es un pago único e independiente, cuyo importe varía según el nombre elegido. El titular puede gestionar su compra por cuenta del cliente.',
            en: 'The domain is not included in the fee: its registration is a separate one-time payment whose amount varies depending on the chosen name. The owner may handle its purchase on behalf of the client.',
            eu: 'Domeinua ez dago kuotan sartuta: haren erregistroa ordainketa bakar eta independente bat da, eta zenbatekoa aukeratutako izenaren araberakoa da. Titularrak bezeroaren kontura kudea dezake haren erosketa.',
          },
          {
            es: 'Además de la cuota mensual, la contratación de cualquier plan incluye una alta única de puesta en marcha, cuyo importe depende del plan contratado (consultar tarifas vigentes); esta alta no es reembolsable una vez iniciado el servicio. En los planes con tienda online, las comisiones de la pasarela de pago las factura directamente el proveedor de pago (p. ej. Stripe o Redsys) y no forman parte de la cuota del titular.',
            en: "In addition to the monthly fee, signing up to any plan includes a one-time setup fee, the amount of which depends on the plan contracted (see current pricing); this setup fee is non-refundable once the service has started. On plans that include an online store, payment gateway fees are billed directly by the payment provider (e.g. Stripe or Redsys) and are not part of the owner's fee.",
            eu: 'Hileroko kuotaz gain, edozein plan kontratatzeak abian jartzeko hasierako kuota bakar bat barne hartzen du, eta haren zenbatekoa kontratatutako planaren araberakoa da (ikus indarrean dauden tarifak); hasierako kuota hori ez da itzulgarria zerbitzua hasi ondoren. Online denda duten planetan, ordainketa-pasabidearen komisioak ordainketa-hornitzaileak berak fakturatzen ditu zuzenean (adib. Stripe edo Redsys) eta ez dira titularraren kuotaren parte.',
          },
        ],
      },
      {
        heading: {
          es: '3. Propiedad y alcance del servicio',
          en: '3. Ownership and scope of service',
          eu: '3. Jabetza eta zerbitzuaren irismena',
        },
        paragraphs: [
          {
            es: `El diseño, el código y la infraestructura de la web son desarrollados y mantenidos por ${BRAND}, que conserva su titularidad. El servicio consiste en mantener la web operativa y actualizada mientras el cliente mantenga su tarifa plana en vigor.`,
            en: `The design, code and infrastructure of the website are developed and maintained by ${BRAND}, which retains ownership of them. The service consists of keeping the website operational and up to date while the client keeps their flat-rate plan active.`,
            eu: `Webaren diseinua, kodea eta azpiegitura ${BRAND} markak garatzen eta mantentzen ditu, eta horien titulartasuna gordetzen du. Zerbitzua weba operatibo eta eguneratuta mantentzean datza, bezeroak bere tarifa laua indarrean mantentzen duen bitartean.`,
          },
        ],
      },
      {
        heading: {
          es: '4. Duración y cancelación',
          en: '4. Term and cancellation',
          eu: '4. Iraupena eta bertan behera uztea',
        },
        paragraphs: [
          {
            es: 'No existe permanencia. El cliente puede cancelar cuando lo desee; al finalizar la relación, la web deja de renovarse y se da de baja. El dominio, si fue adquirido, seguirá las condiciones de su registro.',
            en: 'There is no minimum commitment. The client may cancel at any time; when the relationship ends, the website stops being renewed and is taken down. The domain, if acquired, will follow the conditions of its registration.',
            eu: 'Ez dago iraunkortasunik. Bezeroak nahi duenean utz dezake bertan behera; harremana amaitzean, weba ez da berritzen eta baja ematen zaio. Domeinuak, eskuratu bazen, bere erregistroaren baldintzei jarraituko die.',
          },
        ],
      },
      {
        heading: {
          es: '5. Obligaciones del cliente',
          en: '5. Client obligations',
          eu: '5. Bezeroaren betebeharrak',
        },
        paragraphs: [
          {
            es: 'El cliente se compromete a facilitar la información y los materiales necesarios para la prestación del servicio, y a que dichos contenidos no infrinjan derechos de terceros ni la legislación vigente.',
            en: 'The client agrees to provide the information and materials needed to deliver the service, and to ensure that such content does not infringe third-party rights or applicable law.',
            eu: 'Bezeroak zerbitzua emateko beharrezkoak diren informazioa eta materialak emateko konpromisoa hartzen du, eta eduki horiek hirugarrenen eskubideak edo indarrean dagoen legeria ez urratzekoa.',
          },
        ],
      },
      {
        heading: { es: '6. Responsabilidad', en: '6. Liability', eu: '6. Erantzukizuna' },
        paragraphs: [
          {
            es: 'El titular pondrá todos los medios razonables para garantizar la disponibilidad y seguridad del servicio, sin que pueda responsabilizarse de incidencias ajenas a su control (proveedores, fuerza mayor, etc.).',
            en: 'The owner will use all reasonable means to ensure the availability and security of the service, but cannot be held responsible for incidents beyond its control (providers, force majeure, etc.).',
            eu: 'Titularrak bide arrazoizko guztiak jarriko ditu zerbitzuaren erabilgarritasuna eta segurtasuna bermatzeko, baina ezin da bere kontroletik kanpoko gorabeheren erantzule izan (hornitzaileak, ezinbesteko kasuak, etab.).',
          },
        ],
      },
      {
        heading: {
          es: '7. Legislación aplicable',
          en: '7. Applicable law',
          eu: '7. Aplikatu beharreko legeria',
        },
        paragraphs: [
          {
            es: 'Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales del domicilio del titular, salvo que la ley disponga otra cosa.',
            en: 'These terms are governed by Spanish law. Any dispute will be submitted to the courts of the owner’s domicile, unless the law provides otherwise.',
            eu: 'Baldintza hauek Espainiako legeriak arautzen ditu. Edozein auzi titularraren egoitzako epaitegi eta auzitegien mende jarriko da, legeak bestelakorik xedatzen ez badu.',
          },
        ],
      },
    ],
  },
];

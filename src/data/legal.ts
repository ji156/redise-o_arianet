/**
 * Contenido legal del sitio (bilingüe ES/EN) + datos del banner de cookies.
 *
 * Estas plantillas cubren los documentos habituales de una web en España
 * (LSSI-CE + RGPD/LOPDGDD); conviene que un asesor legal las revise.
 *
 * Cada documento se renderiza desde `src/pages/[legal].astro` con el layout
 * `Legal.astro`. El texto traducible usa el mismo patrón { es, en } que el
 * resto del sitio (intercambio de `textContent` vía `data-en`), por lo que los
 * párrafos deben ser TEXTO PLANO, sin etiquetas HTML internas.
 */
import type { Bi } from './copy.ts';
import { BRAND, CONTACT } from './copy.ts';

/**
 * Datos identificativos del titular. Operando como autónomo (NIF personal)
 * bajo el nombre comercial `BRAND` mientras se constituye la sociedad; el
 * CIF de la sociedad, cuando esté disponible, sustituirá a `nif`.
 */
export const LEGAL = {
  marca: BRAND,
  titular: 'Jonathan Izquierdo (Arianet WebStudio)',
  nif: '44558564C',
  domicilio: 'C/ María Juncal Labandibar n.º 9, 1.º derecha, 20305 Irún (Guipúzcoa), España',
  email: CONTACT.email,
  web: 'arianet.studio',
  updated: { es: 'Última actualización: junio de 2026', en: 'Last updated: June 2026' },
  back: { es: '← Volver al inicio', en: '← Back to home' },
  index: { es: 'Documentos legales', en: 'Legal documents' },
};

/** Banner de consentimiento de cookies. */
export const COOKIES = {
  title: { es: 'Usamos cookies', en: 'We use cookies' },
  text: {
    es: 'Solo utilizamos cookies técnicas propias, necesarias para el funcionamiento del sitio y para recordar tus preferencias (como el idioma). No usamos cookies de seguimiento ni compartimos datos con terceros. Puedes leer más en nuestra política de cookies.',
    en: 'We only use our own technical cookies, needed for the site to work and to remember your preferences (such as language). We don’t use tracking cookies or share data with third parties. You can read more in our cookie policy.',
  },
  accept: { es: 'Aceptar', en: 'Accept' },
  reject: { es: 'Rechazar', en: 'Reject' },
  more: { es: 'Política de cookies', en: 'Cookie policy' },
};

export type LegalSection = { heading: Bi; paragraphs: Bi[] };
export type LegalDoc = { slug: string; nav: Bi; title: Bi; intro: Bi; sections: LegalSection[] };

/** Los 4 documentos legales. El orden define el menú lateral entre páginas. */
export const legalDocs: LegalDoc[] = [
  {
    slug: 'aviso-legal',
    nav: { es: 'Aviso legal', en: 'Legal notice' },
    title: { es: 'Aviso legal', en: 'Legal notice' },
    intro: {
      es: 'Condiciones que regulan el acceso y uso de este sitio web, en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).',
      en: 'Terms governing access to and use of this website, in compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE).',
    },
    sections: [
      {
        heading: { es: '1. Datos identificativos', en: '1. Identifying details' },
        paragraphs: [
          {
            es: `En cumplimiento de la normativa vigente, se informa de que este sitio web es titularidad de ${LEGAL.titular}, con NIF ${LEGAL.nif} y domicilio en ${LEGAL.domicilio}.`,
            en: `In accordance with applicable law, this website is owned by ${LEGAL.titular}, tax ID ${LEGAL.nif}, with registered address at ${LEGAL.domicilio}.`,
          },
          {
            es: `Correo electrónico de contacto: ${LEGAL.email}. En adelante, "${BRAND}" o "el titular".`,
            en: `Contact email: ${LEGAL.email}. Hereinafter, "${BRAND}" or "the owner".`,
          },
        ],
      },
      {
        heading: { es: '2. Objeto y condiciones de uso', en: '2. Purpose and terms of use' },
        paragraphs: [
          {
            es: 'El acceso a este sitio atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o que dañen los derechos e intereses de terceros.',
            en: 'Accessing this site grants the condition of user and implies acceptance of these terms. The user agrees to make appropriate use of the content and not to use it for unlawful activities or in ways that harm the rights and interests of third parties.',
          },
        ],
      },
      {
        heading: { es: '3. Propiedad intelectual e industrial', en: '3. Intellectual and industrial property' },
        paragraphs: [
          {
            es: `Todos los contenidos del sitio (textos, diseño, código, logotipos e imágenes) son propiedad del titular o de terceros que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa de ${BRAND}.`,
            en: `All content on the site (text, design, code, logos and images) is owned by the owner or by third parties who have authorised its use, and is protected by intellectual and industrial property rights. Its reproduction, distribution or transformation without the express authorisation of ${BRAND} is prohibited.`,
          },
        ],
      },
      {
        heading: { es: '4. Responsabilidad', en: '4. Liability' },
        paragraphs: [
          {
            es: 'El titular no se hace responsable de los daños derivados del mal uso del sitio ni de las interrupciones, errores u omisiones que pudieran existir. Se reserva el derecho a modificar o suspender el sitio y sus contenidos sin previo aviso.',
            en: 'The owner is not liable for damages arising from misuse of the site, nor for any interruptions, errors or omissions that may exist. It reserves the right to modify or suspend the site and its content without prior notice.',
          },
        ],
      },
      {
        heading: { es: '5. Enlaces', en: '5. Links' },
        paragraphs: [
          {
            es: 'Este sitio puede contener enlaces a páginas de terceros. El titular no asume responsabilidad alguna sobre los contenidos o servicios de dichos sitios.',
            en: 'This site may contain links to third-party pages. The owner assumes no responsibility for the content or services of such sites.',
          },
        ],
      },
      {
        heading: { es: '6. Legislación aplicable', en: '6. Applicable law' },
        paragraphs: [
          {
            es: 'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la ley disponga otra cosa.',
            en: 'These terms are governed by Spanish law. For the resolution of any dispute, the parties submit to the courts of the owner’s domicile, unless the law provides otherwise.',
          },
        ],
      },
    ],
  },
  {
    slug: 'privacidad',
    nav: { es: 'Privacidad', en: 'Privacy' },
    title: { es: 'Política de privacidad', en: 'Privacy policy' },
    intro: {
      es: 'Información sobre el tratamiento de tus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
      en: 'Information on the processing of your personal data under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
    },
    sections: [
      {
        heading: { es: '1. Responsable del tratamiento', en: '1. Data controller' },
        paragraphs: [
          {
            es: `El responsable del tratamiento de tus datos es ${LEGAL.titular}, con NIF ${LEGAL.nif}, domicilio en ${LEGAL.domicilio} y correo de contacto ${LEGAL.email}.`,
            en: `The controller of your data is ${LEGAL.titular}, tax ID ${LEGAL.nif}, address ${LEGAL.domicilio}, contact email ${LEGAL.email}.`,
          },
        ],
      },
      {
        heading: { es: '2. Datos que tratamos y finalidad', en: '2. Data we process and purpose' },
        paragraphs: [
          {
            es: 'Tratamos los datos que nos facilitas voluntariamente al contactarnos por correo electrónico (nombre, email y la información que incluyas en tu mensaje), con la finalidad de atender tu consulta y, en su caso, prestarte nuestros servicios.',
            en: 'We process the data you voluntarily provide when contacting us by email (name, email and any information you include in your message), in order to respond to your enquiry and, where applicable, provide our services.',
          },
        ],
      },
      {
        heading: { es: '3. Legitimación', en: '3. Legal basis' },
        paragraphs: [
          {
            es: 'La base legal es tu consentimiento al contactarnos y, cuando proceda, la ejecución de un contrato de servicios o el interés legítimo en responder a tus solicitudes.',
            en: 'The legal basis is your consent when contacting us and, where applicable, the performance of a service contract or the legitimate interest in responding to your requests.',
          },
        ],
      },
      {
        heading: { es: '4. Conservación de los datos', en: '4. Data retention' },
        paragraphs: [
          {
            es: 'Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, si llegamos a trabajar juntos, durante la relación contractual y los plazos legales aplicables. Después se suprimen de forma segura.',
            en: 'We keep your data for as long as necessary to handle your request and, if we end up working together, for the duration of the contractual relationship and the applicable legal periods. They are then securely deleted.',
          },
        ],
      },
      {
        heading: { es: '5. Destinatarios', en: '5. Recipients' },
        paragraphs: [
          {
            es: 'No cedemos tus datos a terceros, salvo obligación legal. Podemos utilizar proveedores de servicios (alojamiento, correo) que actúan como encargados del tratamiento con las debidas garantías.',
            en: 'We do not share your data with third parties except where legally required. We may use service providers (hosting, email) acting as data processors with the appropriate safeguards.',
          },
        ],
      },
      {
        heading: { es: '6. Tus derechos', en: '6. Your rights' },
        paragraphs: [
          {
            es: `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${LEGAL.email}. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
            en: `You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${LEGAL.email}. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
          },
        ],
      },
      {
        heading: { es: '7. Seguridad', en: '7. Security' },
        paragraphs: [
          {
            es: 'Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.',
            en: 'We apply appropriate technical and organisational measures to protect your data against unauthorised access, loss or alteration.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    nav: { es: 'Cookies', en: 'Cookies' },
    title: { es: 'Política de cookies', en: 'Cookie policy' },
    intro: {
      es: 'Información sobre el uso de cookies en este sitio, conforme al artículo 22.2 de la LSSI-CE.',
      en: 'Information on the use of cookies on this site, in accordance with article 22.2 of the LSSI-CE.',
    },
    sections: [
      {
        heading: { es: '1. ¿Qué son las cookies?', en: '1. What are cookies?' },
        paragraphs: [
          {
            es: 'Las cookies son pequeños archivos que se descargan en tu dispositivo al visitar una web y permiten su funcionamiento, así como recopilar información sobre la navegación.',
            en: 'Cookies are small files downloaded to your device when you visit a website. They allow the site to work and can collect information about your browsing.',
          },
        ],
      },
      {
        heading: { es: '2. Cookies que utilizamos', en: '2. Cookies we use' },
        paragraphs: [
          {
            es: 'Cookies técnicas necesarias: imprescindibles para el funcionamiento del sitio y para recordar tus preferencias (como el idioma o tu decisión sobre cookies). No requieren consentimiento.',
            en: 'Necessary technical cookies: essential for the site to work and to remember your preferences (such as language or your cookie choice). They do not require consent.',
          },
          {
            es: 'No utilizamos cookies de terceros, de seguimiento ni de análisis. Todos los recursos del sitio, incluidas las fuentes tipográficas, se sirven desde nuestro propio dominio, por lo que no se comparte ningún dato con servicios externos.',
            en: 'We do not use third-party, tracking or analytics cookies. All site resources, including the typefaces, are served from our own domain, so no data is shared with external services.',
          },
        ],
      },
      {
        heading: { es: '3. Gestión de cookies', en: '3. Managing cookies' },
        paragraphs: [
          {
            es: 'Puedes aceptar o rechazar las cookies no necesarias desde el aviso que aparece al entrar. Además, puedes configurar o eliminar las cookies desde los ajustes de tu navegador en cualquier momento.',
            en: 'You can accept or reject non-essential cookies from the banner shown on entry. You can also configure or delete cookies from your browser settings at any time.',
          },
        ],
      },
      {
        heading: { es: '4. Consentimiento', en: '4. Consent' },
        paragraphs: [
          {
            es: 'Al aceptar, consientes el uso de las cookies descritas. Puedes cambiar tu decisión en cualquier momento borrando las cookies del sitio en tu navegador.',
            en: 'By accepting, you consent to the use of the cookies described. You can change your decision at any time by clearing the site’s cookies in your browser.',
          },
        ],
      },
    ],
  },
  {
    slug: 'terminos',
    nav: { es: 'Términos', en: 'Terms' },
    title: { es: 'Términos y condiciones', en: 'Terms & conditions' },
    intro: {
      es: 'Condiciones generales que regulan la contratación de los servicios de diseño y desarrollo web ofrecidos por el titular.',
      en: 'General terms governing the contracting of the web design and development services offered by the owner.',
    },
    sections: [
      {
        heading: { es: '1. Objeto', en: '1. Purpose' },
        paragraphs: [
          {
            es: `${BRAND} ofrece servicios de branding, diseño y desarrollo web, tiendas online y mantenimiento, bajo una cuota fija mensual (tarifa plana) según el plan contratado.`,
            en: `${BRAND} provides branding, web design and development, online stores and maintenance services, under a fixed monthly fee (flat rate) according to the plan contracted.`,
          },
        ],
      },
      {
        heading: { es: '2. Tarifas y pagos', en: '2. Fees and payments' },
        paragraphs: [
          {
            es: 'Los servicios se prestan mediante una cuota mensual que incluye alojamiento, certificado SSL, mantenimiento y actualizaciones, según el plan elegido. La cuota se factura de forma periódica y los precios pueden actualizarse comunicándolo previamente al cliente.',
            en: 'Services are provided through a monthly fee that includes hosting, SSL certificate, maintenance and updates, according to the chosen plan. The fee is billed periodically and prices may be updated with prior notice to the client.',
          },
          {
            es: 'El dominio no está incluido en la cuota: su registro es un pago único e independiente, cuyo importe varía según el nombre elegido. El titular puede gestionar su compra por cuenta del cliente.',
            en: 'The domain is not included in the fee: its registration is a separate one-time payment whose amount varies depending on the chosen name. The owner may handle its purchase on behalf of the client.',
          },
          {
            es: 'Además de la cuota mensual, la contratación de cualquier plan incluye una alta única de puesta en marcha, cuyo importe depende del plan contratado (consultar tarifas vigentes); esta alta no es reembolsable una vez iniciado el servicio. En los planes con tienda online, las comisiones de la pasarela de pago las factura directamente el proveedor de pago (p. ej. Stripe o Redsys) y no forman parte de la cuota del titular.',
            en: "In addition to the monthly fee, signing up to any plan includes a one-time setup fee, the amount of which depends on the plan contracted (see current pricing); this setup fee is non-refundable once the service has started. On plans that include an online store, payment gateway fees are billed directly by the payment provider (e.g. Stripe or Redsys) and are not part of the owner's fee.",
          },
        ],
      },
      {
        heading: { es: '3. Propiedad y alcance del servicio', en: '3. Ownership and scope of service' },
        paragraphs: [
          {
            es: `El diseño, el código y la infraestructura de la web son desarrollados y mantenidos por ${BRAND}, que conserva su titularidad. El servicio consiste en mantener la web operativa y actualizada mientras el cliente mantenga su tarifa plana en vigor.`,
            en: `The design, code and infrastructure of the website are developed and maintained by ${BRAND}, which retains ownership of them. The service consists of keeping the website operational and up to date while the client keeps their flat-rate plan active.`,
          },
        ],
      },
      {
        heading: { es: '4. Duración y cancelación', en: '4. Term and cancellation' },
        paragraphs: [
          {
            es: 'No existe permanencia. El cliente puede cancelar cuando lo desee; al finalizar la relación, la web deja de renovarse y se da de baja. El dominio, si fue adquirido, seguirá las condiciones de su registro.',
            en: 'There is no minimum commitment. The client may cancel at any time; when the relationship ends, the website stops being renewed and is taken down. The domain, if acquired, will follow the conditions of its registration.',
          },
        ],
      },
      {
        heading: { es: '5. Obligaciones del cliente', en: '5. Client obligations' },
        paragraphs: [
          {
            es: 'El cliente se compromete a facilitar la información y los materiales necesarios para la prestación del servicio, y a que dichos contenidos no infrinjan derechos de terceros ni la legislación vigente.',
            en: 'The client agrees to provide the information and materials needed to deliver the service, and to ensure that such content does not infringe third-party rights or applicable law.',
          },
        ],
      },
      {
        heading: { es: '6. Responsabilidad', en: '6. Liability' },
        paragraphs: [
          {
            es: 'El titular pondrá todos los medios razonables para garantizar la disponibilidad y seguridad del servicio, sin que pueda responsabilizarse de incidencias ajenas a su control (proveedores, fuerza mayor, etc.).',
            en: 'The owner will use all reasonable means to ensure the availability and security of the service, but cannot be held responsible for incidents beyond its control (providers, force majeure, etc.).',
          },
        ],
      },
      {
        heading: { es: '7. Legislación aplicable', en: '7. Applicable law' },
        paragraphs: [
          {
            es: 'Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales del domicilio del titular, salvo que la ley disponga otra cosa.',
            en: 'These terms are governed by Spanish law. Any dispute will be submitted to the courts of the owner’s domicile, unless the law provides otherwise.',
          },
        ],
      },
    ],
  },
];

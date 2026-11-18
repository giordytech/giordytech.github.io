/**
 * The site's text, in Italian, and the data behind its pictures, kept apart from the layout so they can be
 * edited without touching components. The text is carried over from the Jekyll site's `index.md` (last edit
 * February 2023), with the service headings from the owner's A5 flyer (2026).
 */

export interface Service {
  /** The section's anchor, such as `#riparazioni`. */
  id: string;
  title: string;
  /** The section's earlier heading, kept as its bold opening line where the flyer's wording took its place. */
  lead?: string;
  paragraphs: readonly string[];
  /** Introduced by "Esempi:". */
  examples?: readonly string[];
  image?: Photo;
}

/** A smaller copy of a photo: the same picture and proportions, narrower. */
export interface PhotoCopy {
  src: string;
  width: number;
}

/**
 * A photo at its full size, with smaller copies so a phone doesn't download the full size for a 343-pixel-wide
 * column. The numbers must match the files in `public/images/`: nothing checks them. The service photos are
 * at most 1280 pixels wide, or their originals' own width when narrower (the Task Manager screenshot is 1190);
 * high-density screens between 600 and 899 pixels wide could use more, but there is nothing sharper to give them.
 */
export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  smallerCopies: readonly PhotoCopy[];
}

export const site = {
  name: 'GiordyTech',
  /** Where the site is published: the base of canonical links, the sitemap and social previews. */
  url: 'https://giordytech.github.io/',
  tagline: 'Assemblaggio e riparazione hardware.',
  /** The home page's title in search results and link previews, worded as on the old site. */
  homeTitle: 'Assemblaggio PC desktop con allestimento gaming | GiordyTech',
  /**
   * The picture shown when a link to the site is shared, at 1200×630: the square social-media logo in the middle,
   * its blue gradient carried across the whole picture so it reads as one background. Its margins are the
   * designer's, so a platform that crops it to a circle keeps the laptop and the name.
   */
  sharePreview: {
    src: '/images/logo-og.png',
    width: 1200,
    height: 630,
    alt: 'GiordyTech',
  },
  /**
   * The header's mark: the laptop and figure from the social-media logo, white on transparent, painted in the
   * theme's color. Three times the size it is shown at, for sharp high-density screens.
   */
  logo: { src: '/images/logo-mark.png', width: 204, height: 132 },
  contact: {
    label: 'Contattaci oggi stesso, non aspettare!',
    /** From the owner's flyer. */
    offer: 'Preventivo gratuito e senza impegno',
    email: 'giordytech@gmail.com',
    // Phone and address as the business publishes them on Google Maps.
    phone: '+39 379 146 1433',
    address: {
      street: 'Via S. Andrea, 27',
      postalCode: '09010',
      locality: 'Gonnesa',
      /** The province's two-letter code, as the business publishes it. */
      region: 'SU',
      country: 'IT',
    },
  },
} as const;

/** The page shown for an address that doesn't exist. */
export const notFoundPage = {
  title: 'Pagina non trovata',
  message: 'Questa pagina non esiste.',
  homeLink: 'Torna alla home',
} as const;

/** A chat with the business number on WhatsApp: the number in international form, digits only. */
export const whatsappHref = `https://wa.me/${site.contact.phone.replace(/\D/g, '')}`;

/**
 * A chat with the business number on Telegram. It opens only if the account lets people find it by phone number
 * (Telegram's privacy setting "Who can find me by my number").
 */
export const telegramHref = `https://t.me/+${site.contact.phone.replace(/\D/g, '')}`;

/** The phone number as a link that starts a call. */
export const phoneHref = `tel:${site.contact.phone.replaceAll(' ', '')}`;

const { address } = site.contact;

/** The address on one line, as Google Maps shows it: "Via S. Andrea, 27, 09010 Gonnesa SU". */
export const addressLine = `${address.street}, ${address.postalCode} ${address.locality} ${address.region}`;

/** The address on Google Maps, searched by business name and address so it lands on the business's own listing. */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${addressLine}`)}`;

/** The business as schema.org structured data, for search engines' local results. */
export const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  url: site.url,
  telephone: site.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.contact.address.street,
    postalCode: site.contact.address.postalCode,
    addressLocality: site.contact.address.locality,
    addressRegion: site.contact.address.region,
    addressCountry: site.contact.address.country,
  },
} as const;

/**
 * The services, headed with the owner's flyer wording ("Volantino A5"). The order is a guess with no sales data
 * behind it: PC builds first, as the old site and the home title lead with them, then repairs, the first word of
 * the Facebook page's title. The two services only the flyer names have a heading and the flyer's photo, and
 * no text until the owner writes about them.
 */
export const services: readonly Service[] = [
  {
    id: 'pc-gaming',
    title: 'Realizzazione PC per ogni esigenza: Studio, Lavoro, Gaming',
    lead: 'Assemblaggio PC desktop con allestimento gaming',
    paragraphs: [
      'Scegliamo assieme i componenti migliori per il tuo allestimento per un PC gaming desktop in base alle tue esigenze.',
      'Una volta completata la selezione, provvederò ad ordinare i tuoi componenti a prezzi competitivi.',
      "Provvederò a completare l'intero assemblaggio in modo che tu possa immediatamente iniziare a sfruttare la potenza del tuo nuovo PC.",
    ],
    image: {
      src: '/images/pc-gaming.jpg',
      alt: 'PC gaming desktop',
      width: 1280,
      height: 960,
      smallerCopies: [
        { src: '/images/pc-gaming-640.jpg', width: 640 },
        { src: '/images/pc-gaming-960.jpg', width: 960 },
      ],
    },
  },
  {
    id: 'riparazioni',
    title: 'Riparazioni hardware e software',
    paragraphs: [
      'Il tuo dipartimento IT a portata di click! Mandaci la tua richiesta e verificheremo assieme cosa non va col tuo computer!',
    ],
    examples: [
      'Sostituzione tastiera',
      'Sostituzione alimentatore portatile',
      'Riparazione errori di sistema',
      'Riparazione installazioni',
      'Recupero dati con software dedicati',
    ],
  },
  {
    id: 'vecchio-pc',
    title: 'Pulizia e ottimizzazioni PC, aggiornamenti, backup e ripristino',
    lead: 'Trasforma il tuo vecchio PC in uno come nuovo',
    paragraphs: [
      'Spesso non è necessario comprare un nuovo PC spendendo tanti soldi. Con una spesa molto contenuta, possiamo applicare piccole migliorie a livello hardware/software dai grandi risultati. Non crederai ai tuoi occhi!',
    ],
    examples: [
      'Aggiornamento sistema operativo',
      'Pulizia di sistema',
      'Controllo e pulizia virus / malware',
      'Selezione ed installazione componenti hardware potenziati',
    ],
    // The flyer pairs this service with this screenshot.
    image: {
      src: '/images/pulizia-pc.jpg',
      alt: 'Gestione attività di Windows, con il grafico di utilizzo della CPU',
      width: 1190,
      height: 746,
      smallerCopies: [
        { src: '/images/pulizia-pc-640.jpg', width: 640 },
        { src: '/images/pulizia-pc-960.jpg', width: 960 },
      ],
    },
  },
  {
    id: 'installazione-hardware',
    title: 'Installazione Hardware e Driver: Schede Grafiche, Ventole, Webcam',
    paragraphs: [],
    // The flyer pairs this service with this photo.
    image: {
      src: '/images/riparazioni.jpg',
      alt: 'Scheda madre su un tappetino da lavoro, con due cacciaviti',
      width: 1280,
      height: 960,
      smallerCopies: [
        { src: '/images/riparazioni-640.jpg', width: 640 },
        { src: '/images/riparazioni-960.jpg', width: 960 },
      ],
    },
  },
  {
    id: 'installazione-software',
    title: 'Installazione e configurazione applicazioni e software',
    paragraphs: [],
    // The flyer pairs this service with this photo.
    image: {
      src: '/images/installazione-software.jpg',
      alt: 'Computer portatile con un programma di fotoritocco aperto',
      width: 1280,
      height: 853,
      smallerCopies: [
        { src: '/images/installazione-software-640.jpg', width: 640 },
        { src: '/images/installazione-software-960.jpg', width: 960 },
      ],
    },
  },
];

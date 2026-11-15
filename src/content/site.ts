/**
 * The site's text, in Italian, and the data behind its pictures, kept apart from the layout so they can be
 * edited without touching components. The text is carried over from the Jekyll site's `index.md` (last edit
 * February 2023).
 */

export interface Service {
  /** The section's anchor, such as `#riparazioni`. */
  id: string;
  title: string;
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
 * 1280 pixels wide, the originals' own width; high-density screens between 600 and 899 pixels wide could use
 * more, but there is nothing sharper to give them.
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
  /** The picture shown when a link to the site is shared: the logo, centered on white, at 1200×630. */
  sharePreview: {
    src: '/images/logo-og.png',
    width: 1200,
    height: 630,
    alt: 'GiordyTech',
  },
  logo: { src: '/images/logo.png', alt: 'GiordyTech' },
  contact: {
    label: 'Contattaci oggi stesso, non aspettare!',
    email: 'giordytech@gmail.com',
  },
} as const;

export const services: readonly Service[] = [
  {
    id: 'pc-gaming',
    title: 'Assemblaggio PC desktop con allestimento gaming',
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
    id: 'vecchio-pc',
    title: 'Trasforma il tuo vecchio PC in uno come nuovo',
    paragraphs: [
      'Spesso non è necessario comprare un nuovo PC spendendo tanti soldi. Con una spesa molto contenuta, possiamo applicare piccole migliorie a livello hardware/software dai grandi risultati. Non crederai ai tuoi occhi!',
    ],
    examples: [
      'Aggiornamento sistema operativo',
      'Pulizia di sistema',
      'Controllo e pulizia virus / malware',
      'Selezione ed installazione componenti hardware potenziati',
    ],
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
    image: {
      src: '/images/riparazioni.jpg',
      alt: 'Riparazioni hardware',
      width: 1280,
      height: 960,
      smallerCopies: [
        { src: '/images/riparazioni-640.jpg', width: 640 },
        { src: '/images/riparazioni-960.jpg', width: 960 },
      ],
    },
  },
];

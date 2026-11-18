/**
 * Text for the pages beyond the home page, in Italian. The paths stay in English (`/contact/`, `/privacy/`).
 * Written new in 2026: the WordPress site's own contact and privacy texts were lost.
 */

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/contact/', label: 'Contatti' },
] as const;

/** The kinds of request the contact form offers; the value is what the email's subject line says. */
export const requestTypes = [
  'Riparazione PC o portatile',
  'Riparazione smartphone o tablet',
  'PC su misura (studio, lavoro, gaming)',
  'Problemi con app o programmi',
  'Pulizia, ottimizzazione, backup',
  'Altro',
] as const;

/** The line for urgent matters, on the home page and the contact page: the number, then WhatsApp and Telegram. */
export const urgent = {
  text: 'Hai un’urgenza? Contattaci al',
} as const;

export const contactPage = {
  path: '/contact/',
  title: 'Contatti e richiesta di assistenza',
  description:
    'Richiedi un preventivo gratuito a GiordyTech: riparazione PC e smartphone, PC su misura, problemi con app e programmi.',
  heading: 'Raccontaci il problema, al resto pensiamo noi',
  intro: [
    'PC che non si accende, telefono con lo schermo rotto, un programma che si blocca, o il PC dei tuoi sogni da costruire da zero.',
    'Scrivici due righe: ti rispondiamo con un preventivo gratuito e senza impegno.',
  ],
  form: {
    requestType: 'Di cosa hai bisogno?',
    name: 'Nome',
    reply: 'Email o telefono per risponderti',
    device: 'Dispositivo (marca e modello, se lo sai)',
    message: 'Descrivi la richiesta',
    messageHelp: 'Cosa succede, da quando, cosa hai già provato.',
    source: 'Come ci hai conosciuto? (facoltativo)',
    sources: ['Passaparola', 'Volantino', 'Google', 'Facebook', 'Altro'],
    privacy: 'Ho letto l’informativa privacy',
    submit: 'Invia la richiesta',
    afterSubmit:
      'Si apre la tua app di posta con la richiesta già scritta: controllala e premi Invia.',
  },
} as const;

/**
 * The privacy and cookie notice: short and generic on purpose, worded so it still holds if the site later adds
 * cookies, analytics or a form backend. It names no hosting or other provider.
 */
export const privacyPage = {
  path: '/privacy/',
  title: 'Privacy e cookie',
  description:
    'Informativa sul trattamento dei dati personali e sull’uso dei cookie del sito GiordyTech.',
  heading: 'Informativa privacy e cookie',
  sections: [
    {
      title: 'Titolare del trattamento',
      paragraphs: [
        'Titolare del trattamento è GiordyTech, contattabile all’indirizzo giordytech@gmail.com.',
      ],
    },
    {
      title: 'Dati trattati e finalità',
      paragraphs: [
        'Sono trattati i dati di navigazione acquisiti dai sistemi informatici nel normale funzionamento del sito, e i dati forniti volontariamente dall’utente tramite il modulo di contatto, l’email, il telefono o i servizi di messaggistica.',
        'I dati sono trattati per fornire il sito, garantirne la sicurezza, rispondere alle richieste e svolgere i servizi richiesti. Base giuridica: l’esecuzione di misure precontrattuali o del contratto, il legittimo interesse del titolare e, ove richiesto, il consenso dell’interessato (art. 6 GDPR).',
      ],
    },
    {
      title: 'Cookie',
      paragraphs: [
        'Il sito può utilizzare cookie tecnici e strumenti analoghi, necessari al suo funzionamento, per i quali non è richiesto il consenso. Eventuali cookie analitici o di terze parti non strettamente necessari sono utilizzati solo previo consenso, revocabile in qualsiasi momento.',
      ],
    },
    {
      title: 'Comunicazione e conservazione',
      paragraphs: [
        'I dati non sono diffusi né ceduti a terzi per finalità commerciali. Possono essere trattati da fornitori di servizi tecnici che agiscono come responsabili del trattamento, anche al di fuori dell’Unione europea, con le garanzie previste dal GDPR. I dati sono conservati per il tempo necessario alle finalità indicate e agli obblighi di legge.',
      ],
    },
    {
      title: 'Diritti dell’interessato',
      paragraphs: [
        'L’interessato può esercitare i diritti di cui agli artt. 15-22 del Regolamento UE 2016/679 (GDPR): accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso, scrivendo al titolare. Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.',
      ],
    },
  ],
  updated: 'Ultimo aggiornamento: novembre 2026',
} as const;

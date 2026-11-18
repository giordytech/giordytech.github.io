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

/** The line for urgent matters, on the home page and the contact page: call, or write on WhatsApp. */
export const urgent = {
  text: 'Hai un’urgenza? Chiama o scrivi su WhatsApp:',
  whatsapp: 'Scrivi su WhatsApp',
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

export const privacyPage = {
  path: '/privacy/',
  title: 'Privacy e cookie',
  description:
    'Come GiordyTech tratta i dati di chi visita il sito e invia una richiesta.',
  heading: 'Informativa su privacy e cookie',
  sections: [
    {
      title: 'Chi tratta i dati',
      paragraphs: [
        'Il titolare del trattamento è GiordyTech. Per qualsiasi domanda sui tuoi dati puoi scrivere a giordytech@gmail.com.',
      ],
    },
    {
      title: 'Cookie',
      paragraphs: [
        'Questo sito non usa cookie, né di profilazione né di statistica, e non contiene strumenti di tracciamento di terze parti.',
        'Il sito ricorda nel tuo browser solo se preferisci il tema chiaro o scuro. È un’impostazione tecnica: resta sul tuo dispositivo e non viene inviata a nessuno.',
      ],
    },
    {
      title: 'Richieste di assistenza',
      paragraphs: [
        'Il modulo nella pagina Contatti non invia dati al sito: prepara un messaggio nella tua app di posta, che spedisci tu.',
        'Usiamo i dati che ci scrivi (nome, contatto, descrizione del problema) solo per risponderti e, se lo chiedi, per svolgere il lavoro. Non li cediamo a terzi e non li usiamo per pubblicità.',
        'Conserviamo i messaggi per il tempo necessario a gestire la richiesta e gli eventuali obblighi di legge. Puoi chiedere in ogni momento di vederli, correggerli o cancellarli scrivendo all’indirizzo sopra.',
      ],
    },
    {
      title: 'Hosting',
      paragraphs: [
        'Il sito è pubblicato su GitHub Pages (GitHub, Inc.), che per ragioni tecniche e di sicurezza può registrare l’indirizzo IP di chi visita le pagine. Maggiori dettagli nell’informativa privacy di GitHub.',
      ],
    },
    {
      title: 'I tuoi diritti',
      paragraphs: [
        'Hai i diritti previsti dal Regolamento UE 2016/679 (GDPR), compreso quello di presentare reclamo al Garante per la protezione dei dati personali.',
      ],
    },
  ],
  updated: 'Ultimo aggiornamento: novembre 2026',
} as const;

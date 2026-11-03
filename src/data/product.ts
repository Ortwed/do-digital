// Produktet "Hjemmeside du selv ejer". Tekster fra designudkastene i design/.
// Fakta, der ikke må ændres uden aftale: se design/BRIEF.md.

export const product = {
  name: 'Hjemmeside du selv ejer',
  price: '15.000 kr.',
  priceNote: 'ekskl. moms',
  /** Hvad de 15.000 kr. dækker. null = vises som pladsholder. */
  scope: null as string | null,
};

export const priceBullets = [
  'Ingen skjulte gebyrer',
  'Ingen løbende licens på selve hjemmesiden',
  'Hosting og mail betaler du selv, direkte til udbyderne',
];

export const threeThings = [
  { title: 'Du ejer alt.', body: 'Domæne, hjemmeside, kildefiler og alle konti står i dit eget navn.' },
  { title: 'Ingen skjulte gebyrer.', body: 'Og ingen løbende licens på selve hjemmesiden.' },
  { title: 'Du kan tage den med til en anden.', body: 'En ny udvikler kan overtage via dokumentationen, uden os.' },
];

export const painPoints = [
  'Bureauet ejer designet og annoncekontoen, så du starter forfra, hvis du skifter.',
  'Aftalen fornyes automatisk, og du skal opsige i god tid.',
  'Ingen eller upålidelig måling, og dine anmeldelser er usynlige for Google.',
  'Tekniske fejl, du ikke kan se: manglende overskrifter, forkerte fejlsider og tunge billeder.',
  'Du er afhængig af én leverandør til alt, også din mail.',
];

export const steps = [
  {
    title: 'Afklaring og adgange',
    body: 'Skriftligt OK til at tale med din nuværende leverandør, aftalens lukkedato, hvem der ejer dit domæne, hvem der leverer din mail, og hvor stor din postkasse er.',
  },
  {
    title: 'Interview og billeder',
    body: 'Vi stiller de rigtige spørgsmål og får fotos af færdige projekter og portræt af ejer og hold.',
  },
  { title: 'Demo til godkendelse', body: 'Du ser hele hjemmesiden på en testadresse, før noget går live.' },
  { title: 'Faktatjek', body: 'Du godkender hver påstand om erfaring, materialer, ansatte og område.' },
  {
    title: 'Go-live',
    body: 'Domæne og mail flyttes en aften, mens vi har dig på telefon. Hjemmesiden kan flakke i op til en time under skiftet.',
  },
  {
    title: 'Overdragelse',
    body: 'Alle konti, kildefiler, dokumentation og et ejerskabsdokument afleveres, og vi følger op i 30 dage.',
  },
];

export const includes = [
  'En ny hjemmeside bygget på dine egne fakta, tekster, cases og anmeldelser.',
  'Bygget, så Google og AI-søgning kan finde og forstå dig, og så gamle adresser sendes videre til de nye.',
  'Flytning af dit domæne og din mail uden nedetid.',
  'Cookiebanner og besøgstal i dit eget navn, så du kan se, hvor mange der ringer og skriver.',
  'Kontaktformular og tydeligt telefonnummer, som virker på mobilen.',
  'Overdragelse med alle konti, kildefiler, dokumentation og et ejerskabsdokument, som kun du har.',
  // Foreslået, ikke endeligt afklaret (se BRIEF.md)
  'Fejlrettelser i 30 dage efter go-live.',
];

export const ownershipTable = [
  { what: 'Domæne', owner: 'Dig', payer: 'Dig til domæneudbyderen', note: 'Står i dit navn, med MitID-login' },
  { what: 'Hosting', owner: 'Dig', payer: 'Dig til hostingudbyderen', note: 'Konto i dit navn' },
  { what: 'Mail', owner: 'Dig', payer: 'Dig til mailudbyderen', note: 'Størrelsen på din nuværende postkasse afgør pakken' },
  { what: 'Hjemmeside og kildefiler', owner: 'Dig', payer: 'Indgår i prisen', note: 'Kan overtages af en anden udvikler' },
  { what: 'Besøgstal og søgedata fra Google og Bing', owner: 'Dig', payer: 'Gratis', note: 'Oprettes i dit navn' },
  {
    what: 'Kontaktformular',
    owner: 'Dig',
    payer: 'Gratis plan',
    note: 'Billedupload kræver betalt plan, ca. 10 USD om måneden',
  },
];

/** price: null = ikke afklaret, vises som pladsholder. undefined = ingen pris vises. */
export const addons: { title: string; body: string; price?: string | null; placeholder?: string }[] = [
  {
    title: 'Opdateringspakke',
    body: 'Nye cases, ændrede tekster og løbende indhold. Du kan i stedet bruge dokumentationen og en anden leverandør.',
    price: null,
    placeholder: '[PRIS]',
  },
  {
    title: 'Serviceaftale',
    body: 'Fornyelse af domænet, sikkerhedscertifikat, overvågning og kontrol af formularer. Det er dit eget ansvar efter overdragelsen, men du kan tilkøbe det hos os.',
    price: null,
    placeholder: '[PRIS]',
  },
  {
    title: 'Tillæg ved særlige opgaver',
    body: 'Overtagelse fra et uvilligt bureau, oprydning efter skadelig kode eller flytning af en meget stor postkasse. Prissættes efter omfang.',
    price: null,
    placeholder: '[PRIS EFTER OMFANG]',
  },
  { title: 'Generel marketing og indhold', body: 'Efter dit eget ønske.' },
];

export const productContact = {
  variant: 'blue' as const,
  heading: 'Næste skridt er et',
  highlight: 'afklarings\u00ADmøde.',
  text: 'Bagefter får du en liste over de adgange, vi skal bruge for at komme i gang.',
  cta: 'Book afklaringsmøde',
};

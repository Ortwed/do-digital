export interface Case {
  slug: string;
  client: string;
  /** null, indtil domænet er kendt. Så vises ingen links til sitet. */
  url: string | null;
  domain: string | null;
  /** Billede i /public/cases/. Sæt til null, indtil der er et screenshot. */
  image: string | null;
  headline: string;
  teaser: string;
  industry: string;
  seo: { title: string; description: string };
  intro: string[];
  /** Valgfrit: kundens udgangspunkt med en før/nu-sammenligning. */
  challenge?: {
    paragraphs: string[];
    before?: { heading: string; items: string[] };
    after?: { heading: string; items: string[] };
  };
  task: string[];
  /** Linjen over løsningslisten. Standard: "Vi byggede en ny hjemmeside med fokus på:" */
  solutionIntro?: string;
  solution: string[];
  result: string[];
  /** Valgfrit: nøgletal fra målingerne. */
  learnings?: { heading: string; intro?: string; figures: { value: string; label: string }[]; outro?: string };
  /** Afsluttende afsnit rettet mod virksomheder i samme branche. */
  forYou: { heading: string; body: string };
}

export const cases: Case[] = [
  {
    slug: 'ortwed-anlaegs-entreprise',
    client: 'ORTWED Anlægs Entreprise',
    url: 'https://ortwed.dk',
    domain: 'ortwed.dk',
    image: '/cases/ortwed.webp',
    headline: 'En hjemmeside, der giver kunderne tryghed og virksomheden ejerskab',
    teaser: 'En hjemmeside, der giver kunderne tryghed og virksomheden ejerskab.',
    industry: 'Anlæg, belægning og indkørsler',
    seo: {
      title: 'Case: Hjemmeside til anlægsentreprise, ORTWED Anlægs Entreprise',
      description:
        'Se hvordan D&O Digital byggede en ny hjemmeside til ORTWED Anlægs Entreprise. En hjemmeside til anlægsentreprise og belægning, som virksomheden selv ejer.',
    },
    intro: [
      'ORTWED Anlægs Entreprise arbejder med anlægsopgaver, belægning, indkørsler og udendørsarealer.',
      'Når kunder investerer i deres hjem, er det ofte større projekter, hvor tillid, rådgivning og ordentlighed betyder mindst lige så meget som det færdige resultat. Derfor skulle hjemmesiden afspejle det, ORTWED står for: personlig kontakt, erfaring og ansvar for hele projektet.',
    ],
    challenge: {
      paragraphs: [
        'ORTWED Anlægs Entreprise er en anlægsgartner og brolægger i Hundested. Virksomheden havde en hjemmeside og en aftale om synlighed på Google, der havde kørt i omkring 3,5 år.',
        'Men virksomheden havde ingen adgang til sine egne søgedata fra Google og kunne derfor ikke selv se, hvad aftalen gav. Hjemmesiden var synlig på to søgeord.',
        'Målet var en hjemmeside, der er bygget til at blive fundet, og hvor virksomheden selv kan se, hvad den giver.',
      ],
      before: {
        heading: 'Før',
        items: [
          'En aftale om synlighed i omkring 3,5 år',
          'Ingen adgang til egne søgedata',
          'Synlig på to søgeord',
          'En tung forside, der åbnede langsomt',
        ],
      },
      after: {
        heading: 'Nu',
        items: [
          'En forside, der vejer omkring 80 % mindre',
          'Opkald og formularer måles som henvendelser',
          'Eget cookiebanner, så målingen sker med samtykke',
          'En side pr. projekt under referencer',
          'Gamle adresser sendes videre til de nye',
        ],
      },
    },
    task: [
      'Vi skulle skabe en hjemmeside, der præsenterer ORTWED Anlægs Entreprise professionelt og gør det nemt for potentielle kunder at forstå virksomhedens ydelser og tage kontakt.',
      'Samtidig var det vigtigt, at hjemmesiden ikke blot blev endnu en løsning, som virksomheden skulle betale for uden selv at have kontrol over.',
    ],
    solution: [
      'En tydelig præsentation af ORTWED Anlægs Entreprise og virksomhedens kompetencer.',
      'En jordnær kommunikation, der afspejler virksomhedens måde at arbejde på.',
      'Relevant indhold om indkørsler, belægning og anlægsarbejde.',
      'En enkel struktur, der gør det nemt for besøgende at finde information og kontakte virksomheden.',
      'Et digitalt fundament, hvor virksomheden selv ejer og har adgang til sine løsninger.',
    ],
    result: [
      'ORTWED Anlægs Entreprise har fået en ny hjemmeside, der understøtter virksomhedens identitet og gør det lettere at præsentere sine ydelser over for nye kunder.',
      'Samtidig har virksomheden fået en løsning, hvor ejerskab og frihed er tænkt ind fra begyndelsen.',
      'Hjemmesiden gik live den 27. august 2026. Den er bygget, så Google og AI-søgning kan forstå, hvad virksomheden laver, og den viser sine egne billeder, når den bliver delt på for eksempel Facebook.',
    ],
    learnings: {
      heading: 'Det har vi lært af målingerne',
      intro: 'Fordi opkald og formularer bliver målt, kan virksomheden se, hvad hjemmesiden faktisk giver.',
      figures: [
        { value: 'ca. 2/3', label: 'af henvendelserne kommer pr. telefon' },
        { value: '29 %', label: 'af besøgene på forsiden går videre til referencerne' },
      ],
      outro: 'Folk vil se arbejdet. Derfor har hvert projekt sin egen side.',
    },
    forYou: {
      heading: 'Driver du en anlægs-, anlægsgartner- eller belægnings\u00ADvirksomhed?',
      body: 'Vi kender behovet for en hjemmeside, der viser jeres arbejde, skaber tillid hos kunder med større projekter og gør det nemt at tage kontakt. Og som I selv ejer. Det gælder også for andre mindre håndværksvirksomheder.',
    },
  },
  {
    slug: 'rosendal-tomrer-entreprise',
    client: 'Rosendal Tømrer Entreprise',
    url: 'https://rosendal-tomrer.dk',
    domain: 'rosendal-tomrer.dk',
    image: '/cases/rosendal-tomrer.webp',
    headline: 'En hjemmeside, der afspejler håndværket og menneskene bag',
    teaser: 'En hjemmeside, der afspejler håndværket og menneskene bag.',
    industry: 'Tømrerarbejde',
    seo: {
      title: 'Case: Hjemmeside til tømrer, Rosendal Tømrer Entreprise',
      description:
        'Se hvordan D&O Digital byggede en ny hjemmeside til Rosendal Tømrer Entreprise. En hjemmeside til tømrervirksomhed med fokus på håndværk, synlighed og eget ejerskab.',
    },
    intro: [
      'Rosendal Tømrer Entreprise er en tømrervirksomhed med fokus på ordentligt håndværk, personlig kontakt og løsninger, der holder.',
      'Hjemmesiden skulle give potentielle kunder et indblik i virksomheden, dens arbejde og de mennesker, der står bag.',
    ],
    challenge: {
      paragraphs: [
        'Rosendal Tømrer Entreprise ApS i Hundested havde allerede en hjemmeside. Men den var ejet af det bureau, der havde lavet den, og det samme gjaldt designet og annoncekontoen. Aftalen fornyede sig automatisk.',
        'Under overfladen var der også problemer, som en besøgende ikke ser, men som Google gør: Siderne manglede overskrifter, fejlsiderne var sat forkert op, Google fik ingen hjælp til at forstå, hvad virksomheden laver, og hjemmesiden var blevet ramt af skadelig kode.',
        'Den slags aftaler fungerer, så længe alt kører. Udfordringen kommer den dag, man vil noget andet. Så ejer man ikke selv det, man har betalt for, og et skifte betyder i praksis, at man starter forfra.',
        'Målet var derfor en løsning, hvor alt står i virksomhedens eget navn, og hvor indehaveren selv bestemmer, hvem der skal hjælpe fremover.',
      ],
      before: {
        heading: 'Før',
        items: [
          'Hjemmeside, design og annoncekonto ejet af bureauet',
          'En aftale, der fornyede sig automatisk',
          'Fejl, der gjorde det sværere for Google at forstå siden',
          'Skadelig kode på hjemmesiden',
        ],
      },
      after: {
        heading: 'Nu: i virksomhedens eget navn',
        items: [
          'En ny hjemmeside, bygget fra bunden',
          'Domænet og mailen flyttet over, inklusive en postkasse på 11,2 GB',
          'Besøgstal og søgedata fra Google i ejerens eget navn',
          'Google-profilen overtaget',
          'Aftalen med bureauet opsagt',
        ],
      },
    },
    task: [
      'Målet var at skabe en hjemmeside, hvor Rosendal Tømrer Entreprise kunne præsentere sine kompetencer og projekter på en overskuelig og troværdig måde.',
      'Det skulle være nemt for kunderne at forstå, hvad virksomheden tilbyder, og hvorfor de trygt kan vælge Rosendal til deres næste byggeprojekt.',
    ],
    solution: [
      'En personlig og jordnær præsentation af virksomheden.',
      'En tydelig oversigt over tømrerarbejde og virksomhedens ydelser.',
      'En struktur, der gør det nemt for potentielle kunder at finde relevant information.',
      'Indhold, der understøtter synlighed på Google ved relevante søgninger efter tømrerarbejde.',
      'Et digitalt setup, hvor virksomheden selv har ejerskab over hjemmeside og de tilhørende løsninger.',
    ],
    result: [
      'Rosendal Tømrer Entreprise har fået en hjemmeside, der præsenterer virksomheden på en måde, som stemmer overens med dens arbejde og værdier.',
      'En løsning, der både kan bruges til at skabe nye kunderelationer og videreudvikles i takt med virksomhedens behov.',
      'Indehaveren ejer nu alt selv og er ikke længere afhængig af bureauet. Rosendal er vores første kunde og beviset på, at processen virker.',
    ],
    forYou: {
      heading: 'Mangler din tømrervirksomhed en ny hjemmeside?',
      body: 'Vi bygger hjemmesider til tømrere, håndværkere og andre mindre virksomheder, der vil fremstå professionelt, blive fundet på Google og selv eje deres løsning.',
    },
  },
  {
    slug: 'ml-polering',
    client: 'ML Polering',
    // TODO: domænet mangler. Når det er kendt, vises links til sitet automatisk.
    url: null,
    domain: null,
    image: '/cases/ml-polering.webp',
    headline: 'Fra ingen hjemmeside til en fast pris på 30 sekunder',
    teaser: 'En hjemmeside med online prisberegner, der også er et salgsværktøj.',
    industry: 'Vinduespudsning',
    seo: {
      title: 'Case: Hjemmeside til vinduespudser med prisberegner, ML Polering',
      description:
        'Se hvordan D&O Digital byggede en hjemmeside til vinduespudseren ML Polering, hvor kunden selv ser en fast pris på 30 sekunder med en online prisberegner.',
    },
    intro: [
      'ML Polering er en vinduespudser fra Greve, der dækker København og omegn.',
      'Hjemmesiden er bygget op om en online prisberegner, hvor kunden selv vælger sine vinduer og ser en fast pris på 30 sekunder.',
    ],
    challenge: {
      paragraphs: [
        'ML Polering havde ingen hjemmeside.',
        'For en enmandsvirksomhed skal en hjemmeside ikke kun være et visitkort. Den skal også hjælpe med at sælge.',
      ],
    },
    task: [
      'Målet var en hjemmeside, hvor kunderne selv kan få en pris og sende en forespørgsel, så hjemmesiden arbejder som et salgsværktøj.',
    ],
    solutionIntro: 'Vi byggede en ny hjemmeside fra bunden med:',
    solution: [
      'Fire sider: forside, priser, spørgsmål og svar og områder.',
      'En online prisberegner, hvor kunden vælger vinduer, adgang og interval og ser prisen med det samme.',
      'En forespørgselsformular, der sender kundens prisberegning med.',
      'Kundeanmeldelser og før/efter-billeder på forsiden.',
      'Opsætning, så Google kan forstå, hvad virksomheden tilbyder, og hvilke områder den dækker.',
    ],
    result: [
      'ML Polering er gået fra ingen hjemmeside til en hjemmeside, der også er et salgsværktøj og ikke kun et visitkort.',
      'Kunderne kan se en fast pris på 30 sekunder og sende en forespørgsel med det samme.',
    ],
    forYou: {
      heading: 'Har du en servicevirksomhed med faste priser?',
      body: 'Vi bygger hjemmesider til vinduespudsere og andre mindre virksomheder, hvor kunden selv kan se prisen og spørge om en tid. Og som du selv ejer.',
    },
  },
];

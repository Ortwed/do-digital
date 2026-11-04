export interface Case {
  slug: string;
  client: string;
  url: string;
  domain: string;
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
    before: { heading: string; items: string[] };
    after: { heading: string; items: string[] };
  };
  task: string[];
  solution: string[];
  result: string[];
  /** Afsluttende afsnit rettet mod virksomheder i samme branche. */
  forYou: { heading: string; body: string };
}

export const cases: Case[] = [
  {
    slug: 'ortwed-anlaegs-entreprise',
    client: 'ORTWED Anlægs Entreprise',
    url: 'https://ortwed.dk',
    domain: 'ortwed.dk',
    image: null,
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
    ],
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
        'Rosendal Tømrer Entreprise ApS i Hundested havde allerede en hjemmeside. Men den var ejet af det bureau, der havde lavet den, og det samme gjaldt designet og annoncekontoen.',
        'Det er en helt almindelig måde at lave en aftale på, og den fungerer, så længe alt kører. Udfordringen kommer den dag, man vil noget andet. Så ejer man ikke selv det, man har betalt for, og et skifte betyder i praksis, at man starter forfra.',
        'Målet var derfor en løsning, hvor alt står i virksomhedens eget navn, og hvor indehaveren selv bestemmer, hvem der skal hjælpe fremover.',
      ],
      before: {
        heading: 'Før: lå hos bureauet',
        items: ['Hjemmesiden', 'Designet', 'Annoncekontoen'],
      },
      after: {
        heading: 'Nu: i virksomhedens eget navn',
        items: [
          'En ny hjemmeside, bygget fra bunden',
          'Domænet, flyttet over',
          'Mailen, inklusive en postkasse på 11,2 GB',
          'Google-profilen, overtaget',
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
];

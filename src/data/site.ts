// Samlet sted for virksomhedsoplysninger. Udfyld felterne markeret TODO før lancering.

export const site = {
  name: 'D&O Digital',
  payoff: 'Dit digitale. Dit ejerskab.',
  tagline: 'Dit digitale fundament. Dit ejerskab. Din frihed.',
  principle: 'Du skal eje det, du betaler for.',
  description:
    'D&O Digital bygger hjemmesider til mindre virksomheder, der vil eje deres digitale løsninger selv. Hjemmeside, hosting og e-mail uden binding.',
  founders: ['Christian Ortwed', 'Jakob Daugaard'],

  // TODO: Udfyld kontaktoplysninger og CVR. Tomme felter vises som [E-MAIL], [TELEFON] og [CVR].
  email: '',
  phone: '', // fx '+45 12 34 56 78'
  cvr: '',
};

export const nav = [
  { href: '/ydelser/', label: 'Ydelser' },
  { href: '/hjemmeside-du-selv-ejer/', label: 'Hjemmeside du selv ejer' },
  { href: '/cases/', label: 'Cases' },
  { href: '/om-os/', label: 'Om os' },
];

export const services = [
  {
    title: 'Hjemmesider til mindre virksomheder',
    short: 'Bygget til den enkelte virksomhed.',
    body: 'Vi bygger hjemmesider, der passer til netop din virksomhed og dine kunder. Med en enkel struktur, jordnær kommunikation og indhold, der gør det nemt at tage kontakt. Når hjemmesiden er færdig, er den din.',
  },
  {
    title: 'Hosting og e-mail',
    short:
      'Hosting, du selv har kontrol over, og e-mail, der ikke unødvendigt er bundet til en hjemmesideleverandør.',
    body: 'Vi sætter hosting op, så det er dig, der har ejerskab og adgang. Din e-mail placeres, så den ikke er bundet til den, der laver din hjemmeside. Skifter du leverandør en dag, følger din mail ikke med i handlen.',
  },
  {
    title: 'Flytning af eksisterende løsninger',
    short: 'Hjælp med at flytte det, du har i dag, når det giver mening.',
    body: 'Har du en hjemmeside, et domæne eller en e-mail, der sidder fast hos en leverandør, hjælper vi med at flytte den over på egne hænder. Vi starter med at finde ud af, hvem der ejer hvad, og laver en plan for flytningen, så du ved, hvad der sker undervejs.',
  },
  {
    title: 'Løbende vedligeholdelse og videreudvikling',
    short: 'Hjælp, når du har brug for den, uden at være låst til os.',
    body: 'Vil du have os til at opdatere og videreudvikle din hjemmeside, gør vi det gerne. Vil du bruge et andet bureau til Google Ads, Meta eller SEO, skal du selvfølgelig kunne gøre det. Du får adgang til det hele.',
  },
];

// Det, en virksomhed bør eje selv. Bruges i "Ved du, hvem der ejer hvad?"-sektionen.
export const ownership = [
  { title: 'Domænet', body: 'Registreret i virksomhedens eget navn, ikke leverandørens.' },
  { title: 'Hosting', body: 'En konto, du selv har login til og kan flytte.' },
  { title: 'E-mail', body: 'Adskilt fra hjemmesiden, så den ikke er en del af en binding.' },
  { title: 'Hjemmesiden', body: 'Filer, indhold og adgang til at redigere. Ikke kun lejet.' },
];

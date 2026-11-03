# D&O Digital: demo-website til produktet "Hjemmeside du selv ejer"

Opgave til Claude Code: byg en statisk demo-hjemmeside ud fra de to designudkast i `design/`. Sproget er dansk hele vejen. Byg ren HTML + CSS (ingen framework nødvendigt), responsivt fra 360 px til 1440 px.

## Filer

- `design/ProduktForside.dc.html`: produktforside (løfte, pris, forløb, case, kontakt)
- `design/ProduktPris.dc.html`: pris og indhold (hvad du får, ejer/betaler-tabel, tilkøb, Google Ads ikke med)
- `design/WebKobolt.dc.html`: D&O Digitals egen forside i samme stil (reference til nav, footer og tone)

Filerne er designkilde, ikke færdig HTML. De bruger `<x-dc>`, `<helmet>` og `<script src="./support.js">`, som skal fjernes. Indhold, tekster, struktur og inline-styles kan kopieres direkte. Flyt gentagne styles over i en fælles `style.css`.

## Design

- Stil: "Kobolt", farvekombination 06
- Skrift: Manrope (Google Fonts), vægte 400, 500, 600, 700, 800
- Farver: kobolt `#1F3A8A`, orange `#C2410C`, lys orange (på mørk baggrund) `#FDBA74`, baggrund `#EEF1F6`, hvid `#FFFFFF`, tekst `#121C3A`, dæmpet tekst `#3F4A66`, lyseblå flade `#DCE3F5`, orange tone `#FCE3D3`, mørk footer `#121C3A`
- Indhold maks. 1240 px bredt, 40 px sidepadding (20 px på mobil)
- Knapper: 12 px radius, min. 52 px høje. Primær på mørk baggrund: `#FDBA74` med tekst `#14213D`. Primær på lys: `#1F3A8A` med hvid tekst
- Kort: 20 px radius, hvid baggrund
- Alle klikbare mål min. 44 px, synlig fokusmarkering, kontrast mindst 4.5:1

## Logo

Monogram D & O som SVG (viewBox `0 0 325 120`), efterfulgt af ordet "Digital" (Manrope 500). Kopiér SVG'en fra headeren i designfilerne. Til mørk baggrund: D og O `#F7F9FD`, & `#FDBA74`. Til lys baggrund: D og O `#1F3A8A`, & `#C2410C`.

## Sider og sektioner

Forside (`ProduktForside`): hero med pris over folden, "Tre ting at huske", "Kender du det?" (orange), seks trins forløb, case Rosendal Tømrer, afklaringsmøde-CTA, footer.

Pris og indhold (`ProduktPris`): hero, hvad du får (8 felter inkl. prisfelt), tabel over hvad du ejer og selv betaler (rigtig `<table>` med `<th scope="col">`, scroll i boks på mobil), valgfrie tilkøb, Google Ads ikke med, CTA, footer.

Navigation: Ydelser, Hjemmeside du selv ejer (aktiv side, `aria-current="page"`), Cases, Om os, Kontakt os.

Mangler endnu (næste runde): Spørgsmål og svar (brug `<details>`), Kontakt med formular (navn, telefon, e-mail, besked), egen case-side.

## Pladsholdere, der skal udfyldes

Disse står i firkantede parenteser i designet. Opfind aldrig værdier.

- `[TELEFON]`, `[E-MAIL]`, `[CVR]`
- `[PRIS]` på opdateringspakke og serviceaftale, `[PRIS EFTER OMFANG]` på tillæg ved særlige opgaver
- `[ANTAL SIDER OG CASES AFKLARES]` (hvad de 15.000 kr. dækker)
- Case-tal: besøg og henvendelser før/efter, tidsforbrug, citat fra Sebastian. Må først bruges, når han har givet tilladelse til navn, tal og anmeldelser
- `[Screenshot af rosendal-tomrer.dk]` og `[Screenshot af ortwed.dk]`: erstat med rigtige screenshots

## Fakta, der ikke må ændres uden aftale

- Fast pris: 15.000 kr. ekskl. moms
- Efter overdragelsen betaler kunden kun hosting og mail direkte til udbyderne, plus egne tilkøb
- Fejlrettelser i 30 dage efter go-live (foreslået, ikke endeligt afklaret)
- Google Ads og annoncekroner er ikke en del af produktet
- Kundevendt tekst må ikke bruge tekniske ord som DNS eller schema. Forklar i stedet, hvad det betyder for kunden

## Teknisk krav til demo-sitet

- Semantisk HTML: `header`, `nav`, `main`, `section`, `footer`, ét `h1` pr. side
- `lang="da"`, meningsfulde `title` og meta description pr. side
- Ingen tracking eller cookiebanner i demoen
- Kontaktformularen i demoen behøver ikke sende noget, men skal have rigtige `label`-felter
- Links til https://rosendal-tomrer.dk og https://ortwed.dk skal virke
- Ingen emojis, ingen stockbilleder

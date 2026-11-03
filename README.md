# D&O Digital, hjemmeside

Hjemmeside for D&O Digital. *Du skal eje det, du betaler for.*

Bygget med [Astro](https://astro.build) som et rent statisk site: output er almindelige HTML-, CSS- og billedfiler i `dist/`, som kan hostes hvor som helst (simply.com, one.com, Netlify, Cloudflare Pages, eget webhotel). Ingen database, ingen cookies, ingen tredjepartsscripts. Altså samme princip som vi sælger: let at eje og let at flytte.

## Kom i gang

```bash
npm install
npm run dev       # udviklingsserver på http://localhost:4321
npm run build     # bygger statisk site til dist/
npm run preview   # viser det byggede site
```

Kræver Node 22+.

## Før lancering (TODO)

Alle virksomhedsoplysninger ligger ét sted: `src/data/site.ts`.

- [ ] Endeligt domæne: ret standardværdien for `site` i `astro.config.mjs` (bruges i canonical, sitemap, Open Graph).
- [ ] `email`, `phone`, `cvr`
- [ ] Screenshots af cases: læg fx `ortwed.jpg` og `rosendal.jpg` (16:10, ca. 1600×1000) i `public/cases/` og sæt `image: '/cases/ortwed.jpg'` i `src/data/cases.ts`. Indtil da vises en grafisk pladsholder.
- [ ] Indsend `https://<domæne>/sitemap.xml` i Google Search Console.

## Testsite på GitHub Pages

Hver push til `main` bygger og publicerer sitet via `.github/workflows/deploy.yml` til
https://ortwed.github.io/do-digital/

Testsitet bygges med `PUBLIC_NOINDEX=true`, så det ikke kommer i Googles søgeresultater. Fjern linjen i workflowet, når sitet skal i søgeresultaterne.

Første gang skal Pages slås til: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Struktur

| Sti | Indhold | SEO-fokus |
| --- | --- | --- |
| `/` | Forside | Hjemmesider til mindre virksomheder, uden binding, eget ejerskab |
| `/ydelser/` | Ydelser, flytning, ejerskab | Hosting til mindre virksomheder, flytning af hjemmeside og e-mail, ejerskab af domæne |
| `/om-os/` | Historien og stifterne | Hjemmesider til små virksomheder, hjemmeside med eget ejerskab |
| `/cases/` | Oversigt | |
| `/cases/ortwed-anlaegs-entreprise/` | Case | Hjemmeside til anlægsentreprise, anlægsgartner, belægningsvirksomhed |
| `/cases/rosendal-tomrer-entreprise/` | Case | Hjemmeside til tømrer, tømrervirksomhed, håndværker |
| `/kontakt/` | Kontakt | |

```
src/
  data/site.ts       virksomhedsoplysninger, ydelser, ejerskabsliste
  data/paths.ts      link()/abs() så links virker både på eget domæne og i undermappe
  data/cases.ts      cases (ny case = nyt objekt; siden genereres automatisk)
  data/logo.ts       udtegnet "&" til logoet
  layouts/Base.astro <head>, SEO-meta, JSON-LD, header og footer
  components/        Logo, Header, ContactBlock (kontakt + footer), CaseList, CaseVisual, PageIntro
  pages/             sider + sitemap.xml og robots.txt
  styles/global.css  designtokens og fælles klasser
public/
  logo.svg, logo-negativ.svg, logo-monogram.svg, favicon.svg, og.png
```

## Design

Farvekombination 06 *Kobolt og orange* fra logoudkastet:

| Token | Farve | Brug |
| --- | --- | --- |
| `--brand` | `#1F3A8A` | Kobolt: logo, overskrifter, knapper |
| `--accent` | `#C2410C` | Orange: "&", markeringer, små overskrifter |
| `--accent-light` | `#FDBA74` | Orange på mørk baggrund |
| `--ink` / `--dark` | `#121C3A` | Brødtekst / mørk sektion |
| `--bg` | `#EEF1F6` | Baggrund |

Font: Manrope (400–800), selv-hostet via `@fontsource/manrope`.

Logoets "&" og ordet "Digital" er konverteret til vektorstier i SVG-filerne i `public/`, så logoet ser ens ud overalt, også hvor Manrope ikke er installeret.

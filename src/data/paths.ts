// Hjælpere til links, så sitet virker både på eget domæne (base "/") og
// under en undermappe, fx GitHub Pages: https://ortwed.github.io/do-digital/
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const SITE = import.meta.env.SITE ?? 'https://dodigital.dk';

/** Relativ sti til brug i href/src. Forventer en sti, der starter med "/". */
export const link = (path: string) => BASE + path;

/** Fuld URL til canonical, sitemap, Open Graph og strukturerede data. */
export const abs = (path: string) => new URL(link(path), SITE).href;

/** Sæt PUBLIC_NOINDEX=true for testsites, så de ikke bliver indekseret af Google. */
export const NOINDEX = import.meta.env.PUBLIC_NOINDEX === 'true';

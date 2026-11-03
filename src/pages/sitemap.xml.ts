import type { APIRoute } from 'astro';
import { cases } from '../data/cases';
import { abs } from '../data/paths';

const paths = ['/', '/ydelser/', '/hjemmeside-du-selv-ejer/', '/hjemmeside-du-selv-ejer/pris/', '/om-os/', '/cases/', ...cases.map((c) => `/cases/${c.slug}/`), '/kontakt/'];

export const GET: APIRoute = () => {
  const urls = paths.map((p) => `  <url><loc>${abs(p)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

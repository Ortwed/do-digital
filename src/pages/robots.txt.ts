import type { APIRoute } from 'astro';
import { abs, NOINDEX } from '../data/paths';

// Testsites (PUBLIC_NOINDEX=true) lukkes for søgemaskiner.
export const GET: APIRoute = () =>
  new Response(
    NOINDEX ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );

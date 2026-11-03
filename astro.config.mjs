import { defineConfig } from 'astro/config';

export default defineConfig({
  // Holdes i sync med `site.url` i src/data/site.ts
  site: 'https://dodigital.dk',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

import { defineConfig } from 'astro/config';

// SITE_URL og BASE_PATH sættes af GitHub Pages-workflowet.
// Lokalt og på eget domæne bruges standardværdierne.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://dodigital.dk',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

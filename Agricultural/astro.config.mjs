import { defineConfig } from 'astro/config';


import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      notFound: '/404'
    },
    fallback: {
      en: 'es'
    }
  },
  integrations: [tailwind()]
});
import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  image: {
    service: squooshImageService(),
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    fallback: {
      en: 'es',
    }
  }
});
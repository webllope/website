import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://webllope.es",
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) =>
        page !==
          "https://www.webllope.es/en/blog/importancia-tener-pagina-web/" &&
        page !==
          "https://www.webllope.es/es/blog/is-it-important-to-have-a-website/",
    }),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    fallback: {
      en: "es",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

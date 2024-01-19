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
      ffilter: (page) => {
        // Exclude specific URLs from modification
        const excludedUrls = [
          "https://webllope.es/en/blog/importancia-tener-pagina-web/",
          "https://webllope.es/es/blog/is-it-important-to-have-a-website/",
        ];

        if (excludedUrls.includes(page)) {
          return page;
        }

        // Modify URLs to include "www" if the hostname is not already "www.webllope.es"
        const modifiedUrl = new URL(page);
        if (modifiedUrl.hostname === "webllope.es") {
          modifiedUrl.hostname = "www.webllope.es";
        }

        // Construct the modified URL
        return modifiedUrl.toString();
      },
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

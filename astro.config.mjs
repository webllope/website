import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

function filterOutPages(page) {
  return (
    page !== "https://webllope.es/en/blog/importancia-tener-pagina-web/" &&
    page !== "https://webllope.es/es/blog/is-it-important-to-have-a-website/" &&
    page !== "https://webllope.es/en/blog/astro-framework-de-javascript/" &&
    page !== "https://webllope.es/en/blog/aprende-seo-basico/"
  );
}
// https://astro.build/config
export default defineConfig({
  site: "https://webllope.es",
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => filterOutPages(page),
      serialize(item) {
        if (item.url.startsWith("https://webllope.es/")) {
          const modifiedUrl = new URL(item.url);
          modifiedUrl.hostname = "www.webllope.es";
          item.url = modifiedUrl.toString();
        }

        return item;
      },
    }),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: 'hybrid',
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

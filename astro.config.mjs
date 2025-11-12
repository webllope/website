import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

function filterOutPages(page) {
  const englishBlogLinksAllowed = [
    "https://webllope.es/en/blog/is-it-important-to-have-a-website/",
    "https://webllope.es/en/blog/best-murcia-golf-resort/",
  ];

  return (
    !(page.includes("/en/blog/") && !englishBlogLinksAllowed.includes(page)) &&
    page !== "https://webllope.es/en/blog/importancia-tener-pagina-web/" &&
    page !== "https://webllope.es/es/blog/is-it-important-to-have-a-website/" &&
    page !== "https://webllope.es/en/blog/astro-framework-de-javascript/" &&
    page !== "https://webllope.es/en/blog/diseno-web-profesional-murcia/" &&
    page !== "https://webllope.es/en/blog/mejores-diseñadores-web/" &&
    page !== "https://webllope.es/en/blog/mejores-disenadores-web/" &&
    page !== "https://webllope.es/en/blog/mejores-dise%C3%B1adores-web/" &&
    page !== "https://webllope.es/en/blog/seo-murcia/" &&
    page !== "https://webllope.es/en/blog/pantalla-azul-windows-2024/" &&
    page !== "https://webllope.es/es/blog/best-murcia-golf-resort/" &&
    page !== "https://webllope.es/en/privacidad/" &&
    page !== "https://webllope.es/es/privacidad/" &&
    page !== "https://webllope.es/es/cookies/" &&
    page !== "https://webllope.es/en/cookies/" &&
    page !== "https://webllope.es/es/legal/" &&
    page !== "https://webllope.es/en/legal/" &&
    page !==
      "https://webllope.es/en/blog/mejora-tu-posicionamiento-web-murcia/" &&
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
    react(),
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

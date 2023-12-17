/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Mona-Sans", "Inter Variable", "Inter"',
          {
            ...defaultTheme.fontFamily.sans,
            fontVariationSettings: '"wdth" 125',
          },
        ],
      },

      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"MonaSans", "Inter Variable", "Inter"',
          {
            ...defaultTheme.fontFamily.sans,
            fontVariationSettings: '"wdth" 125',
          },
        ],
      },

      fontSize: {
        "6xl": [
          "3rem",
          {
            ...defaultTheme.fontSize["6xl"],
            lineHeight: "3.5rem",
          },
        ],
      },

      // ponytail: one alias so the brand hue can be swapped in a single place
      colors: { brand: colors.violet },

      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

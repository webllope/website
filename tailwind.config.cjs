/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
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

      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

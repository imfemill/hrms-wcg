/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wcg_navy: "#112B3C",
        wcg_blue: "#205375",
        wcg_orange: "#F66B0E",
        wcg_gray: "#EFEFEF",
        wcg_lightblue: "#efffff",
        wcg_powderBlue: "#e4f2f9",
      },
      boxShadow: {},
      rotate: {
        480: "480deg",
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
  ],
};

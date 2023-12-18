/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
  ],
};

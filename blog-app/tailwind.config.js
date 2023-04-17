/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#20262E",
        },
        secondary: {
          light: "#20262E",
          dark: "#ffffff",
        },
        action: "#3b82f6",
        action_hightlight: "#60a5fa",
        sub: "#E5E5E5",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};

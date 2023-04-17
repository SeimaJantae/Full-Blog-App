/** @type {import('tailwindcss').Config} */
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
        action: "#006BA6",
        sub: "#E5E5E5",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e2e522",

          "secondary": "#242bad",

          "accent": "#89a5ed",

          "neutral": "#1F1D2A",

          "base-100": "#E6E7EF",

          "info": "#A3CFF0",

          "success": "#18C99D",

          "warning": "#EECF44",

          "error": "#E4627C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

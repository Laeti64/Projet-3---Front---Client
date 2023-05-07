/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#8B7E74",
        primary_font: "#F1D3B3",
        primary_bg: "#65647C",
      },
    },
  },
  plugins: [],
};

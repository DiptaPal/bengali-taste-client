/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normalColor: '#4b5563',
        activeColor: '#fd9300'
      }
    },
  },
  plugins: [],
}
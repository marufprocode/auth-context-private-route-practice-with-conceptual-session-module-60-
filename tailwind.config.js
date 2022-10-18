/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Paytone: "'Paytone One', sans-serif",
        Secular: "'Secular One', sans-serif"
      }
    },
  },
  plugins: [],
}

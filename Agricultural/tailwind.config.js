/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts}",
    "./public/**/*.{html,js}",
    "./components/**/*.{astro,html,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
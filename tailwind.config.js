/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:'2rem',
    },
    screens:  {
      'md': {'max': '800px'},
      '2xl': {'max': '1535px'},
    },
    extend: {},
  },
  plugins: [],
}




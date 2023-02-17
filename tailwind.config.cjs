/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#173d7a',
        secondary: '#029df7',
        tertiary: '#575757',
      },
    },
    plugins: [],
  },
}

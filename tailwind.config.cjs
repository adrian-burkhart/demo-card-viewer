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
        accent: '#1c4a94',
        active: '#123060',
      },
      boxShadow: {
        test: '0 4px 0 rgb(255 255 255 / 0.46), 0 15px 35px rgb(216, 225, 233, 0.8)',
        button: '0 3px #0f284f',
      },
    },
    plugins: [],
  },
}

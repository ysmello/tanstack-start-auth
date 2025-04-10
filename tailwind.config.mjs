/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ghibliGreen: '#bde0c0',
        ghibliBlue: '#c8ddf7',
        ghibliBrown: '#e2c19f',
      },
      fontFamily: {
        ghibli: ['"Comic Neue"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

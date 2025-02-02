/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F60187',
        secondary: '#95B949',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        fancy: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
};
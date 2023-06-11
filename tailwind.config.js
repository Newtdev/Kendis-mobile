/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      colors: {
        darkGray: '#3A3A3A',
        base: '#FF8B00',
        //   // purple: '#7e5bef',
        //   // pink: '#ff49db',
        //   // orange: '#ff7849',
        //   // green: '#13ce66',
        //   // yellow: '#ffc82c',
        //   // 'gray-dark': '#273444',
        //   // gray: '#8492a6',
        //   // 'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
};

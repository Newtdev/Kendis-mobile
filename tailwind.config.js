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
        primary: '#FC6B10',
        secondary: '#3A3A3A',
        lightGray: '#C4C4C4',
        darkBlue: '#2E63EA',
        lightBlue: 'rgba(46, 99, 234, 0.5)',
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

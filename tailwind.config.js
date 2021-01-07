module.exports = {
  purge: [
    './public/index.html',
    './public/index.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background:'#070E18',
        primary: '#ffb703',
        btnPrimary:'#f48c06',
        btnSecondary:'#f48c06',
        backgroundTwo: '#fdffb6'
      },
      fontFamily:{
        lobster: ['Lobster Two', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins']
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          light: '#ECECEC',
          DEFAULT: '#343434'
        }
      },
      zIndex: {
        '-99': '-99'
      },
      maxHeight: {
        '4.5/6': '80%'
      },
      backgroundImage: {
        'background-banner': "url('https://www.chloeting.com/about/background-banner.jpg')"}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

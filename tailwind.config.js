const path = require('path');
const ROOT = path.resolve(__dirname);
const src = path.resolve(ROOT, 'src');

module.exports = {
  content: [
    `${src}/**/*.html`,
    `${src}/**/*.js`,
    `${src}/**/*.ts`,
    `${src}/**/*.tsx`,
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#123B4F',
        'dark-gray': '#3C3C3B',
        'light-blue': '#95B8D7',
        'light-gray': '#E7E1DD',
        'gray': "#606060"
      },
      fontFamily: {
        'veener-two': ['Veneer Two, sens-serif'],
        'gotham': ['Gotham, sens-serif']
      },
      fontSize: {
        '3xl.5': ['2rem'],
        'xl4.25': ['2.5rem', {
          lineHeight: '2.75rem',
        }]
      },
      leading: {
        '7.5': '1.875',
        '11': '2.75rem',
      },
      spacing: {
        '12.5': '3.25rem',
        '16.5': '4rem',

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Veneer Two',
          fontWheight: '400',
          src: 'url(../assets/fonts/VeneerTwo.ttf)'
        }
      })
    },
    function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Gotham',
          fontWheight: '400',
          src: 'url(../assets/fonts/GothamLight.ttf)'
        }
      })
    }
  ]
}

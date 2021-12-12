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
        'light-gray': '#E7E1DD'
      },
      fontFamily: {
        'veener-two': ['Veneer Two, sens-serif'],
        'gotham': ['Gotham, sens-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '0.875rem' }],
        sm: {
          '20lh': ['0.875rem', { lineHeight: '1.25rem' }],
          '32lh': ['0.875rem', { lineHeight: '2rem' }],
        },
        md: {
          18: ['1.125rem', { lineHeight: '1.75rem' }],
          20: ['1.25rem', { lineHeight: '1.75rem' }],
        },
        lg: ['32px', {
          lineHeight: '38px',
        }],
        xl: ['50px', {
          lineHeight: '55px',
        }]
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

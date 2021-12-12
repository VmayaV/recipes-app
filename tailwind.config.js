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
        'light-blue': '#95B8D7'
      },
      fontFamily: {

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
  plugins: [],
}

const path = require('path');
const ROOT = path.resolve(__dirname);
const src = path.resolve(ROOT, 'src');

module.exports = {
  purge: {
    enabled: true,
    content: [
      `${src}/**/*.html`,
      `${src}/**/*.js`,
      `${src}/**/*.ts`,
      `${src}/**/*.tsx`,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

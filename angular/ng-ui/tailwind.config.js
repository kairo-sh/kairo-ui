const { join } = require('path');

module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [join(__dirname, './**/*.{html,ts,mjs}')],
  theme: {
    extend: {},
  },
  plugins: [],
};

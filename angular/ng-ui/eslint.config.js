// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../eslint.config.js');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/no-input-rename': ['off'],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  }
);

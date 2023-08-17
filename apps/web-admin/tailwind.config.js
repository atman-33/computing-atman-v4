/* eslint-disable unicorn/prefer-module */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
};

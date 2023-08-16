const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black: '#262217',
        beigeLight: '#FFFDF8',
        gray: {
          100: '#EAE9E8',
          200: '#D4D3D1',
          300: '#BEBDBA',
          400: '#A8A7A2',
          500: '#93918B',
          600: '#7D7A74',
          700: '#68655D',
          800: '#514E45',
          900: '#3C392F',
        },
      },
    },
  },
  plugins: [],
};

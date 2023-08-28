/* eslint-disable unicorn/prefer-module */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,layouts,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    // add pliny
    join(__dirname, '../../node_modules/pliny/**/*.js'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      screens: {
        '3xl': '1600px'
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
        black: '#262217',
        beigeLight: '#FFFDF8'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight')
            },
            h3: {
              fontWeight: '600'
            },
            code: {
              color: theme('colors.indigo.500')
            }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`
              },
              code: { color: theme('colors.primary.400') }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

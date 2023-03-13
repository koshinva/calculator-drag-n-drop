const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      blue: '#5D5FEF',
      lightBlue: '#F0F9FF',
      gray: {
        100: '#F3F4F6',
        200: '#E5E5E5',
        300: '#C4C4C4',
        400: '#4D5562',
        500: '#E2E3E5',
        600: '#6B7280',
      },
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [],
};

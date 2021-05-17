var colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        50: '3.125rem',
        360: '22.5rem',
        480: '30rem',
      },
      colors: {
        primary: '#111827',
        secondary: '#1F2937',
        highlight: '#6366F1',
        white: '#FFFFFF',
        gray: {
          darkest: '#4F4F4F',
          dark: '#9CA3AF',
          default: '#878787',
          light: 'D4D4D8',
          lighter: '#F8F8F8',
          lightest: 'F2F2F2',
        },
        red: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

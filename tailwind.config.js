var colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#111827',
      secondary: '#1F2937',
      highlight: '#6366F1',
      white: '#FFFFFF',
      gray: {
        darkest: '#4F4F4F',
        dark: '#9CA3AF',
        default: '#878787',
        light: '#F8F8F8',
        lightest: 'F2F2F2',
      },
      red: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

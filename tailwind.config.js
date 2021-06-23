var colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        50: '3.125rem',
        74: '4.625rem',
        92: '5.75rem',
        247: '15.438rem',
        360: '22.5rem',
        480: '30rem',
        640: '40rem',
        720: '45rem',
        960: '60rem',
        1080: '67.5rem',
        1632: '102rem',
        1920: '120rem',
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
      boxShadow: {
        primary:
          '0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)',
      },
      fontSize: {
        title: '2rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

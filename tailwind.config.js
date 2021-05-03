const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          light: '#F4E5FF',
          dark: '#7348D6',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#555555',
          light: '#E5E5E5',
        },
        blue: {
          light: '#D2F5F8',
          DEFAULT: '#1AC6D4'
        },
        white: {
          dark: 'F9F9F9',
          DEFAULT: 'FFFFFF'
        },        
      },
    },
    borderRadius: {
      DEFAULT: '50px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
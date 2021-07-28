// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '25%': '25%',
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '90%': '90%'
      },
      backgroundColor: theme => ({
        'custom-bg': '#060818'
      }),
      fontSize: {
        '4.5xl': '2.50rem'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover', 'focus', 'active'],
      boxShadow: ['active']
    },
  },
  plugins: [],
}
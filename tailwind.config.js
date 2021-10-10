module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
      padding: ['hover'],
      opacity: ['disabled'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-yellow" : '#ffc727',
        "theme-yellow-dark": '#e6b323',
        "them-dark": '#37474f'
      },
      height: {
        "screen-75": '90vh',
        "screen-50": '50vh'
      },
      fontFamily: {
        'main': ['"Open Sans"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

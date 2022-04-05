module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        allView: '#FFF',
        buttons: '#ff8c52',
        grey1: '#43484d',
        grey2: '#5e6977',
        grey3: '#89939e',
        grey4: '#bdc6cf',
        grey5: '#e1e8ee',
        CardComment: '#86939e',
        cardbackground: '#fff',
        statusbar: '#ff8c52',
        headerTxt: '#fff',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};

//   plugins: [],
//   corePlugins: {transform: false, translate: false, boxShadow: false},

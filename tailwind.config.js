const { Outfit, Ovo } = require("next/font/google");

module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfittfit:["Outfit", "sans-serif"], 
        Ovo: ["Ovo", "serif"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

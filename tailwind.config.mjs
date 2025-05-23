const { Outfit, Ovo,} = require("next/font/google");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
      boxShadow: {
        'blackk' : '4px 4px 0 #000',
        'White' : '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
}

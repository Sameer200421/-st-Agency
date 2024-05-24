/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : "368px",

      'lsm' : "450px",

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdl' : "880px",

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#0081ff', 
      },
      fontFamily:{
        mont : ["Montserrat" , ...defaultTheme.fontFamily.sans],
        leck : ["Leckerli One", ...defaultTheme.fontFamily.sans],
        lato : ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridAutoColumns:{
        colReverse:"row-reverse"
       },
       gridTemplateColumns:{
        fluuidGrids:"repeat(auto-fit(250px, 1fr)"
       }
      
    },
  },
  plugins: [],
}


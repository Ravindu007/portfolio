/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1:'#66F1F6',
        color2:'#1F2833',
      }
    },
  },
  plugins: [],
}
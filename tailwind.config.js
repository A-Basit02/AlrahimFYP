/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter', 'system-ui', 'sans-serif'],
        Montserrat: "Montserrat"
      },
      colors:{
        "white": "#FFFFFF",
        "primary-button": "#005B70", // green button
        "primary-button-hover":"#00556A", // green button hover
        "primary-hover": "#00556A",
      }
    },
  },
  plugins: [],
}
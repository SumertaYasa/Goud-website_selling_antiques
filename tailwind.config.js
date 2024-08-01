/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html, js}"],
  theme: {
    container: {
      center:true
    },
    colors: {
      "gold": "#ffc567",
      "pinky": "#ff548f",
      "orangee": "#e35f38",
      "bluee": "#058cd7",
      "purplee": "#552cb7",
      "green": "#2b9f62",
      "blacky": "#101010",
      "pure": "#fff",
    }, 
   
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue']
      },

    },
  },
  plugins: [],
}


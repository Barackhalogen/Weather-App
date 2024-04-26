/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
'hero-section': "url('/img/carousel-1.jpg')",
      },
    },
    colors:{
      'orange':'#eab308',
      'pink': '#db2777'
    }
  },
  components: {
btn: {
base: 'py-2 px-4 rounded',
primary: 'bg-custom-pink text-white font-bold'
},
  },
  plugins: [],
}
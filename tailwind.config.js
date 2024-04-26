/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  components: {
btn: {
base: 'py-2 px-4 rounded',
primary: 'bg-custom-pink text-white font-bold'
},
  },
  plugins: [],
}
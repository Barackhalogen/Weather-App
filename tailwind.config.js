/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/img/carousel-1.jpg')",
      },
    },
    colors: {
      orange: "#eab308",
      pink: "#db2777",
      white: "#fff",
    },
  },
  components: {},
  plugins: [],
};

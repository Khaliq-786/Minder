/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Dancing Script']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
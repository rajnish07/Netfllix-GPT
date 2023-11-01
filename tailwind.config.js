/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        mobile: "9/20",
      },
    },
  },
  plugins: [],
};

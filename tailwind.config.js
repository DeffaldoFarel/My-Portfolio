/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#666666",
      },
    },
  },
  plugins: [],
};

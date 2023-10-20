/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "26px",
          md: "36px",
        },
      },
      colors: {
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "#B0AFBE",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};

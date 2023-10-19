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
          md: "44px",
        },
      },
      colors: {
        "cyan-soft": "hsl(174, 77%, 80%)",
        "cyan-strong": "hsl(174, 86%, 45%)",
        "red-light-grayish": "hsl(14, 92%, 95%)",
        "red-light": "hsl(15, 100%, 70%)",
        "blue-pale": "hsl(226, 100%, 87%)",
        "blue-very-pale": "hsl(230, 100%, 99%)",
        "blue-grayish": "hsl(225, 20%, 60%)",
        "blue-dark-desaturated": "hsl(227, 35%, 25%)",
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};

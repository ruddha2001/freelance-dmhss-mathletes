module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2D111D",
        secondary: "#B79866",
        lightMaroon: "#6E4C5C",
      },
      backgroundImage: (theme) => ({
        "landing-background": "url('/background.png')",
      }),
      fontSize: {
        landing: "200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

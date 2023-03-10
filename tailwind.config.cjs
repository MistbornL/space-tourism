module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      yellow: "#f99824",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      wood: "#563b34",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "rgb(255 255 255)",
      black: "rgb(0 0 0)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],

      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: {
        230: "44.05rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

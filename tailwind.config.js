/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },

      colors: {
        primary: "#006FBA",
        grayishText: "#68718B",
      },

      width: {
        xs: "20rem", // Extra Small
        sm: "24rem", // Small
        md: "32rem", // Medium
        lg: "48rem", // Large
        xl: "64rem", // Extra Large
        "2xl": "80rem", // 2 Extra Large
        "3xl": "96rem", // 3 Extra Large
        "4xl": "112rem", // 4 Extra Large
        "5xl": "128rem", // 5 Extra Large
        "6xl": "144rem", // 6 Extra Large
        "7xl": "160rem", // 7 Extra Large
      },
      height: {
        xs: "20rem", // Extra Small
        sm: "24rem", // Small
        md: "32rem", // Medium
        lg: "48rem", // Large
        xl: "64rem", // Extra Large
        "2xl": "80rem", // 2 Extra Large
        "3xl": "96rem", // 3 Extra Large
        "4xl": "112rem", // 4 Extra Large
        "5xl": "128rem", // 5 Extra Large
        "6xl": "144rem", // 6 Extra Large
        "7xl": "160rem", // 7 Extra Large
      },
      letterSpacing: {
        n3percent: "-0.03em", // 3% letter spacing
      },
      lineHeight: {
        105: "1.05", // 105% line height
        110: "1.10",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primaryLight: "#F5F5F5",
        primaryDark: "#1D1E20",
        raisinBlack: "#27282B",
        lava: "#C42021",
        emerald: "#59CD90",
      },
    },
  },
  plugins: [],
};

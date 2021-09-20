module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkleather: "#89381B",
      lightleather: "#A3570F",
      shadow: "#5C2C1C",
      brightgold: "#F9F8D9",
      gold: "#F9ED5B",
      black: "#040507",
    },

    extend: {
      // RADIAL GRADIENT CONFIG
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      // Magic Font
      fontFamily: {
        magic: ["'Magic Cards'"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};

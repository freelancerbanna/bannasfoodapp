module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bgorange: "#f8901c",
      bgwhite: "#faf9fb",
      textColor: "#2a2b3c",
      transparent: "transparent",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      boxShadow: {
        indicator: "0px -10px 0 0 #faf9fb",
        homebutton: "0 5px 29px rgba(0, 0, 0, 0.15)",
        cardShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        itemShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        rightMenu: "0px 3px 20px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        cardBorder: "rgba(255,255,255,0.4)",
        ringBorder: "rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        favorite: "0px 0px 8px #ff0000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

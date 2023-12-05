module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#1A191A"
        },
        gray:{
          100: "#333333",
          200:"#BDBDBD99",
        },
        yellow:{
          100:"#FECF08"
         
        },
       

      },
      container: {
        center: true,
        padding: "2.5rem",
     },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        nexaBold: ["NexaBold", "sans-serif"],
        nexaLight: ["NexaLight", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        

      }
    }
  },
  plugins: [
    require("tailwindcss-font-inter"),
    require("flowbite/plugin")
  ]
};

import { custom } from "zod";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, #0b0d0f,#1a1d21,#292e36);", // De púrpura a azul
        "custom-gradient-two":
          "linear-gradient(90deg, #fff0fe,#f0fcff,#fafafa,#fffeeb);", // De púrpura a azul
          
      },
      colors: {
        customTeal: "linear-gradient(90deg, #fffdd0,#f5f5dc,#d2b48c)", // Add your RGB value here
        backgroundColor: "rgb(255, 255, 255)",
        form: "rgb(33, 33, 33)", // Add your RGB value here
      },
      fontFamily: {
        custom: "Quotes Caps W00 Regular",
        
        
      },
     
    },
  },
  plugins: [],
};

import { Raleway } from "next/font/google";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [Raleway, "sans-serif"],
      },
      colors: {
        'bg-top' : "#402A95",
        'bg-bottom' : "#1D0530",
        'primary' : "#BEE8FF",
        'primary-up' : "#CFEEFF",
        'primary-down' : "#1F516D",
        'dark-grey' : "#191919",
      },
      ringWidth: {
        '6': '6px'
      }
      
    },
  },
  plugins: [],
};

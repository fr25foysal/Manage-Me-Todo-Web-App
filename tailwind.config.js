/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5fad56",

          secondary: "#4d9078",
          
          accent: "#f78154", 

          white: "#ffffff",

          black:"#000000",

          neutral: "#f2c14e"
        },
      },
      "dark",
      "cupcake",
    ]},
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


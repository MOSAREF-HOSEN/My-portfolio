/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#0FCFEC",
          primary: "#19D3AE",
          accent: "#000",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}

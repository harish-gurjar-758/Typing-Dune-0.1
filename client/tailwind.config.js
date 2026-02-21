/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dune: "#E3B778",
        sand: "#F4D19B",
        sunset: "#FF7A00",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#132A13",
        "custom-middle-green" : "#31572C",
        "custom-light-green" : "#90A955",
        "custom-light" : "#ECF39E"
      },
      fontFamily: {
        'poppins-regular': ['Poppins-regular', 'sans-serif'],
        'poppins-medium': ['Poppins-medium', 'sans-serif'],
        'poppins-semibold': ['Poppins-semibold', 'sans-serif'],
        'poppins-bold': ['Poppins-bold', 'sans-serif'],
        'poppins-light': ['Poppins-light', 'sans-serif'],
        'poppins-light': ['Poppins-extralight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


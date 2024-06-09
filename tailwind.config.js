/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'background': '#28536B',
        'orange': '#C2948A',
        'blue' : '#7EA8BE',
        'borders' : '#F6F0ED',
        'details' : '#BBB193',
        'header' : '#1C3A4A',
        },
    },
  },
  plugins: [],
}
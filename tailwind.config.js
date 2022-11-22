/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px'
    },
    extend: {
      colors: {
        'theme-primary': '#F73E7B',
        'theme-secondary': '#FFF8F5',
        'theme-dark': '#151515',
        'theme-text': '#111430',
        'theme-body': 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'shadow': '0 4px 80px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
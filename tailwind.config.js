/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#313F38',
      }
    },
    fontFamily: {
      sans: ['Helvetica Neue LT Std', 'sans-serif'],
      serif: ['Cormorant Upright', 'serif'],
    },
  },
  plugins: [],
}


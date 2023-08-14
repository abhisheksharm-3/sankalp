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
        'app-sec': '#FCD043',
        'app-tert': '#FFFCF6',
      }
    },
    fontFamily: {
      sans: ['Miracle', 'sans-serif'],
      serif: ['Helvetica Neue LT Std', 'serif'],
    },
  },
  plugins: [],
}


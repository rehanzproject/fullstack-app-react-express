/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-10": "#1C2434",
        "dark-20": "#DEE4EE",
        "dark-30": "#8A99AF",
        "success-10": "#00A890",
        "success-20": "#00880D",
        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


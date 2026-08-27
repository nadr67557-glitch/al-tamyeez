/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a',
          300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b',
          600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f',
        },
        wood: {
          100: '#f5e6d3', 200: '#e6d5c3', 300: '#d4c4b0',
          400: '#c4b39d', 500: '#b39d79', 600: '#8b6f47',
          700: '#6b5344', 800: '#4a3728', 900: '#2d1f15',
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(245, 158, 11, 0.3)',
      }
    },
  },
  plugins: [],
}

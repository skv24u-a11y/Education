/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        seaformBlue: {
          50: '#f0fffe',
          100: '#d9fffe',
          200: '#b3fffc',
          300: '#8cfffa',
          400: '#7dd3c0',
          500: '#66CDAA',
          600: '#5ab89a',
          700: '#4a9d82',
          800: '#3a7d66',
          900: '#2d5e4d',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      }
    },
  },
  plugins: [],
};

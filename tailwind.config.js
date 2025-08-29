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
          400: '#79e6d6',
          500: '#66CDAA',
          600: '#5bb899',
          700: '#4a9d82',
          800: '#3a7d66',
          900: '#2d5e4d',
        }
      }
    },
  },
  plugins: [],
};

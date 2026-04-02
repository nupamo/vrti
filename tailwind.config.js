/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vrc: {
          blue: '#1144DD',
          neon: '#00D2FF',
          dark: '#0A0E14',
          panel: '#151C26',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'Inter', 'system-ui', 'sans-serif'],
        cyber: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
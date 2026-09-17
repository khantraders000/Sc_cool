/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#F2EEE4',
        inkdim: '#9FB0B6',
        bg: '#0F1B24',
        bgElevated: '#142530',
        bgDeep: '#0A141B',
        copper: '#C9843F',
        cyan: '#4FD1D9',
        success: '#6FCF97',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
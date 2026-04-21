/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gabana: {
          bg: '#001429',
          navy: '#002344',
          card: '#001E3C',
          gold: '#C9A84C',
          'gold-light': '#E8C96E',
          cream: '#F0EBE3',
          muted: '#7A8FA6',
          border: '#0F3258',
        },
        brand: {
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scroll-flow': 'scrollFlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scrollFlow: {
          '0%, 100%': { transform: 'scaleY(0) translateY(0)', transformOrigin: 'top', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { transform: 'scaleY(1) translateY(0)', transformOrigin: 'top', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

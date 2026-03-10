/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#b5952f',
          glow: 'rgba(212, 175, 55, 0.15)',
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#121212',
          card: '#161616', 
        },
        brand: {
          whatsapp: '#25D366',
          airbnb: '#FF385C',
          booking: '#006CE4',
          instagram: '#E1306C',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'zoom-bg': 'zoomBg 25s infinite alternate ease-in-out',
        'scroll-flow': 'scrollFlow 2s infinite',
        'shimmer': 'shimmer 4s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        zoomBg: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        scrollFlow: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.1%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        shimmer: {
          '0%, 80%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
          '50%': { boxShadow: '0 0 0 15px rgba(37, 211, 102, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
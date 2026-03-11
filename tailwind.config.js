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
          bg: '#0A0A0A',
          card: '#141414',
          gold: '#D4AF37',
          'gold-hover': '#b5952f',
          light: '#F9F8F6',
          muted: '#A39D98',
          dark: '#1A1A1A',
          border: '#2C2C2C'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Exemplo, certifique-se de importar a fonte
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
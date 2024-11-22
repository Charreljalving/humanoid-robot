/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 2s ease-in-out infinite',
        textGlitch: 'textGlitch 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        textGlitch: {
          '0%': { textShadow: 'none' },
          '20%': { textShadow: '2px 2px #ff0000, -2px -2px #00ff00' },
          '40%': { textShadow: 'none' },
          '60%': { textShadow: '-2px 2px #ff0000, 2px -2px #00ff00' },
          '80%': { textShadow: 'none' },
          '100%': { textShadow: 'none' }
        }
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F5F0',
        beige: '#E8E1D7',
        charcoal: '#242424',
        taupe: '#A89B8C',
        'taupe-light': '#C2B6A8',
        'taupe-dark': '#8A7E70',
        'charcoal-soft': '#3A3A38',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.01em',
        'wide-sm': '0.08em',
        'wide-md': '0.15em',
        'wide-lg': '0.25em',
        'wide-xl': '0.35em',
      },
      maxWidth: {
        'editorial': '1400px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'scale-in': 'scale-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slow-zoom 12s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

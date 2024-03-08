module.exports = {
  theme: {
    extend: {
      animation: {
        'slide': 'slide 1s ease-out forwards',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
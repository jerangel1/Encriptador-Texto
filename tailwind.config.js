module.exports = {
  theme: {
    extend: {
      colors: {
        'gradient-light': '#00ff75',
        'gradient-dark': '#3700ff',
      },
      boxShadow: {
        card: '0px 0px 30px 1px rgba(0, 255, 117, 0.30)',
      },
      width: {
        '90vw': '90vw',
        '80vw': '80vw',
        '100vw': '100vw',
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
      },
      maxWidth: {
        '190px': '190px',
      },
      maxHeight: {
        '254px': '254px',
      },
      borderRadius: {
        '20px': '20px',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '0.2s': '0.2s',
        '0.3s': '0.3s',
      },
      transform: {
        'scale-0.98': 'scale(0.98)',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}
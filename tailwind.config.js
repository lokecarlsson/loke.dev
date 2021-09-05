const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      colors: {
        primary: {
          red: '#FF295D',
          yellow: '#FFBA02',
          pink: '#FB44E3',
          purple: '#4B2EC5',
        },
        background: '#030E29',
        teal: colors.teal,
        cyan: colors.cyan,
      },
      lineHeight: {
        hero: '4.5rem',
      },
      flex: {
        layout: '1 0 auto',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

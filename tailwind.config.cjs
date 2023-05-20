/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        textColor: 'var(--color-text)',
      },
      animation: {
        'fade-in-down': 'fade-in-down 350ms ease-out',
        'fade-out-up': 'fade-out-up 350ms ease-out',
      },
      keyframes: {
        'fade-in-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0)'
          },
          to: {
            opacity: '0',
            transform: 'translateY(-100%)'
          }
        },
      }
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    }
  },
  darkMode: 'class',
  plugins: []
};

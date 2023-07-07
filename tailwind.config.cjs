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
        'fade-in-down': 'fade-in-down 250ms ease-out',
        'fade-out-up': 'fade-out-up 250ms ease-out',
        'fade-in-up': 'fade-in-up 350ms ease-out',
        'enter-from-right': 'enter-from-right 200ms ease-in-out',
        'enter-from-left': 'enter-from-left 200ms ease-in-out',
        'leave-to-left': 'leave-to-left 200ms ease-in-out',
        'leave-to-right': 'leave-to-right 200ms ease-in-out',
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 250ms ease-in-out'
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
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'enter-from-right': {
          from: {
            transform: 'translateX(3rem)',
            opacity: '0'
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'enter-from-left': {
          from: {
            transform: 'translateX(-3rem)',
            opacity: '0'
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'leave-to-left': {
          from: {
            transform: 'translateX(0)',
            opacity: '1'
          },
          to: {
            transform: 'translateX(-3rem)',
            opacity: '0'
          }
        },
        'leave-to-right': {
          from: {
            transform: 'translateX(0)',
            opacity: '1'
          },
          to: {
            transform: 'translateX(3rem)',
            opacity: '0'
          }
        },
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'fade-out': {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        }
      },
      listStyleType: {
        revert: 'revert'
      }
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    }
  },
  darkMode: 'class',
  plugins: []
};

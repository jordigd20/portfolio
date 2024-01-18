/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      screens: {
        'lg': '1280px'
      }
    },
    extend: {
      screens: {
        xs: "480px",
        xxs: "380px",
        xxxs: "320px",
      },
      colors: {
        background: 'var(--background)',
        textColor: 'var(--primary)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        primary: 'var(--primary)',
        border: 'var(--border)',
      },
      animation: {
        'slide-in': 'slide-in 300ms cubic-bezier(0.6, 0.6, 0, 1)',
        'slide-out': 'slide-out 300ms cubic-bezier(0.6, 0.6, 0, 1)',
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
        'slide-in': {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          }
        },
        'slide-out': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          }
        },
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

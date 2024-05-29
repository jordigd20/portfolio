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
        accent: 'var(--accent)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        primary: 'var(--primary)',
        flexible: {
          green: 'var(--flexible-green)',
        },
        link: {
          DEFAULT: 'var(--link)',
          hover: 'var(--link-hover)',
        },
        border: 'var(--border)',
      },
      animation: {
        'slide-in': 'slide-in 300ms cubic-bezier(0.6, 0.6, 0, 1)',
        'slide-out': 'slide-out 300ms cubic-bezier(0.6, 0.6, 0, 1)',
        'fade-in-up': 'fade-in-up 350ms ease-out',
        'cursor': 'cursor 1s step-end infinite',
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
        'cursor': {
          'from, to': {
            'border-right-color': 'transparent'
          },
          '50%': {
            'border-right-color': 'var(--flexible-green)'
          }
        },
      },
      listStyleType: {
        revert: 'revert'
      }
    },
    fontFamily: {
      sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
    }
  },
  darkMode: 'class',
  plugins: []
};

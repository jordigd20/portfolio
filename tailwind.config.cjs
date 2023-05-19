/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        textColor: 'var(--color-text)',
      }
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    }
  },
  darkMode: 'class',
  plugins: []
};

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* base colors scales */
        gray: colors.stone,

        /* design tokens */
        cream: '#f8f2e3',
        bg: colors.stone[50],
        primary: colors.stone[900],
        secondary: colors.stone[500],
        dim: colors.stone[400],

        /* social colors */
        rss: '#f26522',
        linkedin: '#0072b1',
        twitter: '#1DA1F2',
        github: '#171515',
        instagram: '#cd486b',
        facebook: '#3b5998',
      },
      fontSize: {
        '2xs': '.575rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: [...fontFamily.serif],
        system: [...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
  },
  plugins: [],
}

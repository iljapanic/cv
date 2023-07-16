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
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
        system: [...fontFamily.sans],
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

/** @type {import('tailwindcss').Config} */

// @ts-ignore
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        collectiveBlue: '#1F87FF'
      },
      borderRadius: {
        '3xl': '20px'
      },
      spacing: {
        '13': '3.25rem'
      }
    }
  },
  plugins: []
};

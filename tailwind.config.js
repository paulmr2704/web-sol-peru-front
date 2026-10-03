/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solNavy: {
          950: '#061322',
          900: '#0A213B',
          800: '#0D2744',
          700: '#14365D',
          600: '#1D4A7D',
        },
        solGold: {
          600: '#D9900B',
          500: '#F0A818',
          450: '#E59E15',
          400: '#F7BD4A',
          300: '#FCD685',
          100: '#FFF7E6',
        },
        solCream: {
          50: '#FCFAF7',
          100: '#FAF7F2',
          200: '#F5F1E9',
          300: '#EFE9DF',
          400: '#DFD7C7',
        },
        solGreen: {
          900: '#0E3A2F',
          800: '#155243',
          700: '#1C6956',
          600: '#23816B',
          100: '#E3F2ED',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

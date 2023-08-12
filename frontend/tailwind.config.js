/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['League Spartan', ' sans-serif'],
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        dark: '#373B53',
        lightDark: 'rgba(55, 59, 83, 0.1)',
        darkAlt: '#1E2139',
        dark2: '#252945',
        whiteAlt: '#DFE3FA',
        red: '#EC5757',
        gray: '#494E6E;',
        textGray: '#888EB0',
        textGrayAlt: '#7E88C3',
        purple: '#7C5DFA',
        bodyBg: '#F8F8FB',
        darkBodyBg: '#141625',
        green: '#33D69F',
        lightGreen: 'rgba(51, 214, 159, 0.1)',
        orange: '#FF8F00',
        lightOrange: 'rgba(255, 143, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

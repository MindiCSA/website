/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{html,js,markdown,md,mdx}',
    './docs/**/*.{html,js}',
    './layouts/**/*.html',
    './themes/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F3F5',
        primary: {
          50: '#FDFCFE',
          100: '#FAF9FD',
          200: '#F5F3F5', // Cream
          300: '#EDE9EE',
          400: '#DDD9DF',
          500: '#CCC6CA',
          600: '#B1ADB6',
          700: '#969096',
          800: '#7B757D',
          900: '#656070',
        },
        secondary: {
          50: '#FAFAFC',
          100: '#F5F6FA',
          200: '#ECEAF4',
          300: '#DFD6E9',
          400: '#C2B3D3',
          500: '#A592BE',
          600: '#8B6F9F',
          700: '#72527E',
          800: '#593C5E',
          900: '#472C47',
        },
        // Additional color variations can be added here
      },
    },
  },
  plugins: [],
};

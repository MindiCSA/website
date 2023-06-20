/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{html,js,markdown,md,mdx}',
    './docs/**/*.{html,js}',
    './layouts/**/*.{html,js}',
    './themes/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Lato', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Background Colors
        'soft-color': '#eff1f0',
        'light-color': '#ddd0c7',
        'medium-color': '#c9aea5',
        'heavy-color': '#c9aea5',
        'heaviest-color': '#3e2312',
        'dark-black': '#101e1f',

        // Primary Colors
        primary: '#ffeae7',
        'primary-light': '#fbd9d0',
        'primary-dark': '#ffcfc5',

        // Secondary Colors
        secondary: '#919b9d',
        'secondary-light': '#101e1f',
        'secondary-dark': '#0d1a1b',
      },
    },
  },
  plugins: [],
};

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
        'soft-pink': '#fdf5f1',
        'light-pink': '#fbd9d0',
        'pale-pink': '#ffcfc5',
        'grayish-blue': '#919b9d',
        'dark-grayish': '#485a5c',
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

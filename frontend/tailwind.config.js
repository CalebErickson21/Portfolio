/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light
        'light-bg-primary': '#F8F9FA',
        'light-bg-secondary': '#E9ECEF',
        'light-text-primary': '#212529',
        'light-text-secondary': '#495057',

        // Dark
        'dark-bg-primary': '#212529',
        'dark-bg-secondary': '#343A40',
        'dark-text-primary': '#F8F9FA',
        'dark-text-secondary': '#CED4DA'
      },
      screens: {
        // Minimum width breakpoints
        'min-sm': {'min': '576px'},
        'min-md': {'min': '768px'},
        'min-lg': {'min': '992px'},
        'min-xl': {'min': '1200px'},

        // Maximum width breakpoints
        'max-sm': {'max': '575px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '991px'},
        'max-xl': {'max': '1199px'},
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light
        'light-bg-primary': '#F9FAFB',
        'light-bg-secondary': '#EDEEEF',
        'light-text-primary': '#1E1F21',
        'light-text-secondary': '#4D4F52',
        'light-accent': '#1D4ED8',

        // Dark
        'dark-bg-primary': '#181A1B',
        'dark-bg-secondary': '#242628',
        'dark-text-primary': '#F3F4F6',
        'dark-text-secondary': '#A0A3A7',
        'dark-accent': '#60A5FA',

        // Constants
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


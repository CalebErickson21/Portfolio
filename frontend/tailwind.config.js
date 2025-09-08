/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg-primary': '#F8F9FA',
        'light-bg-secondary': '#E9ECEF',
        'light-text-primary': '#212529',
        'light-text-secondary': '#495057',

        'dark-bg-primary': '#212529',
        'dark-bg-secondary': '#343A40',
        'dark-text-primary': '#F8F9FA',
        'dark-text-secondary': '#CED4DA',
        
        'crimson': '#9D2235',
      }
    },
  },
  plugins: [],
};


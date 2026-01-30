/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: "#3B82F6",           // Primary blue
        neutral: "#828A8F",
      
        light: {
          background: "#FFFFFF",
          surface: "#F5F7FA",
          text: {
            primary: "#1F2937",
            secondary: "#4B5563",
          },
          accentSurface: "#EAF2FF",  // Soft blue-tinted surface
          accentText: "#1D4ED8",     // Deep blue text
        },
      
        dark: {
          background: "#0F172A",
          surface: "#111827",
          text: {
            primary: "#F3F4F6",
            secondary: "#C7CBD1",
          },
          accentSurface: "#172554",  // Muted deep blue surface
          accentText: "#93C5FD",     // Soft readable blue
        },
      },
      
      
			screens: {
				// Minimum width breakpoints
				'sm': {'min': '576px'},
				'md': {'min': '768px'},
				'lg': {'min': '992px'},
			},
    },
  },
  plugins: [],
};


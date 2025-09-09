// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nord Color Palette
        nord: {
          // Polar Night (dark blues/grays)
          0: '#2e3440',   // darkest
          1: '#3b4252',   // dark
          2: '#434c5e',   // medium dark
          3: '#4c566a',   // medium
          
          // Snow Storm (light grays/whites)
          4: '#d8dee9',   // light
          5: '#e5e9f0',   // lighter
          6: '#eceff4',   // lightest
          
          // Frost (blues)
          7: '#8fbcbb',   // light blue
          8: '#88c0d0',   // blue
          9: '#81a1c1',   // dark blue
          10: '#5e81ac',  // darkest blue
          
          // Aurora (accent colors)
          11: '#bf616a',  // red
          12: '#d08770',  // orange
          13: '#ebcb8b',  // yellow
          14: '#a3be8c',  // green
          15: '#b48ead',  // purple
        }
      },
      backgroundColor: {
        'primary': '#2e3440',      // nord0 - main background
        'secondary': '#3b4252',    // nord1 - secondary background
        'tertiary': '#434c5e',     // nord2 - tertiary background
        'surface': '#4c566a',      // nord3 - surface/card background
      },
      textColor: {
        'primary': '#eceff4',      // nord6 - primary text
        'secondary': '#e5e9f0',    // nord5 - secondary text
        'muted': '#d8dee9',        // nord4 - muted text
        'accent-blue': '#81a1c1',  // nord9 - accent text
        'accent-frost': '#88c0d0', // nord8 - links/highlights
      },
      borderColor: {
        'default': '#4c566a',      // nord3
        'light': '#434c5e',        // nord2
        'accent': '#81a1c1',       // nord9
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

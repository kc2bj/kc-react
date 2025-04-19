export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ['font-sans'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-sans': {
          'font-family': 'Satoshi, sans-serif',
        },
      });
    },
  ],
};
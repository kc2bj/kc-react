export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['"Inter"', 'sans-serif'],
        },
        colors: {
          primary: '#1c1c1e',
          accent: '#ef4444'
        }
      }
    },
    plugins: []
  };
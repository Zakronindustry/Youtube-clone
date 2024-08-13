module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0F1624',
      },
      backgroundImage: {
        'right-gradient': 'linear-gradient(to right, black 0.01%, transparent 99.99%)',
        'top-gradient': 'linear-gradient(to top, black 0.01%, transparent 99.99%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

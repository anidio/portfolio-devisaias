module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'neon': 'neon 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        neon: {
          '0%': { filter: 'drop-shadow(0 0 5px cyan)' },
          '100%': { filter: 'drop-shadow(0 0 20px cyan)' },
        },
        fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
        },
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to match your project's structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCE4C4', // Light cream color for the background
        accent: '#FFB74D', // Orange accent color for buttons and highlights
        textPrimary: '#222222', // Dark text color
        textSecondary: '#555555', // Subtle dark gray text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family, adjust if necessary
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};
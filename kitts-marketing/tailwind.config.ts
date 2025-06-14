/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FF0000',
        accent: '#00A651',
        // (black, red, green from St Kitts flag)
      },
    },
  },
  plugins: [],
}

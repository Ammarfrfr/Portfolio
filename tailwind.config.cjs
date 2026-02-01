/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      fontSize: {
        // add a 10xl if you want to use it in JSX
        '10xl': ['6rem', { lineHeight: '1' }]
      }
    }
  },
  plugins: [],
}

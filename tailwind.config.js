/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-hero-desktop': "url('src/assets/images/image-hero-desktop.jpg')",
        'image-hero-mobile': "url('src/assets/images/image-hero-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

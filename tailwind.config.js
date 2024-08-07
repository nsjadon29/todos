/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //eslint-disable-next-line no-unused-vars
      backgroundImage: () => ({
        'custom-background': "url('https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg')",
    }),
  },
  plugins: [],
}

}
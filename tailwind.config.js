/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js", // ✅ for Flowbite core
      "./node_modules/flowbite-react/**/*.js", // ✅ for Flowbite React
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin') // ✅ add Flowbite plugin
    ],
  }
  
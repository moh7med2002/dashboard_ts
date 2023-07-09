/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "Primary":"#e23428",
        "Secondary":"#135846",
        "Primary-100":"#e234281a"
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}


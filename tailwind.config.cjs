module.exports = {
  content: [
    "./*.{html, js}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
    ,
    backgroundPosition: {
      centerImg: '50%/cover',
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}

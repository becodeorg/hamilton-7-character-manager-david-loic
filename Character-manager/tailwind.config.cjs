module.exports = {
  content: [
    "./index.html",
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

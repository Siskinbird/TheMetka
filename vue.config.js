const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/note-app-2.1/' : '/',
  assetsDir: '',
  productionSourceMap: false
})

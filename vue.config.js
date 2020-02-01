const path = require('path')
const tsconfig = require('./tsconfig.json')
console.log(tsconfig.compilerOptions.paths)

module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '127.0.0.1'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
  }
}

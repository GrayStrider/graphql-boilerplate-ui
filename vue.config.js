const path = require('path')
const {paths} = require('./tsconfig.json').compilerOptions
const {forEachObjIndexed} = require('ramda')
const aliasPaths = (config) => {
  const getStr = (str) => str.replace(/\/.+/, '')
  forEachObjIndexed(([value], key) => {
    config.resolve.alias
      .set(getStr(key), path.resolve(__dirname, getStr(value)))
  }, paths)

}

module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '127.0.0.1'
  },
  chainWebpack: config => {
    aliasPaths(config)
  }
}

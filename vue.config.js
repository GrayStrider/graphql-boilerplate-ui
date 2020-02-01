const path = require('path')
const {paths} = require('./tsconfig.json').compilerOptions
const {forEachObjIndexed} = require('ramda')
async function sleep (ms) {
  return new Promise(resolve => setTimeout(() => resolve(undefined), ms))
}
const aliasPaths = (config) => {
  const getStr = (str) => str.replace(/\/.+/, '')
  forEachObjIndexed(([value], key) => {
    config.resolve.alias
      .set(getStr(key), path.resolve(__dirname, getStr(value)))
  }, paths)

}

const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)

const delayRequest = asyncHandler(async (req, res, next) => {
  console.log('sleeping: ', req.xnr)
  await sleep(2000)
  next();
})


module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: '127.0.0.1',
    setup: (app) => {
      app.use(delayRequest)
    }
  },
  chainWebpack: config => {
    aliasPaths(config)
  }
}

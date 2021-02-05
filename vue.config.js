module.exports = {
  publicPath: './',
  assetsDir: "static",
  outputDir: "docs",
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          
        },
        javascriptEnabled: true
      }
    }
  }
}
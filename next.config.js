const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-Sass")

const { resolve } = require("path")

module.exports = withCSS(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config) {
    config.resolve.alias.components = resolve(__dirname, "./src/components")
    return config
  },
}))

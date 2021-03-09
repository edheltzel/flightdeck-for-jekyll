const config = require("./flightdeck.manifest.js")
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, config.assets + config.js.dest )],
        loader: "babel-loader"
      }
    ]
  }
};

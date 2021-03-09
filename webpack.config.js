const config = require('./flightdeck.manifest.js');
const path = require("path");
module.exports = {
  mode: config.webpack.mode,
  output: {
    filename: "bundle.js"
  },
  module: config.webpack.module.rules
};

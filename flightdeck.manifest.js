const path = require('path');
module.exports = {
  port: 4000,

  assets: './assets',

  imagemin: {
    src: 'images',
    dest: 'images',
    interlaced: false,
    mozjpeg:{
      quality: 75,
      progressive: true,
    },
    optimizationLevel: 5,
    //svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: '',
    },
    dest: '_site',
    data: '_data',
  },

  js: {
    src: 'js',
    dest: 'js',
  },

  sass: {
    src: 'scss',
    dest: 'css',
    outputStyle: 'compressed', //nested, expanded, compact, compressed
  },

  webpack: {
    mode: 'production',
    // makes debuggin easier - options found -> https://webpack.js.org/configuration/devtool/
    module: {
      rules: [
        {
          test: /\.js?$/,
          include: [path.resolve(__dirname, "./assets/js")],
          loader: "babel-loader"
        }
      ],
    },
  },
};

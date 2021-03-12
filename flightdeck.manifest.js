const path = require('path');
module.exports = {
  port: 4000,

  assets: './assets',

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: '',
    },
    dest: '_site'
  },

  sass: {
    src: '/scss/**/*.scss',
    dest: 'css',
    watchPath: '/scss/**/*',
    outputStyle: 'compressed', //nested, expanded, compact, compressed
  },

  js: {
    src: 'js',
    dest: 'js',
    watchPath: '/js/**/*',
    entry: 'bundle.js'
  },

  imagemin: {
    src: 'images',
    dest: 'images',
    watchPath: '/images/**/*',
    interlaced: false,
    mozjpeg:{
      quality: 75,
      progressive: true,
    },
    optimizationLevel: 5,
  },
};

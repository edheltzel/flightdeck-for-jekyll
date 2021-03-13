const path = require('path');
module.exports = {
  port: 4000,
  assets: './assets/',

  sass: {
    src: '_sass/**/*.scss',
    dest: 'css',
    outputStyle: 'compressed',
  },

  js: {
    src: '_js/**/*',
    dest: 'js',
    entry: 'bundle.js'
  },

  imagemin: {
    src: '_images/**/*',
    dest: 'images',
    interlaced: false,
  mozjpeg:{
      quality: 75,
      progressive: true,
    },
    optimizationLevel: 5,
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: '',
    },
    dest: '_site',
    watch: [
      '_includes/**/*',
      '_layouts/**/*',
      '_pages/**/*',
      '_posts/**/*',
      '_collections/**/*',
      '_data/**/*',
      '_config*yml',
      '*.html',
      '*.md',
      '*.markdown'
    ]
  },
};

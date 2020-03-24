const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');

gulp.task('imagemin', function() {
  return gulp
    .src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: config.imagemin.interlaced }),
        imagemin.mozjpeg([config.imagemin.mozjpeg]),
        imagemin.optipng({
          optimizationLevel: config.imagemin.optimizationLevel,
        }),
        // imagemin.svgo({
        //   plugins: [config.imagemin.svgoPlugins],
        // }),
      ])
    )
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
});

// SVG Config
var svgSettings = {
  mode: {
    symbol: {
      // symbol mode to build the SVG
      render: {
        css: false, // CSS output option for icon sizing
        scss: false, // SCSS output option for icon sizing
      },
      dest: 'sprite', // destination folder
      prefix: '.svg--%s', // BEM-style prefix if styles rendered
      sprite: 'sprite.svg', //generated sprite name
      example: true, // Build a sample page, please!
    },
  },
};
gulp.task('svg', () =>
  gulp
    .src(config.assets + '/' + config.svgSprite.src + '*.svg')
    .pipe(svgSprite(svgSettings))
    .pipe(gulp.dest(config.assets + '/' + config.svgSprite.dest))
);

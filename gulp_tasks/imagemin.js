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

gulp.task('svg', () =>
  gulp
    .src(config.assets + '/' + config.svgSprite.src + '*.svg')
    .pipe(
      svgSprite(config.svgSprite.mode)
    )
    .pipe(gulp.dest(config.assets + '/' + config.svgSprite.dest))
);

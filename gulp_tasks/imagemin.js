const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const svgSymbols = require('gulp-svg-symbols');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');

gulp.task('imagemin', () => {
  gulp
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
      ])
    )
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
});

// SVG Sprites
gulp.task('svg', () =>
  gulp
    .src(config.assets + '/' + config.svgSprite.src + '/*.svg')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(svgmin())
    .pipe(
      svgSymbols({
        templates: ['default-svg'],
        svgAttrs: {
          width: 0,
          height: 0,
          display: 'none',
        },
      })
    )
    .pipe(rename(config.svgSprite.filename))
    .pipe(gulp.dest(config.assets + '/' + config.svgSprite.dest))
);

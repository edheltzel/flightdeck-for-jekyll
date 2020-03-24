const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const svgSprite = require('gulp-svg-sprite');

gulp.task('imagemin', function() {
  return gulp
    .src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(
      imagemin({
        progressive: config.imagemin.progressive,
        svgoPlugins: config.imagemin.svgoPlugins,
        use: [pngquant(), mozjpeg()],
      })
    )
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
});

gulp.task('svg', () =>
  gulp
    .src(config.assets + '/' + config.svgSprite.src + '*.svg')
    .pipe(
      svgSprite({
        mode: {
          inline: true,
          symbol: true,
        },
        svg: {
          xmlDeclaration: false,
        },
      })
    )
    .pipe(gulp.dest(config.assets + '/' + config.svgSprite.dest))
);

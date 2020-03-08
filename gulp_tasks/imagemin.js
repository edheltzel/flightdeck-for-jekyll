const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

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

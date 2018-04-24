const autoprefixer = require('autoprefixer');
const config       = require('../flightdeck.config.js');
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src(config.assets + '/' + config.sass.src + '/**/*')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: config.sass.autoprefixer.browsers
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.assets + '/' + config.sass.dest));
});

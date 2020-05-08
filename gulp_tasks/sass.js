const autoprefixer = require('autoprefixer');
const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
  return gulp
  .src(config.assets + '/' + config.sass.src + '/**/*')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: config.sass.outputStyle }).on('error', sass.logError))
  .pipe(sourcemaps.write({includeContent: false}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(postcss([ autoprefixer() ]))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.assets + '/' + config.sass.dest));
});

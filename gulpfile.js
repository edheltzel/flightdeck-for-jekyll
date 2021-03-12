"use strict";
const config = require('./flightdeck.manifest');
// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-dart-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: config.jekyll.dest
    },
    port: config.port
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.notify('🛠 Site Rebuilt')
  browsersync.reload();
  done();
}

// Clean assets
function cleanAssets() {
  return del([config.jekyll.dest + "/assets/"]);
}

// Optimize Images
function images() {
  return gulp
    .src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(newer(config.jekyll.dest + '/assets/' + config.imagemin.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: config.imagemin.interlaced }),
        imagemin.mozjpeg({
          quality: config.imagemin.mozjpeg.quality,
          progressive: config.imagemin.mozjpeg.progressive
        }),
        imagemin.optipng({
          optimizationLevel: config.imagemin.optimizationLevel,
        })
      ])
    )
    .pipe(gulp.dest(config.jekyll.dest + '/assets/' + config.imagemin.dest));}

// CSS task
function css() {
  return gulp
    .src(config.assets + '/' + config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.jekyll.dest + '/assets/' + config.sass.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(config.jekyll.dest + '/assets/' + config.sass.dest))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src([config.assets + '/js/**/*.js', './gulpfile.js', '!node_modules/**'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src([config.assets + '/js/**/*'])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat(config.js.entry))
      .pipe(sourcemaps.write())
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(config.jekyll.dest + '/assets/' + config.js.dest))
      .pipe(browsersync.stream())
  );
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch(config.assets + config.sass.watchPath, css);
  gulp.watch(config.assets + config.js.watchPath, gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_projects/**/*",
      "./_data/**/*",
      "./_config*.yml"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
  gulp.watch(config.assets + config.imagemin.watchPath, images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(cleanAssets, gulp.parallel(css, images, jekyll, js));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.cleanAssets = cleanAssets;
exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, watch);

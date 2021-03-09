"use strict";
const config = require('./flightdeck.manifest.js');

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
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
const sass = require("gulp-sass");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

// Optimize Images
function images() {
  return gulp
    .src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: config.imagemin.interlaced }),
        imagemin.mozjpeg([ config.imagemin.mozjpeg ]),
        imagemin.optipng({
          optimizationLevel: config.imagemin.optimizationLevel,
        }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));}

// CSS task
function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src([config.assets + '/' + config.js.src + '/**/*.js', './gulpfile.js', '!node_modules/**'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src([config.assets + '/' + config.js.src + '/**/*'])
      .pipe(plumber())
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest('.' + config.jekyll.dest + config.assets + config.js.dest))
      .pipe(browsersync.stream())
  );
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch(config.assets + '/' + config.sass.dest + '/**/*', css);
  gulp.watch(config.assets + '/' + config.js.dest + '/**/*', gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "!" + config.jekyll.dest + "/**/*",
      "./" + config.jekyll.data + "/**/*",
      "./**/*.html",
      "./**/*.md",
      "./**/*.markdown",
      "_config*.yml",
    ],
    gulp.series(jekyll, browserSyncReload)
  );
  gulp.watch(config.assets + '/' + config.imagemin.dest + '/**/*', images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;

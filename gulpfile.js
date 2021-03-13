'use strict';
const config = require('./flightdeck.manifest');
// Load plugins
const {dest, src, watch, series, parallel} = require('gulp');
const argv = require('yargs').argv;
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const cp = require('child_process');
const cssnano = require('cssnano');
const del = require('del');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-dart-sass');
const terser = require('gulp-terser');
const siteAssets = config.jekyll.dest + '/assets/';

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
  browsersync.reload();
  done();
}

// Clean assets
function cleanAssets() {
  return del(siteAssets);
}

// Optimize Images
function images() {
  return src(config.assets + config.imagemin.src)
    .pipe(newer(siteAssets + config.imagemin.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: config.imagemin.interlaced }),
        imagemin.mozjpeg(config.imagemin.mozjpeg),
        imagemin.optipng({
          optimizationLevel: config.imagemin.optimizationLevel,
        })
      ])
    )
    .pipe(dest(siteAssets + config.imagemin.dest));}

// CSS task
function css() {
  return src(config.assets + config.sass.src, {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(siteAssets + config.sass.dest, {sourcemaps: '.'}))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return src([config.assets + config.js.src, './gulpfile.js', '!node_modules/**'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return src(config.assets + config.js.src, {sourcemaps: true})
      .pipe(plumber())
      .pipe(terser())
      .pipe(dest(siteAssets + config.js.dest, {sourcemaps: '.'}))
      .pipe(browsersync.stream());
}

// Jekyll
function jekyll(done) {
  let jekyllConfig = config.jekyll.config.default;
  if (argv.jekyllEnv == 'production') {
    process.env.JEKYLL_ENV = 'production';
    jekyllConfig += config.jekyll.config.production ? ',' + config.jekyll.config.production : '';
  } else {
    jekyllConfig += config.jekyll.config.development ? ',' + config.jekyll.config.development : '';
  }
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config', jekyllConfig ], { stdio: 'inherit' }).on('close', done);
}

// Watch files
function watchFiles() {
  watch(config.assets + config.sass.src, css);
  watch(config.assets + config.js.src, series(scriptsLint, scripts));
  watch(config.jekyll.watch, series(jekyll, browserSyncReload));
  watch(config.assets + config.imagemin.src, images);
}

// define complex tasks
const js = series(scriptsLint, scripts);
const build = series(jekyll, css, js, images);
const monitor = parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.cleanAssets = cleanAssets;
exports.build = build;
exports.monitor = monitor;
exports.default = series(build, monitor);

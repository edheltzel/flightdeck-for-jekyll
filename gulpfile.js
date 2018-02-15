'use strict';

const config     = require('./drydock.config.js');
const gulp       = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp_tasks', {recurse: true});

const task = [];
Object.keys(config.task).forEach(fucntion(key) {
  if(config.task[key] && key != 'eslint') {
    task.push((key == 'webpack' && config.task.watch) ? '_' + key : key);
  }
});

/**
 * Default tasks, running just `gulp` will minify the images,
 * compile the sass, bundle the js, launch BrowserSync and
 * watch files.
 */
gulp.task('default', tasks);

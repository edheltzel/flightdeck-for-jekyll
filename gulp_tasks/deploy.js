const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const rsync = require('gulp-rsync');

gulp.task('deploy', function() {
  return gulp.src(config.jekyll.dest).pipe(
    rsync({
      root: config.jekyll.dest,
      hostname: config.deploy.remote,
      destination: config.deploy.root,
      recursive: true,
      compress: true,
      incremental: true,
      exclude: [config.deploy.exclude],
      dryrun: config.deploy.dryrun,
    })
  );
});

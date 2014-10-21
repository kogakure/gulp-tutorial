var gulp = require('gulp');
var rsync = require('gulp-rsync');
var config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync({
      destination: config.destination,
      root: config.root,
      hostname: config.hostname,
      username: config.username,
      incremental: config.incremental,
      progress: config.progress,
      emptyDirectories: config.emptyDirectories,
      recursive: config.recursive,
      clean: config.clean,
      exclude: config.exclude,
      include: config.include
    }));
});

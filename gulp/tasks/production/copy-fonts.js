var gulp   = require('gulp');
var config = require('../../config').copyfonts.production;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

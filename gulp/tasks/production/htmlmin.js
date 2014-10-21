var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config  = require('../../config').optimize.htmlmin;

/**
 * Minimize HTML
 */
gulp.task('htmlmin', function() {
  return gulp.src(config.src)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(config.dest));
});

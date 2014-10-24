var gulp   = require('gulp');
var base64 = require('gulp-base64');
var config = require('../../config');

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('base64', ['sass'], function() {
  var base64Config = config.base64.options;

  return gulp.src(config.base64.src)
    .pipe(base64(base64Config))
    .pipe(gulp.dest(config.base64.dest));
});

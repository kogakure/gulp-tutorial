var gulp   = require('gulp');
var webp   = require('gulp-webp');
var config = require('../../config').webp;

/**
 * Convert images to WebP
 */
gulp.task('webp', function() {
  return gulp.src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});

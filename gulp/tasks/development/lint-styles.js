var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter  = require('postcss-reporter');
var config    = require('../../config');

gulp.task('lint-styles', function () {
  return gulp.src(config.lintStyles.src)
  .pipe(postcss([
    stylelint(config.lintStyles.options.stylelint),
    reporter(config.lintStyles.options.reporter)
  ]));
});

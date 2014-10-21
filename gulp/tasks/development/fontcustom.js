var gulp  = require('gulp');
var shell = require('gulp-shell');

/**
 * Generate fonts with Fontcustom
 * `brew install fontforge --with-python`
 * `brew install eot-utils`
 * `gem install fontcustom -v "1.2.0"` needed
 */
gulp.task('fontcustom', shell.task([
  'fontcustom compile'
]));

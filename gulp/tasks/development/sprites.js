var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith({
    imgName: config.image.imgName,
    imgPath: config.image.imgPath,
    cssName: config.css.cssName,
    cssFormat: config.css.cssFormat,
    cssOpts: config.css.cssOpts
  }));

  spriteData.img
    .pipe(gulp.dest(config.image.dest));

  spriteData.css
    .pipe(gulp.dest(config.css.dest));
});

var gulp = require('gulp');
var pug = require('gulp-pug');

module.exports = function(options) {
  options.src = options.src || 'app/**/*.pug';
  options.dest = options.dest || 'www/build';
  options.pug = options.pug || { pretty: true };

  return gulp.src(options.src)
    .pipe(pug(options.pug))
    .pipe(gulp.dest(options.dest));
};

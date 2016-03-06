var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');


gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    [/*'build-es6', 'build-commonjs', 'build-amd', 'build-system',*/ 'build-html'],
    callback
  );
});
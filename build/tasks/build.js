var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var merge = require('merge2');  // Require separate installation 
var ts = require('gulp-typescript');

gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});


gulp.task('compile-amd', function() {
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(ts({
			declaration: true,
			noExternalResolve: true,
            experimentalDecorators :true,
            allowJs :true,
            outFile : paths.output + 'amd/aurelia-metro-ui.js'
		}));
 
	return merge([
		tsResult.dts.pipe(gulp.dest(paths.output + 'amd')),
		tsResult.js.pipe(gulp.dest(paths.output + 'amd'))
	]);
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'compile-amd',
    [/*'build-es6', 'build-commonjs', 'build-amd', 'build-system',*/ 'build-html'],
    callback);
});
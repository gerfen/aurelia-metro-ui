var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    typescript = require('gulp-tsb'),
    //sourcemaps = require('gulp-sourcemaps'),
    paths = require('../paths');


var typescriptCompiler = typescriptCompiler || null;

gulp.task('compile-sample', [], function(done) {
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.create(require('../../tsconfig.json').compilerOptions);
  }
  return gulp.src(paths.sample + '/**/*.ts')
    .pipe(plumber())
    //.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescriptCompiler())
    //.pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.sample));
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve-sample', ['compile-sample'], function(done) {
  var bs = browserSync.create('Sample Server');

  bs.init({
    server: {
      baseDir: paths.sample,
      routes: {
        '/aurelia-metro-ui': path.join(paths.output, 'amd')
      },
    },
  }, done);
});

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    //sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    paths = require('../paths'),
    buildUtil = require('../buildUtil'),
    buildLogger = require('../buildLogger')
    logger = new buildLogger.logger();;


var typescriptCompiler = typescriptCompiler || null;

gulp.task('compile-sample', [], function(done) {
  
  var tsProject = ts.createProject('tsconfig.json');
  
  return gulp.src([paths.sample + '/src/**/*.ts',
                  'node_modules/aurelia-framework/dist/aurelia-framework.d.ts',
                  'node_modules/aurelia-logging/dist/aurelia-logging.d.ts',
                  'node_modules/aurelia-loader/dist/aurelia-loader.d.ts',
                  'node_modules/aurelia-pal/dist/aurelia-pal.d.ts',
                  'node_modules/aurelia-templating/dist/aurelia-templating.d.ts',
                  'node_modules/aurelia-path/dist/aurelia-path.d.ts',
                  'node_modules/aurelia-binding/dist/aurelia-binding.d.ts',
                  'node_modules/aurelia-metadata/dist/aurelia-metadata.d.ts',
                  'node_modules/aurelia-dependency-injection/dist/aurelia-dependency-injection.d.ts',
                  'node_modules/aurelia-task-queue/dist/aurelia-task-queue.d.ts',
                  'custom_typings/**/*.d.ts'])
    .pipe(plumber())
    //.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(ts(tsProject, undefined, new buildUtil.customTsReporter(logger)))
    //.pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.sample));
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('run-sample', ['build-amd','compile-sample'], function(done) {
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

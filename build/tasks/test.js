var gulp = require('gulp'),
    Karma = require('karma').Server
    path = require('path'),
    plumber = require('gulp-plumber'),
    //sourcemaps = require('gulp-sourcemaps'),
    ts = require('gulp-typescript'),
    paths = require('../paths'),
    buildUtil = require('../buildUtil'),
    buildLogger = require('../buildLogger')
    logger = new buildLogger.logger();

gulp.task('compile-tests', [], function(done) {
  
  var tsProject = ts.createProject('tsconfig.json');
  
  return gulp.src([paths.tests + '/**/*.ts',
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
    .pipe(ts(tsProject, undefined, new buildUtil.customTsReporter(logger)))
    .pipe(gulp.dest(paths.tests));
});

/**
 * Run test once and exit
 */
gulp.task('run-unit-tests',['compile-tests'], function (done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, function() { done(); }).start();
});

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    //typescript = require('gulp-tsb'),
    ts = require('gulp-typescript'),
    gutil = require('gulp-util'),
    gulpIgnore = require('gulp-ignore'),
    through2 = require('through2'),
    tools = require('aurelia-tools'),
    concat = require('gulp-concat'),
    insert = require('gulp-insert'),
    
    paths = require('../paths'),
    buildUtil = require('../buildUtil'),
    buildLogger = require('../buildLogger')
    logger = new buildLogger.logger();
    //Log = require('log'),
    //fs = require('fs'),
    //args = require('yargs').argv,
    //jsName = paths.packageName + '.ts';
    //gulp-if
    //gutil.log(gutil.colors.blue('args : ' + args.fullLog))
    
    //https://www.npmjs.com/package/log
    //var logger = new Log('debug', fs.createWriteStream('build/logs/' + buildUtil.createLogFileName()));
    //log.debug('preparing email\r\n');
    //log.info('sending email\r\n');
    //log.error('failed to send email\r\n');
    //gutil.log(gutil.colors.red('Error (test): '));
/*


function removeDTSPlugin(options) {
  var found = options.plugins.find(function(x){
    return x instanceof Array;
  });

  var index = options.plugins.indexOf(found);
  options.plugins.splice(index, 1);
  return options;
}

gulp.task('concat-index', function(){
  var importsToAdd = [];
  var files = [
    'services/muDialogService.ts',
    'services/muNotifyService.ts',
    'aurelia-metro-ui.ts'
    ].map(function(file){
      return paths.src + file;
    });

  return gulp.src(files)
    .pipe(gulpIgnore.exclude('aurelia-metro-ui.ts'))
    .pipe(through2.obj(function(file, enc, callback) {
      file.contents = new Buffer(tools.extractImports(file.contents.toString("utf8"), importsToAdd));
      this.push(file);
      return callback();
    }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents;
    }))
    .pipe(gulp.dest(paths.output));
});

*/
// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
//var typescriptCompiler = typescriptCompiler || null;

gulp.task('build-amd',['build-html-amd'], function() {
  //if(!typescriptCompiler) {
  //  typescriptCompiler = typescript.create(require('../../tsconfig.json').compilerOptions);
  //}
  var tsProject = ts.createProject('tsconfig.json');
  
  return gulp.src(paths.src + '**/*.ts')
    .pipe(plumber())
    //.pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(typescriptCompiler())
    .pipe(ts(tsProject, undefined, new buildUtil.customTsReporter(logger)))
    //.on('close', function(code, signal){
    //  gutil.log(gutil.colors.red('Compile code: ' + signal));
    //})
    //.pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-amd',
    //'build-index',
    //['build-es2015-temp', 'build-commonjs', 'build-amd', 'build-system', 'build-es2015', 'build-css'],
    //'minifyCSS',
    //'build-dts',
    callback
  );
});
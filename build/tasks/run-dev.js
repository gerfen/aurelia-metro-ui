var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['build'], function(done) {
  var bs = null;
  if(browserSync.has('Sample server')){
      bs =   browserSync.get('Sample server');
  }else{
      bs= bs = browserSync.create('Sample Server');

  bs.init({
    server: {
      baseDir: paths.sample,
      routes: {
        '/aurelia-metro-ui': path.join(paths.output, 'amd')
      },
    },
  }, done);
  }
 

  gulp.watch(paths.style, bs.reload).on('change', reportChange);
  gulp.watch(paths.src + '**/*', bs.reload).on('change', reportChange);
  gulp.watch(paths.sample + '/*', bs.reload).on('change', reportChange);
});

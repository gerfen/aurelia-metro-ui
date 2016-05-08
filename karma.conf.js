module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],//'jspm', 
    jspm: {
      // Edit this to your needs
      loadFiles: ['src/**/*.js', 'test/**/*.js']
    },
    // list of files / patterns to load in the browser
    files: [
      'test/**/*.html'
    ],
    exclude: [],
    preprocessors: { },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

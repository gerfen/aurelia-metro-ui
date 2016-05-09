var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  src: appRoot,
  //source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  ts: appRoot + '**/*.ts',
  style: appRoot +'css/**/*.css',
  //less: appRoot + 'css/**/*.less',
  //tests: 'test/**/*.js',
  output: 'dist/',
  sample: 'sample',
  tests: 'test',
  doc:'./doc',
  packageName: pkg.name,
  styleFolder: './styles',
  fonts: appRoot+ 'fonts/*'
};

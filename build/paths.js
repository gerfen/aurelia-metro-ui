var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  src: appRoot,
  //source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  less: appRoot + 'styles/**/*.less',
  //tests: 'test/**/*.js',
  output: 'dist/',
  sample: 'sample',
  doc:'./doc',
  packageName: pkg.name,
  styleFolder: './styles',
};

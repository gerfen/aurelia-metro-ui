var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  src: appRoot,
  //source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  ts: appRoot + '**/*.ts',
  style: 'styles/**/*.css',
  less: appRoot + 'styles/**/*.less',
  //tests: 'test/**/*.js',
  output: 'dist/',
  sample: 'sample',
  tests: 'test',
  doc:'./doc',
  packageName: pkg.name,
  styleFolder: './styles',
};

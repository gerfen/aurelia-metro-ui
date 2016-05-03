export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-metro-ui', config => {

    });
    
  aurelia.start().then(a => a.setRoot('src/app'));
}
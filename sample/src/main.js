define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-metro-ui', function (config) {
        });
        aurelia.start().then(function (a) { return a.setRoot('src/app'); });
    }
    exports.configure = configure;
});

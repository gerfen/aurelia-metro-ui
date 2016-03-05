define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia
            .use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-ui-virtualization');
        ;
        aurelia.start().then(function (a) { return a.setRoot('src/app'); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map
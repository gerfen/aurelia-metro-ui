define(["require", "exports"], function (require, exports) {
    function configure(aurelia) {
        aurelia
            .use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-ui-virtualization')
            .plugin('aurelia-metro-ui');
        aurelia.start().then(function (a) { return a.setRoot('demo/app'); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map
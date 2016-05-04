define(["require", "exports", './services/muDialogService', './services/muNotifyService'], function (require, exports, muDialogService_1, muNotifyService_1) {
    "use strict";
    function configure(config, callback) {
        config.globalResources('./controls/metro-button');
        config.globalResources('./controls/metro-tab-control');
    }
    exports.configure = configure;
    exports.MuDialogService = muDialogService_1.MuDialogService;
    exports.MuNotifyService = muNotifyService_1.MuNotifyService;
});

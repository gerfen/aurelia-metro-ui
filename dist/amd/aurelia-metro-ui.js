define(["require", "exports", './services/metro-dialog-service', './services/metro-notify-service', '/aurelia-metro-ui/css/metro.css!', '/aurelia-metro-ui/css/metro-icons.css!', '/aurelia-metro-ui/css/metro-responsive.css!', '/aurelia-metro-ui/css/metro-extras.css!'], function (require, exports, metro_dialog_service_1, metro_notify_service_1) {
    "use strict";
    function configure(config, callback) {
        config.globalResources('./controls/metro-button');
        config.globalResources('./controls/metro-tab-control');
        config.container.registerSingleton('metro-notify-service', metro_notify_service_1.MetroNotifyService);
        config.container.registerSingleton('metro-dialog-service', metro_dialog_service_1.MetroDialogService);
    }
    exports.configure = configure;
});

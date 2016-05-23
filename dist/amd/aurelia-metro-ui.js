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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtbWV0cm8tdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFTQSxtQkFBMEIsTUFBTSxFQUFFLFFBQVE7UUFFekMsTUFBTSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxlQUFlLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFDLHlDQUFrQixDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBQyx5Q0FBa0IsQ0FBQyxDQUFDO0lBWS9FLENBQUM7SUFsQmUsaUJBQVMsWUFrQnhCLENBQUEiLCJmaWxlIjoiYXVyZWxpYS1tZXRyby11aS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

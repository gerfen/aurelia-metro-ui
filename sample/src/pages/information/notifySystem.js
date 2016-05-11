define(["require", "exports", "aurelia-dependency-injection"], function (require, exports, aurelia_dependency_injection_1) {
    "use strict";
    var NotifySystem = (function () {
        function NotifySystem() {
            this.notifyService = aurelia_dependency_injection_1.Container.instance.get('metro-notify-service');
            this.options = {
                iconClass: "mif-windows",
                caption: "Caption",
                content: "Content",
                shadow: true,
                timeout: 3000,
                keepOpen: false,
                notifyClass: "success",
                style: ""
            };
        }
        NotifySystem.prototype.showNotify = function () {
            this.notifyService.Show(this.options);
        };
        return NotifySystem;
    }());
    exports.NotifySystem = NotifySystem;
});

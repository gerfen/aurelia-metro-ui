define(["require", "exports"], function (require, exports) {
    "use strict";
    var MuNotifyService = (function () {
        function MuNotifyService() {
        }
        MuNotifyService.prototype.notify = function (message) {
            alert(message);
        };
        return MuNotifyService;
    }());
    exports.MuNotifyService = MuNotifyService;
});

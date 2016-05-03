define(["require", "exports"], function (require, exports) {
    "use strict";
    var MuDialogService = (function () {
        function MuDialogService() {
        }
        MuDialogService.prototype.show = function (message) {
            alert(message);
            this.name = 5;
        };
        return MuDialogService;
    }());
    exports.MuDialogService = MuDialogService;
});

define(["require", "exports", 'aurelia-dependency-injection'], function (require, exports, aurelia_dependency_injection_1) {
    "use strict";
    var DialogSystem = (function () {
        function DialogSystem() {
            this.dialogService = aurelia_dependency_injection_1.Container.instance.get('metro-dialog-service');
        }
        DialogSystem.prototype.showMessageBox = function () {
            this.dialogService.showMessageBox(this.msgTitle, this.msgMessage, 0);
        };
        return DialogSystem;
    }());
    exports.DialogSystem = DialogSystem;
});

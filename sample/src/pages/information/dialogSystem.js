define(["require", "exports", 'aurelia-dependency-injection'], function (require, exports, aurelia_dependency_injection_1) {
    "use strict";
    var DialogSystem = (function () {
        function DialogSystem() {
            this.dialogService = aurelia_dependency_injection_1.Container.instance.get('metro-ui-dialog-service');
        }
        DialogSystem.prototype.showMessageBox = function () {
        };
        return DialogSystem;
    }());
    exports.DialogSystem = DialogSystem;
});

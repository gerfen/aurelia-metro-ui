define(["require", "exports"], function (require, exports) {
    "use strict";
    var DialogViewModelBase = (function () {
        function DialogViewModelBase() {
        }
        DialogViewModelBase.prototype.init = function (view, resolve, reject) {
            this.view = view;
            this.resolve = resolve;
            this.reject = reject;
        };
        DialogViewModelBase.prototype.show = function () {
            this.view.bind(this);
            this.view.created();
            this.view.appendNodesTo(document.body);
            this.view.attached();
            var vm = this;
            if (vm && typeof vm.activate === 'function') {
                vm.activate();
            }
        };
        DialogViewModelBase.prototype.close = function () {
            this.view.removeNodes();
            this.view.detached();
            this.resolve();
        };
        return DialogViewModelBase;
    }());
    exports.DialogViewModelBase = DialogViewModelBase;
});

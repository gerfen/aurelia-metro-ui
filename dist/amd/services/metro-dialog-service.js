var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-loader", "./dialog-view-model-base"], function (require, exports, aurelia_framework_1, aurelia_loader_1, dialog_view_model_base_1) {
    "use strict";
    var MetroDialogService = (function () {
        function MetroDialogService(loader, templatingEngine, viewCompiler, viewResources, container) {
            this.loader = loader;
            this.templatingEngine = templatingEngine;
            this.viewCompiler = viewCompiler;
            this.viewResources = viewResources;
            this.container = container;
            this.dialogViews = {};
        }
        MetroDialogService.prototype.showMessageBox = function (title, message, buttons) {
            var self = this;
            return new Promise(function (resolve, reject) {
                var viewModel = new MessgeBoxViewModel();
                viewModel.title = title;
                viewModel.message = message;
                viewModel.buttons = buttons;
                self.showDialog("./message-box-view.html", viewModel);
            });
        };
        MetroDialogService.prototype.showDialog = function (viewUrl, viewModel) {
            var _this = this;
            var self = this;
            return new Promise(function (resolve, reject) {
                if (!self.dialogViews[viewUrl]) {
                    self.loader.loadTemplate(viewUrl).then(function (val) {
                        var view = _this.viewCompiler.compile(val.template, self.viewResources).create(self.container, viewModel);
                        self.dialogViews[viewUrl] = view;
                        viewModel.init(view, resolve, reject);
                        viewModel.show();
                    });
                }
                else {
                    var view = self.dialogViews[viewUrl];
                    viewModel.init(view, resolve, reject);
                    viewModel.show();
                }
            });
        };
        MetroDialogService = __decorate([
            aurelia_framework_1.inject(aurelia_loader_1.Loader, aurelia_framework_1.TemplatingEngine, aurelia_framework_1.ViewCompiler, aurelia_framework_1.ViewResources, aurelia_framework_1.Container), 
            __metadata('design:paramtypes', [aurelia_loader_1.Loader, aurelia_framework_1.TemplatingEngine, aurelia_framework_1.ViewCompiler, aurelia_framework_1.ViewResources, aurelia_framework_1.Container])
        ], MetroDialogService);
        return MetroDialogService;
    }());
    exports.MetroDialogService = MetroDialogService;
    (function (MessageBoxButton) {
        MessageBoxButton[MessageBoxButton["OK"] = 0] = "OK";
        MessageBoxButton[MessageBoxButton["Cancel"] = 1] = "Cancel";
    })(exports.MessageBoxButton || (exports.MessageBoxButton = {}));
    var MessageBoxButton = exports.MessageBoxButton;
    (function (MessageBoxButtons) {
        MessageBoxButtons[MessageBoxButtons["OK"] = 0] = "OK";
        MessageBoxButtons[MessageBoxButtons["OKCancel"] = 1] = "OKCancel";
    })(exports.MessageBoxButtons || (exports.MessageBoxButtons = {}));
    var MessageBoxButtons = exports.MessageBoxButtons;
    var MessgeBoxViewModel = (function (_super) {
        __extends(MessgeBoxViewModel, _super);
        function MessgeBoxViewModel() {
            _super.call(this);
        }
        MessgeBoxViewModel.prototype.okClick = function () {
            this.resolve(MessageBoxButton.OK);
            this.close();
        };
        MessgeBoxViewModel.prototype.cancelClick = function () {
            this.resolve(MessageBoxButton.Cancel);
            this.close();
        };
        MessgeBoxViewModel.prototype.closeClick = function () {
            this.reject();
            this.close();
        };
        return MessgeBoxViewModel;
    }(dialog_view_model_base_1.DialogViewModelBase));
});

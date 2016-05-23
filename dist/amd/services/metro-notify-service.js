var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var MetroNotifyService = (function () {
        function MetroNotifyService(templatingEngine, viewCompiler, viewResources, container) {
            this.templatingEngine = templatingEngine;
            this.viewCompiler = viewCompiler;
            this.viewResources = viewResources;
            this.container = container;
            var template = '<template>' +
                '<div class="notify ${options.notifyClass}" style="${options.style}">' +
                '<span class="notify-icon ${options.iconClass}"></span>' +
                '<span class="notify-title">${options.caption}</span>' +
                '<span class="notify-text">${options.content}</span>' +
                '<span class="notify-closer" click.trigger="close()"></span>' +
                '</div>' +
                '</template>';
            this.viewFactory = this.viewCompiler.compile(template, this.viewResources);
        }
        MetroNotifyService.prototype.Show = function (options) {
            var viewModel = new NotifyViewModel();
            var view = this.viewFactory.create(this.container, viewModel);
            viewModel.init(view, options);
            if (!options.style) {
                options.style = "position: absolute;top: 5px;right: 5px;";
            }
            view.bind(viewModel);
            view.created();
            view.appendNodesTo(document.body);
            view.attached();
            var vm = this;
            if (vm && typeof vm.activate === 'function') {
                vm.activate();
            }
        };
        MetroNotifyService = __decorate([
            aurelia_framework_1.inject(aurelia_framework_1.TemplatingEngine, aurelia_framework_1.ViewCompiler, aurelia_framework_1.ViewResources, aurelia_framework_1.Container), 
            __metadata('design:paramtypes', [aurelia_framework_1.TemplatingEngine, aurelia_framework_1.ViewCompiler, aurelia_framework_1.ViewResources, aurelia_framework_1.Container])
        ], MetroNotifyService);
        return MetroNotifyService;
    }());
    exports.MetroNotifyService = MetroNotifyService;
    var NotifyViewModel = (function () {
        function NotifyViewModel() {
        }
        NotifyViewModel.prototype.init = function (view, options) {
            this.view = view;
            this.options = options;
        };
        NotifyViewModel.prototype.close = function () {
            this.view.removeNodes();
            this.view.detached();
        };
        return NotifyViewModel;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21ldHJvLW5vdGlmeS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFJSSw0QkFBb0IsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLGFBQTRCLEVBQzVCLFNBQW9CO1lBSHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7WUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7WUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7WUFDNUIsY0FBUyxHQUFULFNBQVMsQ0FBVztZQWVwQyxJQUFJLFFBQVEsR0FBRyxZQUFZO2dCQUNQLHNFQUFzRTtnQkFDbEUsd0RBQXdEO2dCQUN4RCxzREFBc0Q7Z0JBQ3RELHFEQUFxRDtnQkFDckQsNkRBQTZEO2dCQUNqRSxRQUFRO2dCQUNaLGFBQWEsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0UsQ0FBQztRQUVNLGlDQUFJLEdBQVgsVUFBWSxPQUF1QjtZQUUvQixJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztnQkFDZixPQUFPLENBQUMsS0FBSyxHQUFDLHlDQUF5QyxDQUFBO1lBQzNELENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixJQUFJLEVBQUUsR0FBUSxJQUFJLENBQUM7WUFFbkIsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNMLENBQUM7UUF4REw7WUFBQywwQkFBTSxDQUFDLG9DQUFnQixFQUFFLGdDQUFZLEVBQUUsaUNBQWEsRUFBRSw2QkFBUyxDQUFDOzs4QkFBQTtRQXlEakUseUJBQUM7SUFBRCxDQXhEQSxBQXdEQyxJQUFBO0lBeERZLDBCQUFrQixxQkF3RDlCLENBQUE7SUFLRDtRQUtJO1FBRUEsQ0FBQztRQUVNLDhCQUFJLEdBQVgsVUFBYSxJQUFXLEVBQUMsT0FBdUI7WUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVNLCtCQUFLLEdBQVo7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiJzZXJ2aWNlcy9tZXRyby1ub3RpZnktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

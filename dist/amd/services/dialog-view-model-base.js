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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RpYWxvZy12aWV3LW1vZGVsLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFDQTtRQUFBO1FBaUNBLENBQUM7UUE1Qkcsa0NBQUksR0FBSixVQUFLLElBQVcsRUFBRSxPQUE0QixFQUFFLE1BQThCO1lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxrQ0FBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVyQixJQUFJLEVBQUUsR0FBUSxJQUFJLENBQUM7WUFFbkIsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNMLENBQUM7UUFHRCxtQ0FBSyxHQUFMO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBSUwsMEJBQUM7SUFBRCxDQWpDQSxBQWlDQyxJQUFBO0lBakNxQiwyQkFBbUIsc0JBaUN4QyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RpYWxvZy12aWV3LW1vZGVsLWJhc2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9

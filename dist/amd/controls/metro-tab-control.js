var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var MetroTabControl = (function () {
        function MetroTabControl(element) {
            this.element = element;
            this.hasError = true;
        }
        MetroTabControl.prototype.attached = function () {
            var tabsContainer = this.element.querySelector('.tabs');
            var framesContainer = this.element.querySelector('.frames');
            if (!this.selectedIndex) {
                this.selectedIndex = 0;
            }
            if (tabsContainer && framesContainer) {
                this.tabsHeaders = tabsContainer.querySelectorAll('ul a');
                this.frames = framesContainer.querySelectorAll('.frame');
                if (this.frames.length > 0 && this.frames.length == this.tabsHeaders.length) {
                    this.hasError = false;
                    for (var i = 0; i < this.tabsHeaders.length; i++) {
                        var header = this.tabsHeaders[i];
                        header.addEventListener('click', this.tabHeaderClick.bind(this));
                        header.setAttribute("metro-tab-index", i.toString());
                    }
                    this.selectTabByIndex(this.selectedIndex);
                }
            }
            if (this.hasError) {
                throw "metro-tab-control must have tabs and frames with same number of child elements!";
            }
        };
        MetroTabControl.prototype.selectTabByIndex = function (index) {
            if (index >= 0 && index < this.tabsHeaders.length) {
                for (var i = 0; i < this.tabsHeaders.length; i++) {
                    var header = this.tabsHeaders[i];
                    var frame = this.frames[i];
                    if (i == index) {
                        header.parentElement.className = 'active';
                        frame.style.display = 'block';
                    }
                    else {
                        header.parentElement.className = '';
                        frame.style.display = 'none';
                    }
                }
            }
            else {
                throw "metro-tab-control: selected-index must be between 0 and " + (this.tabsHeaders.length - 1).toString();
            }
        };
        MetroTabControl.prototype.tabHeaderClick = function (event) {
            var header = event.target;
            this.selectedIndex = parseInt(header.getAttribute("metro-tab-index"));
            event.preventDefault();
            this.selectTabByIndex(this.selectedIndex);
        };
        MetroTabControl.prototype.selectedIndexChanged = function (newValue) {
            if (newValue) {
                this.selectTabByIndex(parseInt(newValue.toString()));
            }
        };
        MetroTabControl.prototype.detached = function () {
            if (!this.hasError) {
                for (var i = 0; i < this.tabsHeaders.length; i++) {
                    this.tabsHeaders[i].removeEventListener('click', this.tabHeaderClick);
                }
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], MetroTabControl.prototype, "selectedIndex", void 0);
        MetroTabControl = __decorate([
            aurelia_framework_1.customAttribute('metro-tab-control'),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], MetroTabControl);
        return MetroTabControl;
    }());
    exports.MetroTabControl = MetroTabControl;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xzL21ldHJvLXRhYi1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSUE7UUFRSSx5QkFBb0IsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFGM0IsYUFBUSxHQUFXLElBQUksQ0FBQztRQUloQyxDQUFDO1FBRUQsa0NBQVEsR0FBUjtZQUVJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRzVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxhQUFhLElBQUksZUFBZSxDQUFDLENBQUEsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV6RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO29CQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUMzQyxJQUFJLE1BQU0sR0FBYSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ3hELENBQUM7b0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUM7WUFHRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDZCxNQUFNLGlGQUFpRixDQUFDO1lBQzVGLENBQUM7UUFDTCxDQUFDO1FBRU8sMENBQWdCLEdBQXhCLFVBQXlCLEtBQVk7WUFDakMsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUM5QyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzVDLElBQUksTUFBTSxHQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLElBQUksS0FBSyxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV6QyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDVCxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7d0JBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDbEMsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakMsQ0FBQztnQkFDSCxDQUFDO1lBQ0wsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLE1BQU0sMERBQTBELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5RyxDQUFDO1FBQ0wsQ0FBQztRQUVPLHdDQUFjLEdBQXRCLFVBQXVCLEtBQWE7WUFDakMsSUFBSSxNQUFNLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUN0RSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBR0QsOENBQW9CLEdBQXBCLFVBQXFCLFFBQVE7WUFDekIsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNMLENBQUM7UUFFRCxrQ0FBUSxHQUFSO1lBQ0csRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDZCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekUsQ0FBQztZQUNOLENBQUM7UUFDSixDQUFDO1FBakZEO1lBQUMsNEJBQVE7OzhEQUFBO1FBSmI7WUFBQyxtQ0FBZSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BDLDBCQUFNLENBQUMsT0FBTyxDQUFDOzsyQkFBQTtRQXFGaEIsc0JBQUM7SUFBRCxDQXBGQSxBQW9GQyxJQUFBO0lBcEZZLHVCQUFlLGtCQW9GM0IsQ0FBQSIsImZpbGUiOiJjb250cm9scy9tZXRyby10YWItY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=

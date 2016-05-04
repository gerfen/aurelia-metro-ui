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
            if (tabsContainer && framesContainer) {
                this.tabsHeaders = tabsContainer.querySelectorAll('ul a');
                this.frames = framesContainer.querySelectorAll('.frame');
                if (this.frames.length == this.tabsHeaders.length) {
                    this.hasError = false;
                    for (var i = 0; i < this.tabsHeaders.length; i++) {
                        var header = this.tabsHeaders[i];
                        header.addEventListener('click', this.tabHeaderClick.bind(this));
                        header.setAttribute("metro-tab-index", i.toString());
                    }
                }
            }
            if (this.hasError) {
                throw "metro-tab-control must have tabs and frames with same number of child elements!";
            }
        };
        MetroTabControl.prototype.tabHeaderClick = function (event) {
            var header = event.target;
            var index = parseInt(header.getAttribute("metro-tab-index"));
            var selFrame = this.frames[index];
            selFrame.style.background = "red";
        };
        MetroTabControl.prototype.detached = function () {
            if (!this.hasError) {
                for (var i = 0; i < this.tabsHeaders.length; i++) {
                    this.tabsHeaders[i].removeEventListener('click', this.tabHeaderClick);
                }
            }
        };
        MetroTabControl = __decorate([
            aurelia_framework_1.customAttribute('metro-tab-control'),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], MetroTabControl);
        return MetroTabControl;
    }());
    exports.MetroTabControl = MetroTabControl;
});

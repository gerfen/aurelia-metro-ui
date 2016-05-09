var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.prototype.attached = function () {
            var subMenus = {};
            this.config = [];
            var self = this;
            this.router.navigation.forEach(function (navModel) {
                var navConf = navModel.config;
                if (!navConf.parentModule) {
                    self.config.push({
                        title: navConf.title,
                        href: navModel.href,
                        isSubMenu: false
                    });
                }
                else if (subMenus[navConf.parentModule]) {
                    subMenus[navConf.parentModule].routes.push({
                        title: navConf.title,
                        href: navModel.href,
                        isSubMenu: false
                    });
                }
                else {
                    subMenus[navConf.parentModule] = {
                        title: navConf.parentModule,
                        isSubMenu: true,
                        routes: [{
                                title: navConf.title,
                                href: navModel.href,
                                isSubMenu: false
                            }]
                    };
                }
            });
            for (var propName in subMenus) {
                if (subMenus.hasOwnProperty(propName)) {
                    self.config.push(subMenus[propName]);
                }
            }
        };
        NavBar.prototype.toggleMenu = function ($event, item) {
            var self = this;
            item.isOpen = !item.isOpen;
            if (item.isOpen) {
                document.addEventListener("click", function _func() {
                    document.removeEventListener('click', _func);
                    item.isOpen = false;
                });
            }
            $event.stopPropagation();
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], NavBar.prototype, "router", void 0);
        NavBar = __decorate([
            aurelia_framework_1.customElement("nav-bar"), 
            __metadata('design:paramtypes', [])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

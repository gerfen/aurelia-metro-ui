var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
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
        NavBar.prototype.toggleMenu = function (row) {
            row.isOpen = !row.isOpen;
            //if(row.isOpen){
            //  document.addEventListener("click",this.documentClick.bind(this));
            //} 
        };
        NavBar.prototype.documentClick = function () {
            document.removeEventListener("click", this.documentClick);
            //this.config.forEach((item)=>{
            //   item.isOpen = false;
            //});
        };
        __decorate([
            aurelia_framework_1.bindable
        ], NavBar.prototype, "router");
        NavBar = __decorate([
            aurelia_framework_1.customElement("nav-bar")
        ], NavBar);
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
//# sourceMappingURL=navBar.js.map
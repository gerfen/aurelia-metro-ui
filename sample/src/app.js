define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = "Aurelia Metro UI";
            config.map([
                { route: ["", "home"], moduleId: "src/pages/home", nav: true, title: "Home", name: "Home" },
                { route: ["menus/appbar", "menus/appbar"], moduleId: "src/pages/menus/appbar", nav: true, title: "Application Bar", name: "Appbar", parentModule: "Menus" },
                { route: ["information/notifySystem", "information/notifySystem"], moduleId: "src/pages/information/notifySystem", nav: true, title: "Notify System", name: "NotifySystem", parentModule: "Information" },
                { route: ["controls/tabControl", "controls/tabControl"], moduleId: "src/pages/controls/tabControl", nav: true, title: "Tab Control", name: "TabControl", parentModule: "Controls" }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

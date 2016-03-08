define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = "Aurelia Metro UI";
            config.map([
                { route: ["", "home"], moduleId: "demo/pages/home", nav: true, title: "Home", name: "Home" },
                { route: ["appbar", "appbar"], moduleId: "demo/pages/menus/appbar", nav: true, title: "Appbar", name: "Appbar", parentModule: "Menus" }
            ]);
        };
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map
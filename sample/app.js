define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.name = "Bojan";
        }
        App.prototype.onClick = function () {
            alert('Clicked!');
        };
        return App;
    }());
    exports.App = App;
});

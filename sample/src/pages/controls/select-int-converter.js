define(["require", "exports"], function (require, exports) {
    "use strict";
    var SelectIntConverter = (function () {
        function SelectIntConverter() {
        }
        SelectIntConverter.prototype.toView = function (value) {
            return value;
        };
        SelectIntConverter.prototype.fromView = function (value) {
            if (value) {
                return parseInt(value.toString());
            }
            else {
                return null;
            }
        };
        return SelectIntConverter;
    }());
    exports.SelectIntConverter = SelectIntConverter;
});

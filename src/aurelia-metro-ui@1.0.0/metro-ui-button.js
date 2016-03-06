var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var MetroUIButton = (function () {
        function MetroUIButton() {
            this.text = 'Metro UI Button';
        }
        MetroUIButton.prototype.defaultClick = function () {
            alert("Clicked!");
        };
        __decorate([
            aurelia_framework_1.bindable
        ], MetroUIButton.prototype, "text");
        MetroUIButton = __decorate([
            aurelia_framework_1.customElement('metro-ui-button')
        ], MetroUIButton);
        return MetroUIButton;
    })();
    exports.MetroUIButton = MetroUIButton;
});
//# sourceMappingURL=metro-ui-button.js.map
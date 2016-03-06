var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var MetroUIDropdownToggle = (function () {
        function MetroUIDropdownToggle(element) {
            this.element = element;
            this.isActive = false;
            var self = this;
            element.addEventListener("click", function () {
                self.isActive = !self.isActive;
            });
            /*
             observerLocator.getObserver(this, 'text')
                .subscribe(newValue => {
                    
                        
                });
                */
        }
        __decorate([
            aurelia_framework_1.bindable
        ], MetroUIDropdownToggle.prototype, "isActive");
        MetroUIDropdownToggle = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement("metro-ui-dropdown-toggle")
        ], MetroUIDropdownToggle);
        return MetroUIDropdownToggle;
    })();
    exports.MetroUIDropdownToggle = MetroUIDropdownToggle;
});
//# sourceMappingURL=metro-ui-dropdown-toggle.js.map
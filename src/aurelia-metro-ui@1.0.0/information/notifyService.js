define(["require", "exports"], function (require, exports) {
    var NotifyService = (function () {
        function NotifyService() {
        }
        NotifyService.Show = function (options) {
            /*
            var metro : any = $;
    
            metro.Notify(
                {
                    icon: options.icon,
                    caption: options.caption,
                    content: options.content,
                    shadow: options.shadow,
                    timeout: 3000,
                    keepOpen: options.keepOpen,
                    type: NotifyType[options.type],//.toString(),
                    style: options.style
                }
            );
            */
        };
        return NotifyService;
    })();
    exports.NotifyService = NotifyService;
    (function (NotifyType) {
        NotifyType[NotifyType["success"] = 0] = "success";
        NotifyType[NotifyType["info"] = 1] = "info";
        NotifyType[NotifyType["warning"] = 2] = "warning";
        NotifyType[NotifyType["alert"] = 3] = "alert";
    })(exports.NotifyType || (exports.NotifyType = {}));
    var NotifyType = exports.NotifyType;
    var NotifyOptions = (function () {
        function NotifyOptions() {
        }
        return NotifyOptions;
    })();
    exports.NotifyOptions = NotifyOptions;
});
//# sourceMappingURL=notifyService.js.map
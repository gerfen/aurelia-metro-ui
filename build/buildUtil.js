module.exports = {
    customTsReporter : function (logger){
    this.logger = logger;
    var self = this;
    
       this.error = function(error, typescript){
            this.hasErrors =  true;
            self.logger.error(error.message);
            //process.exit(1);
       };
       
       this.finish = function(results){
            var hasError = false;
            var showErrorCount = function (count, type) {
                if (count === 0)
                    return;
                self.logger.error('TypeScript:' + count.toString() + (type !== '' ? type + ' ' : '') + (count === 1 ? 'error' : 'errors'));
                hasError = true;
            };
            showErrorCount(results.transpileErrors, '');
            showErrorCount(results.syntaxErrors, 'syntax');
            showErrorCount(results.globalErrors, 'global');
            showErrorCount(results.semanticErrors, 'semantic');
            showErrorCount(results.emitErrors, 'emit');
            if (results.emitSkipped || hasError) {
                var message = 'Build failed.Typescript compilation failed.';
                 self.logger.error(message);
                process.exit(1);    
            }
       };
    }
};
module.exports = {
    logger : function() {
    
    var gutil = require('gulp-util'),
        args = require('yargs').argv,
        Log = require('log'),
        fs = require('fs'),
        newLine =  '\r\n';

    function createLogFileName(){
        var now = new Date();
        return 'Build-' + now.getFullYear() + '-' + (now.getMonth() + 1) +'-'+now.getDay()+ '-' + now.getHours()+'-' + now.getMinutes()+'-' + now.getSeconds()+'-' + now.getMilliseconds() + '.log' ;
    }
    //https://www.npmjs.com/package/log
    var fileLogger = null;
   
    Object.defineProperty(this, 'fileLogger', {
        get: function(){
             if(!fileLogger){
                 fileLogger = new Log('debug', fs.createWriteStream('build/logs/' + createLogFileName()));  
             }
             return fileLogger; 
            }
    }); 
    
    this.debug = function(message){
        message += newLine;
        gutil.log(gutil.colors.blue(message));
        if(args.fullLog){
             this.fileLogger.debug(message);
        }
    };
     
    this.info = function(message){
        message += newLine;
        gutil.log(message);
        if(args.fullLog){
             this.fileLogger.info(message);
        }
    };
    
    this.warning = function(message){
        message += newLine;
        gutil.log(gutil.colors.yellow(message));
        if(args.fullLog){
             this.fileLogger.warning(message);
        }
    };
    
    this.error = function(message){
        message += newLine;
        gutil.log(gutil.colors.red(message));
         if(args.fullLog){
             this.fileLogger.error(message);
         }
    };     
   
     this.info('Logger created. ' + (args.fullLog ? 'File/Console' : 'Console'));
   }
};
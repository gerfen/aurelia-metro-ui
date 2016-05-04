//import { MuDialogService } from './services/muDialogService'
//import { MuNotifyService } from './services/muNotifyService'

export function configure(config, callback) {
 
 config.globalResources('./controls/metro-button');
 config.globalResources('./controls/metro-tab-control');
     
 /*
  let config = new DialogConfiguration(aurelia);

  if (typeof callback === 'function') {
    callback(config);
    return;
  }

  config.useDefaults();
  */
}


  
export { MuDialogService } from './services/muDialogService'
export { MuNotifyService } from './services/muNotifyService'
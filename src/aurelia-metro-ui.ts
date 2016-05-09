//import { MuDialogService } from './services/muDialogService'
//import { MuNotifyService } from './services/muNotifyService'

import '/aurelia-metro-ui/css/metro.css!';
import '/aurelia-metro-ui/css/metro-icons.css!';
import '/aurelia-metro-ui/css/metro-responsive.css!';
import '/aurelia-metro-ui/css/metro-extras.css!';

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
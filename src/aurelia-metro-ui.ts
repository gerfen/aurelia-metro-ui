import {FrameworkConfiguration} from "aurelia-framework";
import { MetroDialogService } from './services/metro-dialog-service'
import { MetroNotifyService } from './services/metro-notify-service'

import '/aurelia-metro-ui/css/metro.css!';
import '/aurelia-metro-ui/css/metro-icons.css!';
import '/aurelia-metro-ui/css/metro-responsive.css!';
import '/aurelia-metro-ui/css/metro-extras.css!';

export function configure(config, callback) {
 
 config.globalResources('./controls/metro-button');
 config.globalResources('./controls/metro-tab-control');
 
 config.container.registerSingleton('metro-notify-service',MetroNotifyService);
 config.container.registerSingleton('metro-dialog-service',MetroDialogService);    
 /*
  let config = new DialogConfiguration(aurelia);

  if (typeof callback === 'function') {
    callback(config);
    return;
  }

  config.useDefaults();
  */
  
}


  
//export { MetroDialogService } from './services/metro-dialog-service'
//export { MetroNotifyService } from './services/metro-notify-service'
import {Container} from "aurelia-dependency-injection";
//import { INotifyOptions ,INotifyService} from "aurelia-metro-ui";

export class NotifySystem{

    private options : any;// INotifyOptions;    
    private notifyService : any;// INotifyService;
    
    constructor(){
        
        this.notifyService =/* <INotifyService>*/ Container.instance.get('metro-notify-service');
        this.options =  {
                 iconClass: "mif-windows",
                 caption:  "Caption",
                 content:  "Content",
                 shadow: true,
                 timeout: 3000,
                 keepOpen: false,
                 //success,alert,warning,info
                 notifyClass:  "success",
                 style: ""
        };  
    
    }   
    
    public showNotify(){
      this.notifyService.Show(this.options);
    }
}
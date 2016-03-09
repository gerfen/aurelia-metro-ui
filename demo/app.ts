import {Router} from "aurelia-router";

export class App{
    
    public router:Router;
    
    constructor(){
       
    }
    
    configureRouter(config, router: Router) {
        this.router = router;
        
        config.title = "Aurelia Metro UI";
        
     
        config.map([
             { route: ["", "home"], moduleId: "demo/pages/home", nav: true, title: "Home", name: "Home" },
             { route: ["menus/appbar", "menus/appbar"], moduleId: "demo/pages/menus/appbar", nav: true, title: "Application Bar", name: "Appbar", parentModule:"Menus" },
             { route: ["information/notifySystem", "information/notifySystem"], moduleId: "demo/pages/information/notifySystem", nav: true, title: "Notify System", name: "NotifySystem", parentModule:"Information" }
        ]);
        
       
    }
    
    
    
}
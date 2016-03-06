import {Router} from "aurelia-router";

export class App{
    
    private router:Router;
    
    configureRouter(config, router: Router) {
        this.router = router;
        config.title = "Aurelia Metro UI";
        config.map([
            { route: ["", "home"], moduleId: "demo/pages/home", nav: true, title: "Home", name: "Home" , parent:""},
            { route: ["appbar", "appbar"], moduleId: "demo/pages/menus/appbar", nav: true, title: "Appbar", name: "Appbar" ,parent:"Menus"}
        ]);
    };
}
import {inject, bindable, customElement } from "aurelia-framework";
import { Router} from "aurelia-router"

@customElement("nav-bar")
export class NavBar{
    
    @bindable router: Router;

     attached(){
         
         var x = this.router;
         
     }
} 
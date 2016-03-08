import {inject, bindable, customElement } from "aurelia-framework";
import { Router , RouteConfig } from "aurelia-router"

@customElement("nav-bar")
export class NavBar{
    
    @bindable router: Router;
    public config: any[];
     
    attached(){
         var subMenus = {};
         this.config = [];
         var self = this;
         this.router.navigation.forEach((navModel)=>{
            var navConf : INestedRouteConfig = <INestedRouteConfig> navModel.config;
            
            if(!navConf.parentModule){
                  self.config.push({
                             title: navConf.title,
                             href:navModel.href,
                             isSubMenu:false
                         }
                      );  
            }
            else if(subMenus[navConf.parentModule]){
                subMenus[navConf.parentModule].routes.push({
                             title: navConf.title,
                             href:navModel.href,
                             isSubMenu:false
                         });
            }else{
                
                subMenus[navConf.parentModule] = {
                    title : navConf.parentModule,
                    isSubMenu:true,
                    routes: [{
                             title: navConf.title,
                             href:navModel.href,
                             isSubMenu:false
                         }]
                };
            }
         });
         
         for (var propName in subMenus) {
              if (subMenus.hasOwnProperty(propName)) {
                  self.config.push(subMenus[propName]);
              }
         }
         
     }
     
     
     toggleMenu(row){
         row.isOpen = !row.isOpen;
        //if(row.isOpen){
          //  document.addEventListener("click",this.documentClick.bind(this));
        //} 
    }
    
    documentClick(){
        document.removeEventListener("click",this.documentClick);
        //this.config.forEach((item)=>{
         //   item.isOpen = false;
        //});
    }
} 


export interface INestedRouteConfig extends RouteConfig{
    parentModule:string;
}
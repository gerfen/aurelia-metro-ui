import { inject, bindable, customElement, bindingMode } from "aurelia-framework";
import {ObserverLocator} from "aurelia-binding";

@inject(Element)
@customElement("metro-ui-dropdown-toggle")
export class MetroUIDropdownToggle{
    
    @bindable isActive:boolean = false;
    
    
    constructor(private element:Element){
        var self = this;
        element.addEventListener("click",()=>{
            self.isActive = !self.isActive;
        });
        /*
         observerLocator.getObserver(this, 'text')
            .subscribe(newValue => {
                
                    
            });
            */
    }
    
}
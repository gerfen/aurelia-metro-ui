///// <reference path="node_modules/aurelia-framework/dist/aurelia-framework.d.ts" />

import { inject, bindable, customElement, bindingMode } from "aurelia-framework";

@inject(Element)
@customElement("mu-button")
export class MuButton{
    
    public caption : string;
    
    constructor(private element : Element){
        this.caption = "My Button";
    }
    
}
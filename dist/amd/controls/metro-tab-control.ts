import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('metro-tab-control')
@inject(Element)
export class MetroTabControl {
    
    private tabsHeaders : NodeList;
    private frames : NodeList;
    private hasError:boolean = true;
    
    constructor(private element:Element) {
        
    }
    
    
    attached() {  
        var tabsContainer = this.element.querySelector('.tabs');    
        var framesContainer = this.element.querySelector('.frames');
        
        if(tabsContainer && framesContainer){
            this.tabsHeaders = tabsContainer.querySelectorAll('ul a');
            this.frames = framesContainer.querySelectorAll('.frame');
            
            if(this.frames.length == this.tabsHeaders.length){
                this.hasError = false;
                for(let i = 0;i < this.tabsHeaders.length;i++){
                    var header  = <Element>this.tabsHeaders[i];
                    header.addEventListener('click',this.tabHeaderClick.bind(this));    
                    header.setAttribute("metro-tab-index",i.toString());
                } 
                
            }    
        }
        
        
        if(this.hasError){
            throw "metro-tab-control must have tabs and frames with same number of child elements!";
        }    
    }
    
    private tabHeaderClick(event : Event){
        var header  = <Element> event.target;
        var index = parseInt(header.getAttribute("metro-tab-index")); 
        
        var selFrame = <HTMLElement>  this.frames[index];
        selFrame.style.background = "red"; 
    //    alert("Clicked!");
    }
    
    detached() {  
       if(!this.hasError){
            for(let i = 0;i < this.tabsHeaders.length;i++){
                this.tabsHeaders[i].removeEventListener('click',this.tabHeaderClick);    
            } 
       }         
    }
}
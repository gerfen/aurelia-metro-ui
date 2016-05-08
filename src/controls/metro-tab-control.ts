import {customAttribute, inject,bindable} from 'aurelia-framework';

@customAttribute('metro-tab-control')
@inject(Element)
export class MetroTabControl {
    
    @bindable selectedIndex : number;
    
    private tabsHeaders : NodeList;
    private frames : NodeList;
    private hasError:boolean = true;
    
    constructor(private element:Element) {
        
    }
    
    attached() {  
        var tabsContainer = this.element.querySelector('.tabs');    
        var framesContainer = this.element.querySelector('.frames');
        
        //Set default value
        if(!this.selectedIndex){
            this.selectedIndex = 0;
        }
        
        if(tabsContainer && framesContainer){
            this.tabsHeaders = tabsContainer.querySelectorAll('ul a');
            this.frames = framesContainer.querySelectorAll('.frame');
            
            if(this.frames.length > 0 && this.frames.length == this.tabsHeaders.length){
                this.hasError = false;
                for(let i = 0;i < this.tabsHeaders.length;i++){
                    let header  = <Element>this.tabsHeaders[i];
                    header.addEventListener('click',this.tabHeaderClick.bind(this));    
                    header.setAttribute("metro-tab-index",i.toString());
                } 
                this.selectTabByIndex(0);
            }    
        }
        
        
        if(this.hasError){
            throw "metro-tab-control must have tabs and frames with same number of child elements!";
        }    
    }
    
    private selectTabByIndex(index:Number){
         for(let i = 0;i < this.tabsHeaders.length;i++){
              let header = <Element>this.tabsHeaders[i];
              let frame  = <HTMLElement>this.frames[i];
              
              if(i==index){
                  header.parentElement.className = 'active';
                  frame.style.display = 'block';
              }else{
                  header.parentElement.className = '';
                  frame.style.display = 'none';
              }
         } 
    }
    
    private tabHeaderClick(event : Event){
       var header  = <Element> event.target;
       this.selectedIndex = parseInt(header.getAttribute("metro-tab-index")); 
        
       this.selectTabByIndex(this.selectedIndex);
    }
    
    detached() {  
       if(!this.hasError){
            for(let i = 0;i < this.tabsHeaders.length;i++){
                this.tabsHeaders[i].removeEventListener('click',this.tabHeaderClick);    
            } 
       }         
    }
}
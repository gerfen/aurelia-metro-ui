import {customElement, bindable} from 'aurelia-framework';

@customElement('metro-ui-button')
export class MetroUIButton {
    
    @bindable text = 'Metro UI Button';
    
    defaultClick() {
        alert("Clicked!");
    }
}
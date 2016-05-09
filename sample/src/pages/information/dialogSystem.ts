//import { IDialogService, MessageBoxButtons} from "aurelia-metro-ui";
import {Container} from 'aurelia-dependency-injection';

export class DialogSystem{
    
    private dialogService: any;// IDialogService;
    
    
    public msgTitle : string;
    public msgMessage : string;
    
    
    constructor(){
        this.dialogService = /*<IDialogService>*/ Container.instance.get('metro-ui-dialog-service');
    }
    
    public showMessageBox(){
        //this.dialogService.showMessageBox(this.msgTitle,this.msgMessage,MessageBoxButtons.OKCancel);
    }
}
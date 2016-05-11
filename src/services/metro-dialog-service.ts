import { inject, TemplatingEngine, ViewCompiler, ViewResources, Container } from "aurelia-framework";
import { Loader } from "aurelia-loader";
import { View } from "aurelia-templating";
import { DialogViewModelBase } from "./dialog-view-model-base";

@inject(Loader, TemplatingEngine, ViewCompiler, ViewResources, Container)
export class MetroDialogService{
   private mBoxView: View;
   private dialogViews: any = {};

    constructor(private loader: Loader,
                private templatingEngine: TemplatingEngine,
                private viewCompiler: ViewCompiler,
                private viewResources: ViewResources,
                private container: Container) {

    }

    public showMessageBox(title: string, message: string,buttons: MessageBoxButtons): Promise<MessageBoxButton> {
       
       var self = this;
        return new Promise<MessageBoxButton>((resolve, reject) => {
            var viewModel = new MessgeBoxViewModel();
            viewModel.title = title;
            viewModel.message = message;
            viewModel.buttons = buttons;
            self.showDialog<MessageBoxButton>("./message-box-view.html", viewModel);
        }); 
           
    }

    public showDialog<T>(viewUrl: string, viewModel: DialogViewModelBase<T>): Promise<T> {
        var self = this;
        return new Promise<T>((resolve, reject) => {
            if (!self.dialogViews[viewUrl]) {
              
                self.loader.loadTemplate(viewUrl).then((val) => {
                    var view = this.viewCompiler.compile(val.template, self.viewResources).create(self.container, viewModel);
                    self.dialogViews[viewUrl] = view;

                    viewModel.init(view,resolve,reject);
                    viewModel.show();
                });

            } else {
                var view = self.dialogViews[viewUrl];
                viewModel.init(view, resolve, reject);
                viewModel.show();
            }
        });
     
    }
}

export enum MessageBoxButton {
    OK,
    Cancel
}

export enum MessageBoxButtons {
    OK,
    OKCancel
}

class MessgeBoxViewModel extends DialogViewModelBase<MessageBoxButton> {
    public title: string;
    public message: string;
    public buttons: MessageBoxButtons;
    public isVisible: boolean;

    constructor() {
        super();
    }


    public okClick() {
        this.resolve(MessageBoxButton.OK);
        this.close();
    }

    public cancelClick() {
        this.resolve(MessageBoxButton.Cancel);
        this.close();
    }

    public closeClick() {
        this.reject();
        this.close();
    }
}
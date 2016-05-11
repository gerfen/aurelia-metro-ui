import { inject, TemplatingEngine, ViewCompiler, ViewResources, Container ,ViewFactory , View} from "aurelia-framework";

/**
 * Notify service
 */
@inject(TemplatingEngine, ViewCompiler, ViewResources, Container)
export class MetroNotifyService {

    private viewFactory : ViewFactory;

    constructor(private templatingEngine: TemplatingEngine,
                private viewCompiler: ViewCompiler,
                private viewResources: ViewResources,
                private container: Container) {



/*
 icon: "",
                 caption:  "",
                 content:  "",
                 shadow: true,
                 timeout: 3000,
                 keepOpen: false,
                 //success,alert,warning,info
                 notifyClass:  "",
                 style: ""
*/
        var template = '<template>' +
                            '<div class="notify ${options.notifyClass}" style="${options.style}">' +
                                '<span class="notify-icon ${options.iconClass}"></span>' +
                                '<span class="notify-title">${options.caption}</span>' +
                                '<span class="notify-text">${options.content}</span>' +
                                '<span class="notify-closer" click.trigger="close()"></span>' +
                            '</div>' +  
                        '</template>';
        this.viewFactory = this.viewCompiler.compile(template, this.viewResources);
        
    }
    
    public Show(options: INotifyOptions) {
        
        var viewModel = new NotifyViewModel();
         
        var view = this.viewFactory.create(this.container, viewModel);
        viewModel.init(view,options);
        
        if(!options.style){
            options.style="position: absolute;top: 5px;right: 5px;"
        }
        
        view.bind(viewModel);
        view.created();
        view.appendNodesTo(document.body);
        view.attached();

        var vm: any = this;

        if (vm && typeof vm.activate === 'function') {
            vm.activate();
        }
    }
}

/**
 * NotifyViewModel
 */
class NotifyViewModel {
    
    private view: View;
    public options: INotifyOptions;
    
    constructor() {
        
    }
    
    public init (view : View,options: INotifyOptions){
        this.view = view;
        this.options = options;
    }
    
    public close(){
        this.view.removeNodes();
        this.view.detached();
    }
}


export interface INotifyService{
     Show(options: INotifyOptions);
}
    
export interface INotifyOptions {
        iconClass: string;
        caption: string;
        content: string;
        shadow: boolean;
        timeout: number;
        keepOpen: boolean;
        //success,alert,warning,info
        notifyClass: string; 
        style: any;
}
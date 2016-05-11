import { View } from "aurelia-templating";
export abstract class DialogViewModelBase<T>{
    private view: View;
    protected resolve: (value?: T) => void;
    protected reject: (reason?: any) => void;

    init(view : View, resolve: (value?: T) => void, reject: (reason?: any) => void) {
        this.view = view;
        this.resolve = resolve;
        this.reject = reject;
    }

    show() {
        this.view.bind(this);
        this.view.created();
        this.view.appendNodesTo(document.body);
        this.view.attached();

        var vm: any = this;

        if (vm && typeof vm.activate === 'function') {
            vm.activate();
        }
    }


    close() {
        this.view.removeNodes();
        this.view.detached();
        this.resolve();
    }



}
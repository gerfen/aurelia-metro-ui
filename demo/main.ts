import {Aurelia} from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia
        .use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-ui-virtualization')
        .plugin('aurelia-metro-ui'); 

    aurelia.start().then(a => a.setRoot('demo/app'));
}

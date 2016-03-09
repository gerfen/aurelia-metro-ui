export class NotifyService {


    static Show(options: NotifyOptions) {
        /*
        var metro : any = $;

        metro.Notify(
            {
                icon: options.icon,
                caption: options.caption,
                content: options.content,
                shadow: options.shadow,
                timeout: 3000,
                keepOpen: options.keepOpen,
                type: NotifyType[options.type],//.toString(),
                style: options.style
            }
        );
        */
    }

}

export enum NotifyType {
    success,
    info,
    warning,
    alert
}

export class NotifyOptions{
    public icon: string;
    public caption: string;
    public content: string;
    public shadow: boolean;
    public timeout: number;
    public keepOpen: boolean;
    public type: NotifyType;
    public style: any;
}
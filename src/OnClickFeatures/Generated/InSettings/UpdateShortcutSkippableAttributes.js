import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater} from "../../../common/ShortcutUpdater";

export class UpdateShortcutSkippableAttributes{
    constructor(handler){
        this.handler = handler
    }

    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature(data){
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(
            data.shortcut, 
            ["options", "maxAmonutOfAttribiutesToSkip"], 
            data.newAmount, 
            data.site
        );

        return data;
    }



}
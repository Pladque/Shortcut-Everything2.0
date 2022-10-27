import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater} from "../../../common/ShortcutUpdater";

export class UpdateShortcutSkippableAttributes{
    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site, newAmount,  shortcut
    // site - current side identyfier
    // newAmount - new Value of skippableAttrs
    // shortcut - ex. alt-p
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
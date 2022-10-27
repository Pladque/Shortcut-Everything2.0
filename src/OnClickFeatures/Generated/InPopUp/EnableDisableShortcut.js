import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater } from "../../../common/ShortcutUpdater";


export class EnableDisableShortcut{

   constructor(handler){
        this.handler = handler
    }

    setSite(site){
        this.site = site;
    }

    // Required fields in data: site, newState, shortcut
    // site - current side identyfier
    // newState - new state (true or false) for enabled field
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature (data) {
        
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "enabled"], data.newState, data.site);
        return data;
    }

}
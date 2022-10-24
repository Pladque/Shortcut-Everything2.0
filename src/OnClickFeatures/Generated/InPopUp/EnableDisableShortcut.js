import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater } from "../../../common/ShortcutUpdater";


export class EnableDisableShortcut{

   constructor(handler){
        this.handler = handler
    }

    setSite(site){
        this.site = site;
    }

    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    // @TODO! - dopisac do tyc wszystkich featurow "jakich sie spodziewam pól w "data"  "
    async runFeature (data) {
        
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "enabled"], data.newState, data.site);
        return data;
    }

}
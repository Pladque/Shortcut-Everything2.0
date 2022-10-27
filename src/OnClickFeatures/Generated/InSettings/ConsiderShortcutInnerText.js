import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater} from "../../../common/ShortcutUpdater";


export class ConsiderShortcutInnerText{
    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: shortcut, newState, site
    // site - current side identyfier
    // newState - new value (true or false) for checkInnerText 
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature(data){
        
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(data.shortcut, ["attributes", "others", "checkInnerText"], data.newState, data.site);
        if (data.newState === false){
            alert("inner text will be no longer considered for " + data.shortcut + "on site: " + data.site)
        }
        else{
            alert("inner text will be now considered for " + data.shortcut + "  on site: " + data.site)
        }

        return data;
    }
}
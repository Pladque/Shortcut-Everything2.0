import { storage } from "../../../common/Storage";
import { UrlParser} from "../../../common/UrlParser";
import { ShortcutUpdater} from "../../../common/ShortcutUpdater";


export class EnableDisableShortcut{

    constructor(site){
        this.site = site;
    }

    // @TODO - dopisac do tyc wszystkich featurow "jakich sie spodziewam pól w "data"  "
    async onClickAction (data) {
        
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "enabled"], data.newState, this.site);
    }

}
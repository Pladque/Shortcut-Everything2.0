import { ShortcutUpdater} from "../../../common/ShortcutUpdater";


export class ConsiderShortcutInnerText{
    constructor(site){
        this.site = site;
    }

     async onClickAction (data) {
        
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(data.shortcut, ["attributes", "others", "checkInnerText"], data.newState, this.site);
        if (data.newState === false){
            alert("inner text will be no longer considered for " + data.shortcut + "on site: " + this.site)
        }
        else{
            alert("inner text will be now considered for " + data.shortcut + "  on site: " + this.site)
        }
    }
}
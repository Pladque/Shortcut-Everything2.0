import { ShortcutUpdater} from "../../../common/ShortcutUpdater";

export class UpdateShortcutSkippableAttributes{
     constructor(site){
        this.site = site;
    }

    async onClickAction (data) {
        let shortcutUpdater = new ShortcutUpdater();
                    
        await shortcutUpdater.updateShortcut(
            data.shortcut, 
            ["options", "maxAmonutOfAttribiutesToSkip"], 
            data.newAmount, 
            this.site
        );
    }



}
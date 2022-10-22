import { ShortcutUpdater } from "../../../common/ShortcutUpdater";


export class UpdateShortcutInnerText{
    constructor(site){
        this.site = site
    }

    onClickAction(data){
        const shortcutUpdater = new ShortcutUpdater();
        shortcutUpdater.updateShortcut(
            data.shortcut, 
            ["attributes", "others", "innerText"],
            data.newText,
            this.site
        )

    }

}
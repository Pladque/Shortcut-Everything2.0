const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class UpdateShortcutDescription{

    constructor(site){
        this.site = site;
    }


    async onClickAction (data) {
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(data.shortcut, ["desc"], data.desc, this.site)
    }
}
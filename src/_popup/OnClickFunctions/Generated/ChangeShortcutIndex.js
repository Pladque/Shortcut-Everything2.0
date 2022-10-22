const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class ChangeShortcutIndex{

    constructor(site){
        this.site = site;
    }


    async onClickAction (data) {
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "elementIndex"], data.ind, this.site)
        //showMessage("updated description")
    }
}


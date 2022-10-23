const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class ChangeShortcutIndex{

    constructor(site, next = null){
        this.site = site;
        this.next = next;
    }


    async onClickAction (data) {
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "elementIndex"], data.ind, this.site)
        //showMessage("updated description")
    }
}


import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";

const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class ChangeShortcutIndex{

    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site, ind, shortcut
    // site - current side identyfier
    // ind - new Index of element
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    async runFeature(data){
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(data.shortcut, ["options", "elementIndex"], data.ind, data.site)
        return data;
    }
}


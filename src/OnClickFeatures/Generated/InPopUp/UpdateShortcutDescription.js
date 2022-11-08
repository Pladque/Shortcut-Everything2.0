import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";

const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class UpdateShortcutDescription{

    constructor(handler){
        this.handler = handler
    }


    // Required fields in data: site, desc, shortcut
    // site - current side identyfier
    // desc - new description of shortcut
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }


    async runFeature (data) {
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(data.shortcut, ["desc"], data.desc, data.site)
        return data;
    }
}
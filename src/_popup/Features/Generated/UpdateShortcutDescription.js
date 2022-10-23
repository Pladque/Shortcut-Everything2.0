import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";

const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")

export class UpdateShortcutDescription{

    constructor(handler){
        this.handler = handler
    }

    setSite(site){
        this.site = site;
    }

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
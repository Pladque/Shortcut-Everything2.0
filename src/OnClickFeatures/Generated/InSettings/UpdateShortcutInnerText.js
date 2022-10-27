import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater } from "../../../common/ShortcutUpdater";


export class UpdateShortcutInnerText{
    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: shortcut, newText, site
    // site - current side identyfier
    // newText - new Value for InnerText
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature(data){
        const shortcutUpdater = new ShortcutUpdater();
        shortcutUpdater.updateShortcut(
            data.shortcut, 
            ["attributes", "others", "innerText"],
            data.newText,
            data.site
        )

        return data

    }

}
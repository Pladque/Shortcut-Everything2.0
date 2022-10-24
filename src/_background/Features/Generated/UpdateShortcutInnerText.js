import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutUpdater } from "../../../common/ShortcutUpdater";


export class UpdateShortcutInnerText{
    constructor(handler){
        this.handler = handler
    }

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
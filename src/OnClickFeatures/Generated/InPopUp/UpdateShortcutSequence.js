import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
  
const {inputStateManager} = require("../../../common/PopUpInputStateManager")
const {ShortcutUpdater} = require("../../../common/ShortcutUpdater")


class UpdateSequencePopupFeature{

    constructor(handler){
        this.handler = handler
        this.oldShortcut = "";
        this.site = "";
    }

    setHandler(handler){
        this.handler = handler
    }

    async onClickAction(data){
        await this.runFeature(data)
    }

    @addSitePropertyDecorator
    async runFeature(data){
        this.oldShortcut = data.shortcut;
        this.site = data.site;
        inputStateManager.changeState(inputStateManager.getStates().update)

        return data;
    }

    async updateShortcutName(newName){
        this.handler.run(await this._updateShortcutName(newName))
    }

    async _updateShortcutName(newName){
        const site =  this.site;
        let shortcutUpdater = new ShortcutUpdater();
        await shortcutUpdater.updateShortcut(
            this.oldShortcut, 
            ["shortcut"], 
            newName, 
            site
        );

    }

}

const updateSequenceInstance = new UpdateSequencePopupFeature();

export {updateSequenceInstance as updateSequence}
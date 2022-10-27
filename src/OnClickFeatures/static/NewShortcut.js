const {inputStateManager} = require("../../common/PopUpInputStateManager")

export class NewShortcutButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // No requirements for data
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    
    async runFeature(data){
        inputStateManager.changeState(inputStateManager.states.new);
        return data;
    }
}


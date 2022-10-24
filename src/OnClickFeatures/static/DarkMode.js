const {darkModeManager} = require("../../_popup/Frontend/DarkModeManager")


export class DarkModeButtonAction{

    constructor(handler){
        this.handler = handler
    }

    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    
    runFeature(data){
        darkModeManager.switchMode();
        return data;
    }
}

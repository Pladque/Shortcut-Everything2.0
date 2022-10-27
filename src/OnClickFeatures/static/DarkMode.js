const {darkModeManager} = require("../../common/DarkModeManager")


export class DarkModeButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // No requirements for data
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    
    runFeature(data){
        darkModeManager.switchMode();
        return data;
    }
}

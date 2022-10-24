const {inputStateManager} = require("../../common/PopUpInputStateManager")

// @TODO
//      DLACZEGO TO DZIALA
//      OnKeyboardAction nasluchuje caly czas i dlatego ze tu zmieniam
//      stan na "wprowadzanie" to to zaczyna dzialac (przez IFA w srodku)
//      aleeee mby to da sie jakos latwiej zrobic

export class NewShortcutButtonAction{

    constructor(handler){
        this.handler = handler
    }

    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    
    async runFeature(data){
        inputStateManager.changeState(inputStateManager.states.new);
        return data;
    }
}


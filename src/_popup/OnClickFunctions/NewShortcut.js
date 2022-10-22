const {inputStateManager} = require("../../common/PopUpInputStateManager")

// @TODO
//      DLACZEGO TO DZIALA
//      OnKeyboardAction nasluchuje caly czas i dlatego ze tu zmieniam
//      stan na "wprowadzanie" to to zaczyna dzialac (przez IFA w srodku)
//      aleeee mby to da sie jakos latwiej zrobic

export class NewShortcutButtonAction{
    onClickAction(data){
        inputStateManager.changeState(inputStateManager.states.new);
    }
}


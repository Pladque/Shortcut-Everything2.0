const {inputStateManager} = require("../../common/PopUpInputStateManager")


export function newShortcutOnClickAction(){
    inputStateManager.changeState(inputStateManager.states.new);
}
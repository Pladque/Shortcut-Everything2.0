const {darkModeManager} = require("../Frontend/DarkModeManager")


export class DarkModeButtonAction{
    onClickAction(data){
        darkModeManager.switchMode();
    }
}

const {inputStateManager} = require("./PopUpInputStateManager")

// @TODO
//  niech akcja po wprowadzeniu shortcuta bedzie przekazywa po prostu arguemntem
//  no i niech stuff zwiazany z shortcutem bedzie w nowej klasie
//  postaraj sie ogarac rzeczy tak, zeby dalo sie potestowac czy tu cokolwiek bd dzialac



export class KeyboardReader{

    constructor(onKeyDownAction){
        this.onKeyDownAction = onKeyDownAction;
    }

    listen(){
        document.addEventListener('keydown',  this.onKeyDownAction );
    }

}
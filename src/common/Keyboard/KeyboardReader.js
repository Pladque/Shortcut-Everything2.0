
export class KeyboardReader{

    constructor(onKeyDownAction){
        this.onKeyDownAction = onKeyDownAction;
    }

    listen(){
        document.addEventListener('keydown',  this.onKeyDownAction );
    }

}
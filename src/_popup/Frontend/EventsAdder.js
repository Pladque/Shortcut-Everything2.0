const {ActionsManager} = require("./ActionManager")

// @TODO zmien nazwe tego na cos bardziej ooglnego (bo to sie zachowuje dosyc ogolnie tbh)
export class EventsAdder{

    constructor(actionsManager){
        this.actionsManager = actionsManager;
    }

    addActionTo(className, actionName){
        let colls = document.getElementsByClassName(className);
        for (let i = 0; i < colls.length; i++) {
            colls[i].addEventListener('click',  this.actionsManager[actionName], false);
        }
    }

}
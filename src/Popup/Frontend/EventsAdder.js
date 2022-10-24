const {ActionsManager} = require("./ActionManager")

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
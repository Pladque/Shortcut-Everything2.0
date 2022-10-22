const {ActionsManager} = require("./ActionManager")

// @TODO zmien nazwe tego na cos bardziej ooglnego (bo to sie zachowuje dosyc ogolnie tbh)
export class EventsAdder{

    constructor(actionsManager){
        this.actionsManager = actionsManager;
    }

    // #2 szablon funkcji (?)
    // tutaj musze miec klase, ktora bedzie singletoen i bedzie zawierac inne singletony odpowiedzialne
    // za akcje (czyli wsm tylko 1 akcja) i bede zwracac te singletony po nazwie
    addActionTo(className, actionName){
        let colls = document.getElementsByClassName(className);
        for (let i = 0; i < colls.length; i++) {
            colls[i].addEventListener('click',  this.actionsManager[actionName], false);
        }
    }

}
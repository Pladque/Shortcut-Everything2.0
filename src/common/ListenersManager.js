const {ActionsIterator} = require("../common/Iterator")

export class ListenersManager{

    listen(idButtonActionPairs) {
        const actionsIterator = new ActionsIterator(idButtonActionPairs);
        document.addEventListener('DOMContentLoaded', 
        function() {
            for(let item = actionsIterator.first(); actionsIterator.hasNext(); item = actionsIterator.next()){
                document.getElementById(item.elementId).addEventListener('click', ()=>{
                    item.actionObject.onClickAction({});
                }, false);
            }
            
        }, false)
    }
}


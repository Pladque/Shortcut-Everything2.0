
export class ListenersManager{

    listen(idButtonActionPairs) {
        document.addEventListener('DOMContentLoaded', 
        function() {
            for(let i = 0; i < idButtonActionPairs.length; i = i + 1){
                document.getElementById(idButtonActionPairs[i].elementId).addEventListener('click', ()=>{
                    idButtonActionPairs[i].actionObject.onClickAction({});
                }, false);
            }
            
        }, false)
    }
}


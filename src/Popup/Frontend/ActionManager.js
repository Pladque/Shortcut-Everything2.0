
// #1 Singleton
class VariableHolder{
    constructor(){
    }

    getGuard(name){
        return this[name];
    }

    // Naming convenction: [Class Name]_[Method Name]
    addGuard(name){
        this[name] = true;
    }
}

const variableHolder = new VariableHolder();

export class ActionsManager{

    collapsableEventsOnClickAction(){
        if( variableHolder.getGuard("ActionsManager_collapsableEventsOnClickAction") !== undefined){
            return;
        }

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        

        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        variableHolder.addGuard("ActionsManager_collapsableEventsOnClickAction")
    }
    

}

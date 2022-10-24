// #1 Singleton
// #4 Stan (korzystam w KeyboardAction - mozliwe ze bede musial zrobic KeyboardAction jako singleton i tam pameitac stan, poto zeby bylo to bedziej poprawne)
class PopUpInputStateManager{

    constructor() {
        this.states = {
            "none": "none",
            "new": "new",
            "update": "update"
        }

        this.currentState = this.states.none;
    }

    changeState(newState){
        this.currentState = newState;
    }

    getStates(){
        return this.states;
    }

    getCurrentState(){
        return this.currentState;
    }
}

const popUpInputStateManagerInstance = new PopUpInputStateManager();

// Object.freeze(popUpInputStateManagerInstance);

export { popUpInputStateManagerInstance as inputStateManager};
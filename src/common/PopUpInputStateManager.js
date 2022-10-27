// #1 Singleton
// #4 Stan (using this in KeyboardAction)
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

export { popUpInputStateManagerInstance as inputStateManager};
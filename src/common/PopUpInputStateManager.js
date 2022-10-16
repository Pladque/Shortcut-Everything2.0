// #1 Singleton
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
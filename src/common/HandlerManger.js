
// Allows to run fucntions in chain
export class HandleManager{
    constructor(){
        this.handers = []
    }

    use(newFunction){
        let newHandler = new Handler(newFunction);
        if (this.handers.length > 0){
            this.handers[this.handers.length - 1].setNexthandler(newHandler);
        }

        this.handers.push(newHandler);
    }

    run(data){
        if(this.handers.length >= 0){
            return this.handers[0].run(data);
        }else{
            return {}
        }
    }

}


class Handler{
    constructor(func = (x) => {}, nextHandler = null){
        this.func = func;
        this.nextHandler = nextHandler;
    }

    run(data){
        if(this.nextHandler){
            return this.nextHandler.run(this.func(data));
        }else{
            return this.func(data);
        }
    }

    setNexthandler(nextHandler){
        this.nextHandler = nextHandler;
    }

}
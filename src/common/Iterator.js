
// #6 Iterator
export class ActionsIterator {

    constructor(items){
        this.elems = items;
        this.ind = 0;
    }

    first(){
        this.reset();
        return this.current();
    }

    next() {
        return this.elems[this.ind++];
    }

    hasNext() {
        return this.ind < this.elems.length;
    }

    reset() {
        this.ind = 0;
    }

    current() {
        return this.elems[this.ind];
    }
}

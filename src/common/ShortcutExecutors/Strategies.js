export class SearchElementBasicStrategy{

    constructor(searchAlgObj){
        this.searchAlgObj = searchAlgObj;
    }

    runStrategy(savedShortCut){
        let elem = this.searchAlgObj.getElementWithProperties(savedShortCut, false) 
        return elem;
    }
    
}

export  class SearchElementAutoCheckInnerTextStrategy{

    constructor(searchAlgObj){
        this.searchAlgObj = searchAlgObj;
    }

    runStrategy(savedShortCut){
        let elem = this.searchAlgObj.getElementWithProperties(savedShortCut, false) 

        if(elem === null){
            savedShortCut.attributes.others.checkInnerText = ! savedShortCut.attributes.others.checkInnerText;
            elem = this.searchAlgObj.getElementWithProperties(savedShortCut, false) 
        }

        return elem;

    }
    
}


export class SearchElementFullSearchStrategy{

    constructor(searchAlgObj){
        this.searchAlgObj = searchAlgObj;
    }

    runStrategy(savedShortCut){
        let elem = this.searchAlgObj.getElementWithProperties(savedShortCut, true) 

        return elem;
    }

}


export class SearchElementLifebuoyStrategy{

    constructor(searchAlgObj){
        this.searchAlgObj = searchAlgObj;
    }

    runStrategy(savedShortCut){

        let elem = this.searchAlgObj.getElementWithProperties(savedShortCut, true) 

        if(elem === null){
            savedShortCut.attributes.others.checkInnerText = ! savedShortCut.attributes.others.checkInnerText;
            elem = this.searchAlgObj.getElementWithProperties(savedShortCut, true) 
        }

        return elem;
    }

}

const {ATTRIBIUTES_TO_SKIP} = require("../../configVariables")


export class SearchAlghorythm{

    constructor(){

    }


    getElementWithProperties(elementProperties, fullSearch){
        let allElements;

        if(fullSearch){
            allElements = document.body.getElementsByTagName("*") 
        }else{
            allElements = document.body.getElementsByTagName(elementProperties.attributes.tagName);
        }

        let elementPropertiesJSON = {}
        elementPropertiesJSON = JSON.parse(elementProperties.attributes.targetAttributes);


        const innerText = elementProperties.attributes.others.innerText
        const checkInnerText = elementProperties.attributes.others.checkInnerText

        let indexOfWantetElement = 0

        let maxNoMatchingFields = 0;
        const optionsJSON =  elementProperties.options

        
        if(optionsJSON.maxAmonutOfAttribiutesToSkip){
            maxNoMatchingFields = optionsJSON.maxAmonutOfAttribiutesToSkip;
        }

        if(elementProperties.options.elementIndex){
            indexOfWantetElement = +elementProperties.options.elementIndex
        }

        const skippableAttribiutes = optionsJSON.skipableAttribiutes || [];

        const attributes_names = this._getJSONfieldNames(elementPropertiesJSON)
        let noMatchingFields = 0;
        let matchingElements = []

        // debug
        let min_noMatchingFields = 99999;
        //
        
        for(let i =0; i<allElements.length; i++){
            let skippedAttribiutes = 0;

            for(let j = 0; j<attributes_names.length; j++){
                
                if(ATTRIBIUTES_TO_SKIP.includes(attributes_names[j])){
                    skippedAttribiutes++;
                    continue;
                }

                if(allElements[i].getAttribute(attributes_names[j]) !== elementPropertiesJSON[attributes_names[j]]){
                    noMatchingFields++;
                }

                if(!skippableAttribiutes.includes(attributes_names[j])){
                    break;
                }

                if(noMatchingFields > maxNoMatchingFields){
                    break;
                }

            }
            
            if( noMatchingFields == 0 || noMatchingFields <= maxNoMatchingFields)
            {
                if(this._onlyElementInnerText(allElements[i]) === innerText || checkInnerText===false){
                    if(optionsJSON.hasToBeVisible){
                        if(this._isInViewport(allElements[i]) === true){
                            matchingElements.push({
                            "noMatchingFields": noMatchingFields,
                            "element": allElements[i],
                            })
                        }
                    }else{
                        matchingElements.push({
                        "noMatchingFields": noMatchingFields,
                        "element": allElements[i],
                        })

                    }


                }
            }


            noMatchingFields = 0;
        }

        
        matchingElements.sort( this._compareSearchResults );
        
        if(matchingElements.length >=1){
            let wantedIndexFinal = indexOfWantetElement;

            // cAlert(indexOfWantetElement)
            if(indexOfWantetElement < 0){
            wantedIndexFinal = Math.max(0, matchingElements.length+indexOfWantetElement);
            }

            // cAlert(wantedIndexFinal);

            // cAlert(isInViewport(matchingElements[Math.min(wantedIndexFinal, matchingElements.length-1)].element))
            return  matchingElements[Math.min(wantedIndexFinal, matchingElements.length-1)].element;
        }
        
        return null
    }


    _getJSONfieldNames(jsonObject){
        let fieldNames = []
        for (let key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
            fieldNames.push(key);
            }
        }

        return fieldNames

    }


    // returns inner text that belongs only to given element, excludes children innerTexts
    _onlyElementInnerText(el){
        let child = el.firstChild;
        let texts = [];

        while (child) {
            if (child.nodeType == 3) {
                texts.push(child.data);
            }
            child = child.nextSibling;
        }

        var text = texts.join("");

        return text
    }

    _isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    _compareSearchResults( a, b ) {
        if ( a.noMatchingFields < b.noMatchingFields ){
        return -1;
        }
        if ( a.noMatchingFields > b.noMatchingFields ){
        return 1;
        }
        return 0;
  }

}
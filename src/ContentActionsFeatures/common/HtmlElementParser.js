const {NOT_WORKING_TAGS, ATTRIBIUTES_TO_SKIP} = require("../../configVariables")

export class HtmlElementParser{

    // @DESC: Gets data from object (element) user clicked on 
    // @INPUT: event
    // @RETURNS: all data from event.target but skip ones from ATTRIBIUTES_TO_SKIP
    async parseElement(e){
        e = e || window.event;
        var target = e.target || e.srcElement
        
        const orginalTarget = target;

        try {
            while(NOT_WORKING_TAGS.includes(target.tagName)){
            target = target.parentElement;
            }
        } catch (error) {
            alert("Something went wrong! There are no clickable tags nearby!");
        }

        let elementData = {};
        const attributerArray = JSON.stringify(this._createArrFromAttribiutes(target));
        elementData.targetAttributes = attributerArray
        elementData.tagName = target.tagName
        elementData.others = {checkInnerText: true};
        const innerText =  "" + this._onlyElementInnerText(orginalTarget)
        elementData.others.innerText = innerText;

        return elementData;
    }

    _createArrFromAttribiutes(target){
        var temp_button_data = {};
        const attrsNames = target.getAttributeNames();

        for(let i =0; i<attrsNames.length; i++){
            if(ATTRIBIUTES_TO_SKIP.includes(attrsNames[i])){
            continue;
            }

            temp_button_data[attrsNames[i]] =  target.getAttribute(attrsNames[i]);
        }

        return temp_button_data;
    }

    _onlyElementInnerText(el){
        let child = el.firstChild;
        let texts = [];

        while (child) {
            if (child.nodeType == 3) {
                texts.push(child.data);
            }
            child = child.nextSibling;
        }
        
        let text = texts.join("");

        return text
    }

}
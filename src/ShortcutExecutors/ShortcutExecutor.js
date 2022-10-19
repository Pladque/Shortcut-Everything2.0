const {autoCheckInnerTextChange} = require("../configVariables")
const {storage} = require("../common/Storage")
const {TAGS_TO_SELECT, SEARCH_FULL} = require("../configVariables")
const {readActivator} = require("../features/common/ReadActivator")
const {UrlParser} = require("../common/UrlParser")

export class ShortcutExecutor{

    // searchAlgObj to bedzie obiekt z funckja getElementWithProperties
    // clickStrategyBsObjs to bedzie lista obiektow dopasowanych do szablonu:
    // {
    //      evaluator: function that will take "elem" and avalueate if I should pick that function
    //      strategy: fucntion that will take searchAlgObj and will try to change sth (like "checkInnerText" etc) to make alg work
    // }
    constructor(searchAlgObj, clickStrategyBsObjs){
        this.searchAlgObj = searchAlgObj;
        this.clickStrategyObjs = clickStrategyBsObjs;
    }

    // @TODO - przeniessc te funkcja do innych klas i wgl zrobic zeby to sie dodawalo do cacha potem
    //          Zrobic nowa klas enadrzedna w kt bedzie ten forLoop mby
    // @change element should be aqual to data.data[i] from memory
    shortcutAction(data){
        // alert("data data length:  " + data.data.length)
        let shortCutInfo = {}
        for(let i = 0; i < data.data.length; i++){
            shortCutInfo[data.data[i].shortcut] = () => {
                if(readActivator.isExtensionEnabled && data.data[i].options.enabled){
                    const savedShortCut =  data.data[i];
                    
                    if(savedShortCut && readActivator.ReadAcces){
                        
                        let elem = this.searchAlgObj.getElementWithProperties(savedShortCut, false) 
                        
                        if(elem === null && autoCheckInnerTextChange){
                            data.data[i].attributes.others.checkInnerText = ! data.data[i].attributes.others.checkInnerText;
                            const parser = new UrlParser();
                            storage.saveToLocalStorage(parser.getSiteUrlIdentifier(), data)
                            elem = this.searchAlgObj.getElementWithProperties(data.data[i], false) 
                        }
                        
                        if(elem === null && SEARCH_FULL){
                            elem = this.searchAlgObj.getElementWithProperties(data.data[i], true) 
                        }

                        if(elem === null){
                            if(data.data[i].options.hasToBeVisible){
                                alert("ERROR, cannot element on current screen (perhaps element is not visible)")
                            }else{
                                alert("ERROR, cannot element")
                            }
                        }
                        else{

                            try {
                                if(TAGS_TO_SELECT.includes(elem.tagName.toLowerCase())){
                                    this._selectText(elem)
                                }else{
                                    elem.click();
                                }

                            } catch (error) {
                            alert("Ups, something went wrong")
                            alert("Try add " + elem.tagName + " to NOT_WORKING_TAGS in config file (remember to delete this shortcut and add again)")
                            }

                        }
                    }
                }
            }
        }

        return shortCutInfo;
    }


    _selectText(input) {
        input.focus();
        input.select();
    }

}
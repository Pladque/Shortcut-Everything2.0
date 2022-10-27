import { searchAlghorythmStrategy } from "./SearchElementStrategy";

const {TAGS_TO_SELECT} = require("../../configVariables")
const {readActivator} = require("../../ContentActionsFeatures/common/ReadActivator")

export class ShortcutExecutor{

    constructor(searchAlgObj, searchAlghorythmStrategy){
        this.searchAlgObj = searchAlgObj;
    }

    
    shortcutAction(data){
        let shortCutInfo = {}
        for(let i = 0; i < data.data.length; i++){
            shortCutInfo[data.data[i].shortcut] = () => {

                if(readActivator.isExtensionEnabled && data.data[i].options.enabled){

                        const elem = searchAlghorythmStrategy.runStrategy({
                            savedShortCut: data.data[i],
                        })

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

        return shortCutInfo;
    }


    _selectText(input) {
        input.focus();
        input.select();
    }
    

}
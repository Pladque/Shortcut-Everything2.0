const {REQUEST_SEPARATOR} = require("../../common/PopupAndContentCommunication/Orders")
const {readActivator} = require("../common/ReadActivator")
const {HtmlElementParser} = require("../common/HtmlElementParser")
const {UrlParser} = require("../../common/UrlParser")
const {storage} = require("../../common/Storage")

export class ImproveShortcutFeature{

    constructor(){
        this.shortcutMem = "none";
    }

     // function called when gets called by popup
    async onCallResponse(data){
        const shortcutToImprove = data.request.split(REQUEST_SEPARATOR)[1]
        await this._improveShortcut(shortcutToImprove)

    }

    async _improveShortcut(shortcut){
        readActivator.ReadAcces = false;

        this.shortcutMem = shortcut  
        document.body.addEventListener('click', async (e) => {
            if(readActivator.ReadAcces || shortcut === undefined){
                return
            }
            
            shortcut = this.shortcutMem;
            
            readActivator.ReadAcces = true;
            
            let htmlElementParser = new HtmlElementParser()
            
            const elementPropertiesWithOrginal = await htmlElementParser.parseElement(e).catch(e => {
                console.log(e);
            });
            
            let parser = new UrlParser();
            const site = await parser.getSiteUrlIdentifier();
            
            let presentShortcuts = null
            
            try {
                presentShortcuts = await storage.readLocalStorage(site).catch(e => {
                    console.log(e);
                });
            } catch (error) {
                
            }
            
            if(presentShortcuts === null || presentShortcuts === undefined){
                alert("Something went wrong coudnt find any shortcuts! (" + shortcut + ")")
            }else{
                let shortcutrsArr = presentShortcuts["data"]
                
                let indexOfShortcut = this._getIndexOfShortcut(shortcutrsArr, shortcut)
                
                if(indexOfShortcut === -1){  // coudn find such a shortcut
                    
                    alert("Something went wrong coudnt find shortcut: " + this.shortcutMem)
                    
                }else{  // improve shortcut
                    
                    let attributesProduct = {"targetAttributes": {}, "others": {}}
                    
                    const newTargetAttribiutes = JSON.parse(elementPropertiesWithOrginal.targetAttributes);
                    const oldTargetAttribiutes = JSON.parse(shortcutrsArr[indexOfShortcut].attributes.targetAttributes);
                    
                    for (const [key, value] of Object.entries(oldTargetAttribiutes)) {
                        if(newTargetAttribiutes[key] === oldTargetAttribiutes[key]){
                            attributesProduct.targetAttributes[key] = newTargetAttribiutes[key]
                        }
                    }     

                    const newTargetothers = (elementPropertiesWithOrginal.others);
                    const oldTargetOthers = (shortcutrsArr[indexOfShortcut].attributes.others);
                    
                    for (const [key, value] of Object.entries(oldTargetOthers)) {
                        if(newTargetothers[key] === oldTargetOthers[key] || key === "checkInnerText"){
                            attributesProduct.others[key] = newTargetothers[key]
                        }
                    }     
                    
                    shortcutrsArr[indexOfShortcut].attributes.targetAttributes = JSON.stringify(attributesProduct.targetAttributes)
                }
                
                await storage.saveToLocalStorage(site,  {"data": shortcutrsArr, info: presentShortcuts["info"]}).catch(e => {
                    console.log(e);
                });
            }

            shortcut = ""
        }
        , true)

    }

    _getIndexOfShortcut(shortcutrsArr, shortcut){
        let index = -1;
        for(let i =0; i< shortcutrsArr.length; i++){
            if(shortcutrsArr[i]["shortcut"] === shortcut){
            index = i;
            break;
            }
        }

        return index
    }


}
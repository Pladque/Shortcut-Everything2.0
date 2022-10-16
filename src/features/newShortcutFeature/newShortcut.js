const {CREATE_NEW_SHOWRTCUT_MSG, REQUEST_SEPARATOR} = require("../../common/PopupAndContentCommunication/Orders")
const {readActivator} = require("./ReadActivator")
const {HtmlElementParser} = require("../common/HtmlElementParser")

// @TODO - tutaj musze te funkcje podorabiac iwgl pozmieniac na bardziej obiektowe
export class NewShortcutFeature{

    constructor(){
        this.shortcutMem = "none";
    }

    // function called when gets called by popup
    async onCallResponse(data){
        const shortcutStartInd = CREATE_NEW_SHOWRTCUT_MSG.length + REQUEST_SEPARATOR.length
        const shortcut = data.request.substr(shortcutStartInd, data.request.length-1)

        await this._newShortcut(shortcut).catch(e => {console.log(e); });
    }

    async _newShortcut(shortcut){
        
        readActivator.ReadAcces = false;
            
        this.shortcutMem = shortcut  
        document.body.addEventListener('click', async (e) => {
            if( readActivator.ReadAcces || shortcut === undefined){
                return
            }
    
            shortcut = this.shortcutMem
            readActivator.ReadAcces = true;

            alert(shortcut)
            
            const htmlElementParser = new HtmlElementParser();
            const elementPropertiesWithOrginal = await htmlElementParser.parseElement(e).catch(e => {
                console.log(e);
            });

            // @finishedHere
            alert(JSON.stringify(elementPropertiesWithOrginal))
            
            // const site = getSiteUrlIdentifier();

            // let presentShortcuts = null

            // try {
            // presentShortcuts = await readLocalStorage(site).catch(e => {
            //     console.log(e);
            // });
            // } catch (error) {
            
            // }

            // const description = "No description provided"

            // const shortcutInfoObj = {
            // "shortcut": shortcut, 
            // "attributes": elementPropertiesWithOrginal, 
            // "desc": description, 
            // "options": {
            //     "enabled": true, 
            //     "skipableAttribiutes":    Object.keys(JSON.parse(elementPropertiesWithOrginal.targetAttributes)),
            //     "maxAmonutOfAttribiutesToSkip": 0,
            //     "hasToBeVisible": false,
            // }
            // }

            // if(presentShortcuts === null || presentShortcuts === undefined){
            // await saveToLocalStorage(site,  {"data": [ shortcutInfoObj ], "info": {"enabled": true} })
            //     .catch(e => {
            //     console.log(e);
            //     });

            // }else{
            // shortcutrsArr = presentShortcuts["data"]
            
            // let indexOfShortcut = getIndexOfShortcut(shortcutrsArr, shortcut)
            
            // if(indexOfShortcut === -1){  // add new shortcut
            //     shortcutrsArr.push(shortcutInfoObj) 
            // }else{  // override shortcut
            //     shortcutrsArr[indexOfShortcut] = shortcutInfoObj
            // }

            // await saveToLocalStorage(site,  {"data": shortcutrsArr, info: presentShortcuts["info"]}).catch(e => {
            //     console.log(e);
            //     });
            // }

            shortcut = "";
        }, true)

    }

}




///////
// global value to save somewhere entered shortcut

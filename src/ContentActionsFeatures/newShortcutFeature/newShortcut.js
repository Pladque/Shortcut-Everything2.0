const {CREATE_NEW_SHOWRTCUT_MSG, REQUEST_SEPARATOR} = require("../../common/PopupAndContentCommunication/Orders")
const {readActivator} = require("../common/ReadActivator")
const {HtmlElementParser} = require("../common/HtmlElementParser")
const {UrlParser} = require("../../common/UrlParser")
const {storage} = require("../../common/Storage")

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

            
            const htmlElementParser = new HtmlElementParser();
            const elementPropertiesWithOrginal = await htmlElementParser.parseElement(e).catch(e => {
                console.log(e);
            });

            const urlParser = new UrlParser();
            const site = urlParser.getSiteUrlIdentifier();
            
            let presentShortcuts = null
            try {
                presentShortcuts = await storage.readLocalStorage(site).catch(e => {
                    console.log(e);
                });
            } catch (error) {
                
            }
            const description = "No description provided"

            const shortcutInfoObj = {
                "shortcut": shortcut, 
                "attributes": elementPropertiesWithOrginal, 
                "desc": description, 
                "options": {
                    "enabled": true, 
                    "skipableAttribiutes":    Object.keys(JSON.parse(elementPropertiesWithOrginal.targetAttributes)),
                    "maxAmonutOfAttribiutesToSkip": 0,
                    "hasToBeVisible": false,
                }
            }
            if(presentShortcuts === null || presentShortcuts === undefined){
                await storage.saveToLocalStorage(site,  {"data": [ shortcutInfoObj ], "info": {"enabled": true} })
                .catch(e => {
                    console.log(e);
                });

            }else{
                let shortcutrsArr = presentShortcuts["data"]
                
                let indexOfShortcut = this._getIndexOfShortcut(shortcutrsArr, shortcut)
                
                if(indexOfShortcut === -1){  // add new shortcut
                    shortcutrsArr.push(shortcutInfoObj) 
                }else{  // override shortcut
                    shortcutrsArr[indexOfShortcut] = shortcutInfoObj
                }

                await storage.saveToLocalStorage(site,  {"data": shortcutrsArr, info: presentShortcuts["info"]}).catch(e => {
                    console.log(e);
                    });
            }

            let  presentShortcutsDEBUG = await storage.readLocalStorage(site).catch(e => {
                    console.log(e);
                });

            // alert("current shortcuts: " + JSON.stringify(presentShortcutsDEBUG))

            shortcut = "";
        }, true)

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


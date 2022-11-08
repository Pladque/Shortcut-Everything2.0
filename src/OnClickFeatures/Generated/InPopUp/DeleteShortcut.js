import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";
import { ShortcutFinder } from "../../../common/ShortcutFinder";

const {storage} = require("../../../common/Storage")


export class DeleteShortcut{

    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site, shortcut
    // site - current side identyfier
    // shortcut - ex. alt-p
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }


    async runFeature (data) {
        await this._deleteShortcut(data.shortcut, data.site).catch(e => {console.log(e);});
        return data;
    }

    async _deleteShortcut(shortcutToDelete, site){
        let presentShortcuts = null

        try {
            presentShortcuts = await storage.readLocalStorage(site).catch(e => {console.log(e);});
        } catch (error) {  }

        if(presentShortcuts === null){
            alert("not found any shortcuts for this site: " + site)
            return
        }
        
        let shortcutrsArr = presentShortcuts.data
        
        let indexOfShortcut = new ShortcutFinder().findShortcut(shortcutrsArr, shortcutToDelete)
        
        let shortcutInfo = {}
        if(indexOfShortcut === -1){  // not found shortcut
            alert("not found shortcut: " +  shortcutToDelete + ". Nothing deleted")
            return

        }else{  // delete shortcut

            shortcutInfo = shortcutrsArr[indexOfShortcut] 
            shortcutrsArr.splice(indexOfShortcut, 1);
        }

        await storage.saveToLocalStorage(site, {"data": shortcutrsArr, info: presentShortcuts["info"]}).catch(e => {console.log(e);});
        
        alert("deleted " + shortcutToDelete +" "+ shortcutInfo["desc"])

        }


}
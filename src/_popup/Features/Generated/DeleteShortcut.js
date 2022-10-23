import { addSitePropertyDecorator } from "../../../common/Decorators/addSitePropertyDecorator";

const {UrlParser} = require("../../../common/UrlParser")
const {storage} = require("../../../common/Storage")


export class DeleteShortcut{

    constructor(handler){
        this.handler = handler
    }

    setSite(site){
        this.site = site;
    }

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
        
        let indexOfShortcut = this._getIndexOfShortcut(shortcutrsArr, shortcutToDelete)
        
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

        // @TODO - uzywam tego czesto w innych klasach, przeniesc to do nwej klasy!!
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
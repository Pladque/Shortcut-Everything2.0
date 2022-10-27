const {storage} = require("../../common/Storage")
const {UrlParser} = require("../../common/UrlParser")
const {shortcutsListener} = require("../../Content/ShortcutsListener")
const {readActivator} = require("../common/ReadActivator")

export class CacheManager{

    constructor(searchAlghorythmObj){
        this.searchAlghorythmObj = searchAlghorythmObj;
    }
        
    async updateCache(){
        try {
            const parser = new UrlParser();
            const data = await storage.readLocalStorage(await parser.getSiteUrlIdentifier())
            
            const shortsCutInfo = this.searchAlghorythmObj.shortcutAction(data)
            
            readActivator.isExtensionEnabled = data.info.enabled;

            await shortcutsListener.loadShortcuts(shortsCutInfo);
            
        } catch (err) {
            const data = {"data": [], "info": {"enabled": true}}
            const parser = new UrlParser();
            await storage.saveToLocalStorage(parser.getSiteUrlIdentifier(), data)
            const shortsCutInfo = this.searchAlghorythmObj.shortcutAction(data);
            await shortcutsListener.loadShortcuts(shortsCutInfo);
        }

    }

}
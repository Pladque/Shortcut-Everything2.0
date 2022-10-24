const {storage} = require("../common/Storage")
const {UrlParser} = require("../common/UrlParser")
const {shortcutsListener} = require("../_content/ShortcutsListener")
const {readActivator} = require("../features/common/ReadActivator")

// powinna miec funckje typu update cache i to chyba tyle
// niech sam algos wyszukujacy bedzie przekazywany jakims obiektem z funkcja o konkretnej nazwie
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
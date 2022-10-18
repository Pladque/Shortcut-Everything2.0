const {storage} = require("../common/Storage");
const {UrlParser} = require("../common/UrlParser");

export class ShowShortcutsRaw{

    // function called when gets called by popup
    async onCallResponse(data){
        const urlParser = new UrlParser();
        const storageData = await storage.readLocalStorage(urlParser.getSiteUrlIdentifier())
        alert(JSON.stringify(storageData))
    }
}
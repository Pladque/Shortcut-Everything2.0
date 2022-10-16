const {storage} = require("../../common/Storage");
const {UrlParser} = require("../../common/UrlParser");

export async function showShortcutsRawOnClickAction(){
    const urlParser = new UrlParser();
    const data = await storage.readLocalStorage(urlParser.getSiteUrlIdentifier())
    alert(JSON.stringify(data))
}
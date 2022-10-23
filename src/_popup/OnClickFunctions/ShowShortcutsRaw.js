import { UrlParser } from "../../common/UrlParser";
import { storage } from "../../common/Storage";


export class RawShortcutsPresenterButtonAction{
    async onClickAction(data){
        const urlParser = new UrlParser();
        const storageData = await storage.readLocalStorage(await urlParser.getSiteUrlIdentifierInPopup())
        alert(JSON.stringify(storageData))
    }
}

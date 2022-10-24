import { UrlParser } from "../../common/UrlParser";
import { storage } from "../../common/Storage";
import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";


export class RawShortcutsPresenterButtonAction{

    constructor(handler){
        this.handler = handler
    }


    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    @addSitePropertyDecorator
    async runFeature(data){
        const urlParser = new UrlParser();
        const storageData = await storage.readLocalStorage(data.site);
        alert(JSON.stringify(storageData))
        return data;
    }
}


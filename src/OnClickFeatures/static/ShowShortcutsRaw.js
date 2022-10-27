import { storage } from "../../common/Storage";
import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";


export class RawShortcutsPresenterButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    async runFeature(data){
        const storageData = await storage.readLocalStorage(data.site);
        alert(JSON.stringify(storageData))
        return data;
    }
}


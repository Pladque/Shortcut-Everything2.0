import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";

const {storage} = require("../../common/Storage")

export class PackageCreatorButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site
    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    async runFeature(data){
        const site = data.site;
            
        const storageData = await storage.readLocalStorage(site)

        let packageJSON = {}

        packageJSON.site = site
        packageJSON.data = storageData;

        const packageStr = JSON.stringify(packageJSON)

        let pacakgeField = document.getElementById("package create field");
        pacakgeField.setAttribute("value", packageStr)

        return data;
    }

    
}

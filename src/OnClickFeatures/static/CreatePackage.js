import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";

const {storage} = require("../../common/Storage")
const {UrlParser} = require("../../common/UrlParser")


export class PackageCreatorButtonAction{

    constructor(handler){
        this.handler = handler
    }

    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    @addSitePropertyDecorator
    async runFeature(data){
        chrome.tabs.query({currentWindow: true, active: true}, async function (tabs) {
            var currentTab = tabs[0]; 

            // @TODO przeniesc to do klasy Parsera elegancko
            const url = JSON.stringify(currentTab.url)

            const parser = new UrlParser();
            const parsedUrl = parser._parseURL(url);
            const data = await storage.readLocalStorage(data.site)

            let packageJSON = {}

            packageJSON.site = parsedUrl
            packageJSON.data = data;

            const packageStr = JSON.stringify(packageJSON)

            let pacakgeField = document.getElementById("package create field");
            pacakgeField.setAttribute("value", packageStr)
        });

        return data;
    }

    
}

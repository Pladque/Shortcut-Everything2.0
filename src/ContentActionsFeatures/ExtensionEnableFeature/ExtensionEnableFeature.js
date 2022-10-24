import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";

const {storage} = require("../../common/Storage")
const { UrlParser} = require("../../common/UrlParser")
const {readActivator} = require("../common/ReadActivator")

export class ExtensionEnableFeature{

    @addSitePropertyDecorator
    async onCallResponse(data){
        // if(data.site === null || data.site ===undefined){

        //     let parser = new UrlParser();
        //     data.site = await parser.getSiteUrlIdentifier();
        // }

        let siteData = await storage.readLocalStorage(data.site).catch(e => {
            console.log(e);
        });

        siteData.info.enabled = !siteData.info.enabled
        readActivator.isExtensionEnabled = siteData.info.enabled;
        
        const updatedRecord = siteData;

        await storage.saveToLocalStorage(data.site, updatedRecord).catch(e => {
            console.log(e);
        });;

        alert("extension for this site is enabled: " + siteData.info.enabled)
    }
}
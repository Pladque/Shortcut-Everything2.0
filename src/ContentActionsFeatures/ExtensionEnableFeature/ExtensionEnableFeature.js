import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";
const {storage} = require("../../common/Storage")
const {readActivator} = require("../common/ReadActivator")

export class ExtensionEnableFeature{

    @addSitePropertyDecorator
    async onCallResponse(data){
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
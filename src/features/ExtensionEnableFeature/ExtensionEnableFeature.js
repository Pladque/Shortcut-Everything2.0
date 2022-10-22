const {storage} = require("../../common/Storage")
const { UrlParser} = require("../../common/UrlParser")
const {readActivator} = require("../common/ReadActivator")

export class ExtensionEnableFeature{
    async onCallResponse(site){
        if(site === null || site ===undefined){

            let parser = new UrlParser();
            site = await parser.getSiteUrlIdentifier();
        }

        let siteData = await storage.readLocalStorage(site).catch(e => {
            console.log(e);
        });

        siteData.info.enabled = !siteData.info.enabled
        readActivator.isExtensionEnabled = siteData.info.enabled;
        const updatedRecord = siteData;

        await storage.saveToLocalStorage(site, updatedRecord).catch(e => {
            console.log(e);
        });;

        alert("extension for this site is enabled: " + siteData.info.enabled)
    }
}
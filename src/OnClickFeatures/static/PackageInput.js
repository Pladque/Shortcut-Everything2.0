const {storage} = require("../../common/Storage")


export class PackageLoaderButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // @TODO dodac tu @addSitePropertyDecorator
    async onClickAction(data){
         this.handler.run(await this.runFeature(data))
    }
    
    async runFeature(data){
        let file = document.getElementById("package input field").files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = async function (evt) {
            const dataJSON = JSON.parse(evt.target.result);

            await storage.saveToLocalStorage(dataJSON.site, (dataJSON.data))
        
        }
        reader.onerror = function (evt) {
                console.error("error reading file")
            }
        
        }

        return data;
    }
}

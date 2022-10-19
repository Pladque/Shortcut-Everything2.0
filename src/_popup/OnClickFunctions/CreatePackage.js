const {storage} = require("../../common/Storage")
const {UrlParser} = require("../../common/UrlParser")


export function createPackageClickAction(){
     chrome.tabs.query({currentWindow: true, active: true}, async function (tabs) {
            var currentTab = tabs[0]; 

            // @TODO przeniesc to do klasy Parsera elegancko
            const url = JSON.stringify(currentTab.url)

            const parser = new UrlParser();
            const parsedUrl = parser._parseURL(url);
            const data = await storage.readLocalStorage(parsedUrl)

            let packageJSON = {}

            packageJSON.site = parsedUrl
            packageJSON.data = data;

            const packageStr = JSON.stringify(packageJSON)

            let pacakgeField = document.getElementById("package create field");
            pacakgeField.setAttribute("value", packageStr)
        });
}
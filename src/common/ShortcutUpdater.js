const {storage} = require("./Storage")
const {UrlParser} = require("./UrlParser")

export class ShortcutUpdater{

     // called by keyboardReader
    async updateShortcut(shortcut, fields, newValue, site){
        chrome.tabs.query({currentWindow: true, active: true}, async function (tabs) {
            const data = await storage.readLocalStorage(site).catch(e => {
                console.error(e);
            });

            for(let i = 0; i<data.data.length; i++){
                if(data.data[i].shortcut === shortcut){
                    
                    if(fields.length == 2){
                        data.data[i][fields[0]][fields[1]] = newValue
                    }else if(fields.length == 1){
                        data.data[i][fields[0]] = newValue
                    }else if(fields.length == 3){
                        data.data[i][fields[0]][fields[1]][fields[2]] = newValue
                    }
                    
                    await storage.saveToLocalStorage(site, data).catch(e => {
                        console.error(e);
                    });

                    return
                }
            }
        })
    }
}
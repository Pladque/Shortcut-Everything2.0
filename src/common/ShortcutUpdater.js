const {storage} = require("./Storage")

export class ShortcutUpdater{

    // shortcut - shortcut 'name', ex. "alt-p" or "ctrl-h"
    // fields - list of fields name, for example. ["one", "two"]
    // newValue - new value for field specified above (no verification)
    // site - site Identifier for website we are reffering to
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
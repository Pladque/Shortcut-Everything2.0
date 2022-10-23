const {BackendTitleCreator} = require("./BackendTitleCreator")
const {STORAGE_RESERVED_NAMES_PREFIX} = require("../../common/PopupAndContentCommunication/Orders")
const {ExtensionEnablerButtonAction} = require("../../_popup/Features/static/OnOffLocal")

const {UrlParser} = require("../../common/UrlParser")
const {storage} = require("../../common/Storage")

const {ShortcutBackendViewSingleSectionCreator} = require("./ShortcutsBackendViewSingleSectionCreator")

// Creates shortcut nodes for page
export class ShortcutSectionCreator{
    createShortcutsViewBoard(_){
        chrome.storage.local.get(null, async function(items) {
            var allKeys = Object.keys(items);

            for(let site_ind =0; site_ind< allKeys.length; site_ind++){
                const url = allKeys[site_ind];
                if(url.substring(0, STORAGE_RESERVED_NAMES_PREFIX.length) === STORAGE_RESERVED_NAMES_PREFIX){
                    continue;
                }

                const data = await storage.readLocalStorage(url).catch(e => {
                    console.error(e);
                });
                
                if(data === undefined || data === null){
                    return;
                }
                
                await new Promise(r => setTimeout(r, 10));

                if(data.data.length >= 1){
                    let titleCreator = new BackendTitleCreator();
                    let node = document.getElementById("shortcuts collection");
                    node.appendChild(titleCreator.getTitle(url));
                    
                    var onOffSiteButton = document.createElement('button');
                    onOffSiteButton.innerText = "On/Off site"
                    node.appendChild(onOffSiteButton)
                    
                    onOffSiteButton.addEventListener('click', function() {
                        let enabler = new ExtensionEnablerButtonAction();
                        enabler.onClickAction({url})
                    }, false);
                    
                    for(let i = 0; i< data.data.length; i++){
                        // @TODO
                        // pass it ShortcutsViewRowCreator as parameter
                        let shortcutBackendViewSingleSectionCreator = new ShortcutBackendViewSingleSectionCreator();
                        node.appendChild(
                            shortcutBackendViewSingleSectionCreator.createShortcutPanelRow({
                                shortcutData: data.data[i], 
                                site: url
                            })
                        )
                        
                        var rawDataButton = document.createElement('button');
                        rawDataButton.innerText = "Show raw data"
                        rawDataButton.setAttribute("rawData", JSON.stringify( data.data[i]));
                        
                        var rawDataDiv = document.createElement('div');
                        rawDataDiv.setAttribute("id", url + data.data[i].shortcut)
                        rawDataDiv.setAttribute("showed", "false")
                        
                        rawDataButton.addEventListener('click', function() {
                            const rawDataDiv =document.getElementById( url + data.data[i].shortcut)
                            
                            if (rawDataDiv.getAttribute("showed") === "false"){
                                rawDataDiv.innerHTML = JSON.stringify( data.data[i]);
                                rawDataDiv.setAttribute("showed", "true")
                            }else{
                                rawDataDiv.innerHTML = "";
                                rawDataDiv.setAttribute("showed", "false")
                            }
                        }, false);
                        
                        node.appendChild(rawDataButton);
                        node.appendChild(rawDataDiv);
                        
                    }
                }
                
            }
            
        });
    }

}

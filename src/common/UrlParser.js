
export class UrlParser{
    getSiteUrlIdentifier(){
        const url = this._getURL();
        return this._parseMethod({url: url})
    }
    
    async getSiteUrlIdentifierInPopup(){
        const url = await this._getURLInPopup();
        return this._parseMethod({url: url})
    }

    _getURL(){
        return window.location.href
    }

    async _getURLInPopup(){
        let currentTab = await this._getCurrentTab();
        return JSON.stringify(currentTab.url);
    }
    
    _parseMethod(data){
        return this._parseURL(data.url);
    }

    _parseURL(url){
        const partlyParsed = url.split('//')  // to seperate "https://"
        const parsed = partlyParsed[1].split('/')[0]  

        return parsed
    }

    async _getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }

}
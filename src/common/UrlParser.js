
// @TODO tu chyuba ten wzorzec co oddziela logike biznesowa od czegos tam zastosowac

export class UrlParser{
    getSiteUrlIdentifier(){
        const url = this._getURL();
        return this._parseURL(url)
    }

    _getURL(){
        return window.location.href
    }

    _parseURL(url){
        const partlyParsed = url.split('//')  // to seperate "https://"
        const parsed = partlyParsed[1].split('/')[0]  

        return parsed
    }



}
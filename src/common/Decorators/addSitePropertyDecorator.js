const {UrlParser} = require("../UrlParser")

// #3 Dekorator
// @DESC: Adds to 1st argument new property 'site'
//        args[0].site will contains siteIdentifier
// IF args[0].site ALREADY EXISTS NOTHING WILL BE ADDED!
export function addSitePropertyDecorator(target, name, descriptor) {
  var fn = descriptor.value;
 
  if (typeof fn == 'function') {
    descriptor.value = async function(...args) {
        const parser = new UrlParser();
        if(args[0].site === undefined || args[0].site === null){
            if (location.hash == '#popup') {
                args[0].site = await parser.getSiteUrlIdentifierInPopup();
            }else{
                args[0].site = await parser.getSiteUrlIdentifier();
            }
        }

        var result = fn.apply(this, args);
                    
        return result;
    }
  }
  return descriptor;
 }
const {UrlParser} = require("../UrlParser")

// #3 Dekorator
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
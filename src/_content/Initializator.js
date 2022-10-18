const {CacheManager} = require("./CacheManager")

export class Initializator{

    constructor(shortcutExecutor) {
        this.shortcutExecutor = shortcutExecutor;
    }

    init(){
        const cacheManager = new CacheManager(this.shortcutExecutor);
        cacheManager.updateCache();
    }

}
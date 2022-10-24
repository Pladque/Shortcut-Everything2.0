const {storage} = require("../../common/Storage")

export class StorageReseterButtonAction{

    constructor(handler){
        this.handler = handler
    }

    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    runFeature(data){
        storage.clearStorage();
        return data;
    }
}

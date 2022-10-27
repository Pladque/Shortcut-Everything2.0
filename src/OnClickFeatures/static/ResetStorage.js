const {storage} = require("../../common/Storage")

export class StorageReseterButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // No requirements for data
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    runFeature(data){
        storage.clearStorage();
        return data;
    }
}

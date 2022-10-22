const {storage} = require("../../common/Storage")



export class StorageReseterButtonAction{
    onClickAction(data){
        storage.clearStorage();
    }
}

const {messageTransporter} = require("../../../common/PopupAndContentCommunication/MessageTransporter")
const {CREATE_NEW_DOUBLE_SHOWRTCUT_MSG, REQUEST_SEPARATOR} = require("../../../common/PopupAndContentCommunication/Orders")


export class ImproveShortcut{

    constructor(handler){
        this.handler = handler
    }

    setSite(site){}

    // Required fields in data: shortcut
    // shortcut - ex. alt-p
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    async runFeature (data) {
        messageTransporter.sendMessage(CREATE_NEW_DOUBLE_SHOWRTCUT_MSG + REQUEST_SEPARATOR + data.shortcut)
        return data;
    }
}
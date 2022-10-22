const {messageTransporter} = require("../../../common/PopupAndContentCommunication/MessageTransporter")
const {CREATE_NEW_DOUBLE_SHOWRTCUT_MSG, REQUEST_SEPARATOR} = require("../../../common/PopupAndContentCommunication/Orders")


export class ImproveShortcut{
    async onClickAction (data) {
        messageTransporter.sendMessage(CREATE_NEW_DOUBLE_SHOWRTCUT_MSG + REQUEST_SEPARATOR + data.shortcut)
        //showMessage("updated description")
    }
}
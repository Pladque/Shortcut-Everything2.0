
const {messageTransporter} = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {GET_SHORTCUTS} = require("../../common/PopupAndContentCommunication/Orders")

export class RawShortcutsPresenterButtonAction{
    onClickAction(data){
        messageTransporter.sendMessage(GET_SHORTCUTS);
    }
}

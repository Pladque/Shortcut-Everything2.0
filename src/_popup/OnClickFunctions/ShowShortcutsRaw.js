
const {messageTransporter} = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {GET_SHORTCUTS} = require("../../common/PopupAndContentCommunication/Orders")


export async function showShortcutsRawOnClickAction(){
    messageTransporter.sendMessage(GET_SHORTCUTS)
}
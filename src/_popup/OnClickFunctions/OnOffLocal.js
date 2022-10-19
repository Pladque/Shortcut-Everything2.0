const { messageTransporter } = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {ON_OFF_LOCAL_MSG} = require("../../common/PopupAndContentCommunication/Orders")

export function onOffLocalOnClickAction(){
    messageTransporter.sendMessage(ON_OFF_LOCAL_MSG);
}




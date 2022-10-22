const { messageTransporter } = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {ON_OFF_LOCAL_MSG} = require("../../common/PopupAndContentCommunication/Orders")
const {ExtensionEnableFeature} = require("../../features/ExtensionEnableFeature/ExtensionEnableFeature")
// @TODO
// tutaj chyba mg zrobic na czilku bez wysylania requesta, ale moze na razie niech tak bedzie
export class ExtensionEnablerButtonAction{
    onClickAction(data){
        if(data.url){
            let enabler = ExtensionEnableFeature();
            enabler.onCallResponse(data.site);
        }else{
            messageTransporter.sendMessage(ON_OFF_LOCAL_MSG);
        }
    }
}

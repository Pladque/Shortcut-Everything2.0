import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";

const { messageTransporter } = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {ON_OFF_LOCAL_MSG} = require("../../common/PopupAndContentCommunication/Orders")
const {ExtensionEnableFeature} = require("../../features/ExtensionEnableFeature/ExtensionEnableFeature")
// @TODO
// tutaj chyba mg zrobic na czilku bez wysylania requesta, ale moze na razie niech tak bedzie
export class ExtensionEnablerButtonAction{

    constructor(handler){
        this.handler = handler
    }

    @addSitePropertyDecorator
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }
    
    async runFeature(data){
        if(data.site){
            let enabler = new ExtensionEnableFeature();
            enabler.onCallResponse({site: data.site});
        }else{
            messageTransporter.sendMessage(ON_OFF_LOCAL_MSG);
        }

        return data;
    }
}

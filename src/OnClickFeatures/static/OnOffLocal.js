import { addSitePropertyDecorator } from "../../common/Decorators/addSitePropertyDecorator";

const { messageTransporter } = require("../../common/PopupAndContentCommunication/MessageTransporter")
const {ON_OFF_LOCAL_MSG} = require("../../common/PopupAndContentCommunication/Orders")
const {ExtensionEnableFeature} = require("../../ContentActionsFeatures/ExtensionEnableFeature/ExtensionEnableFeature")


export class ExtensionEnablerButtonAction{

    constructor(handler){
        this.handler = handler
    }

    // Required fields in data: site
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

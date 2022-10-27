import { HandleManager } from "./HandlerManger";
import { MessagePresenter } from "./MessagePresenter";
import { messageTransporter } from "./PopupAndContentCommunication/MessageTransporter";
import { UPDATE_CACHE } from "./PopupAndContentCommunication/Orders";

// setup chains of actions, it will be added to some features by featuresFactory
function createDefaultSet(){
    let defaultHandler = new HandleManager();
    defaultHandler.use((data) => {
        messageTransporter.sendMessage(UPDATE_CACHE);
        return data;
    });


    defaultHandler.use((data) => {
        const messagePresenter = new MessagePresenter();
        messagePresenter.showMessage("succefully updated")
        return data;
    });

    defaultHandler.use(async (data) => {
        await new Promise(r => setTimeout(r, 5000));
        const messagePresenter = new MessagePresenter();
        messagePresenter.clear()
        return data;
    });

    return defaultHandler;
}


function createOnlyMsgSet(){
    let onlyMessageHandler = new HandleManager();
    onlyMessageHandler.use( (data) => {
        const messagePresenter = new MessagePresenter();
        messagePresenter.showMessage("succefully updated")
        return data;
    });

    onlyMessageHandler.use(async (data) => {
        // await new Promise(r => setTimeout(r, 5000));
        const messagePresenter = new MessagePresenter();
        messagePresenter.clear()
        return data;
    });

    return onlyMessageHandler;
}

function createEmptyHandler(){
    let emptyHandler = new HandleManager();
    emptyHandler.use( (data) => {
        return data
    });

    return emptyHandler;
}


export const chainActionsSets = {
    defaultSet: createDefaultSet(),
    onlyMessageHandler: createOnlyMsgSet(),
    emptyHandler: createEmptyHandler(),

}
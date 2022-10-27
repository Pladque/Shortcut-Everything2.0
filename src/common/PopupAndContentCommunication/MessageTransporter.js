class MessageTransporter{
    sendMessage(msg){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, msg)
        })
    }
}

const messageTransporterInstance = new MessageTransporter();

Object.freeze(messageTransporterInstance);

export { messageTransporterInstance as messageTransporter};
const {inputStateManager} = require("./PopUpInputStateManager")
const {keySequenceHolder} = require("./KeySequenceHolder")
const {messageTransporter} = require("./PopupAndContentCommunication/MessageTransporter")
const {CREATE_NEW_SHOWRTCUT_MSG, REQUEST_SEPARATOR} = require("./PopupAndContentCommunication/Orders")

function onKeyDownAction(){

    if(inputStateManager.getCurrentState() === inputStateManager.getStates().new){
        let shortcut = _getShortcutFromUser()
    
        if(event.key === "Enter"){
            if(shortcut ==="")
            {
                alert("Shortcut cannot be empty!")
                return
            }
            messageTransporter.sendMessage(CREATE_NEW_SHOWRTCUT_MSG + REQUEST_SEPARATOR + shortcut)
            
            inputStateManager.changeState(inputStateManager.getStates().none)

            window.close();
        }
    }
    else if (inputStateManager.getCurrentState() ===  inputStateManager.getStates().update){
        
        let shortcut =  _getShortcutFromUser(event)
    
        if(event.key === "Enter"){
        if(shortcut ==="")
        {
            alert("Shortcut cannot be empty!")
            return
        }
        
        // @TODO
        // updateShortcut(oldShortcut, ["shortcut"], shortcut)

        inputStateManager.changeState(inputStateManager.getStates().none)

        window.close();
        }
    }

    function _getShortcutFromUser() {
        if(event.key.toLowerCase() !== "enter"){
            if(event.key.toLowerCase() === "backspace"){
                keySequenceHolder.keySequence.delete(keySequenceHolder.keySequenceStack.pop())
            }
            else{
                keySequenceHolder.keySequence.add(event.key.toLowerCase());
                keySequenceHolder.keySequenceStack.push(event.key.toLowerCase())
            }
            
            document.getElementById("new keySequence input field").value =  _getShortcut();
            return
        }
            
        let shortcut = _getShortcut(keySequenceHolder.keySequence);
        keySequenceHolder.keySequence.clear()
        keySequenceHolder.keySequenceStack = []
        return shortcut;
    }

    function _getShortcut(){
        return new Array(...keySequenceHolder.keySequence).join('-').toLowerCase();
    }

    function _sendMessageToContent(msg){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg)
        
    })
    }



}


export { onKeyDownAction };

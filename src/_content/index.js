const {MessageMatcher} = require("./MessageMatcher");
import {messageResponse} from "./OnCallResponses";
const {shortcutsListener} = require("./ShortcutsListener")
const {Initializator} = require("./Initializator")
const {ShortcutExecutor} = require("../ShortcutExecutors/ShortcutExecutor")
const {SearchAlghorythm} = require("..//ShortcutExecutors/SearchAlghorythm")

const searchAlghorythm = new SearchAlghorythm();
const shortcutExecutor = new ShortcutExecutor(searchAlghorythm, {});

shortcutsListener.start();

const initializator = new Initializator(shortcutExecutor);
initializator.init();

// @TODO move it to new class (sth like CallListener)
const messageMatcher = new MessageMatcher();
chrome.runtime.onMessage.addListener(async function(request){
    for(let i = 0; i < messageResponse.length; i++){
        if(messageMatcher.matchRequest(request, messageResponse[i].msg)){
            messageResponse[i].actionObject.onCallResponse({
                request
            })
        }
    }
})
    


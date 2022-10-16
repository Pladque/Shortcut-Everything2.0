const {MessageMatcher} = require("./MessageMatcher");
const {CREATE_NEW_SHOWRTCUT_MSG} = require("../common/PopupAndContentCommunication/Orders");
const {NewShortcutFeature} = require("../features/newShortcutFeature/newShortcut");

// @TODO move it to new class
chrome.runtime.onMessage.addListener(async function(request){
    const messageMatcher = new MessageMatcher();

    if(messageMatcher.matchRequest(request, CREATE_NEW_SHOWRTCUT_MSG)){
        newShortcutFeature = new NewShortcutFeature();
        newShortcutFeature.onCallResponse({
            request
        })
    }
})



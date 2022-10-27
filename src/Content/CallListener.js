export class CallListener{
    constructor(messageMatcher, messageResponse) {
        this.messageMatcher = messageMatcher;
        this.messageResponse = messageResponse;
    }

    liten(){
        const msgResponses = this.messageResponse;
        const msgmatcher = this.messageMatcher;

        chrome.runtime.onMessage.addListener(async function(request){
            for(let i = 0; i < msgResponses.length; i++){
                if(msgmatcher.matchRequest(request, msgResponses[i].msg)){
                    msgResponses[i].actionObject.onCallResponse({
                        request
                    })
                }
            }
        })
    }
}
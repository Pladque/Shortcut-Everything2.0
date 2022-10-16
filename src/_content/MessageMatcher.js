

export class MessageMatcher{
    matchRequest(request, msg){
    return request.substr(0, msg.length) === msg
    }
}
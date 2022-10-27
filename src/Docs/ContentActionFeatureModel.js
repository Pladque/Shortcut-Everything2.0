
export class ContentActionFeatureModel{

    // No requirements for constructor, if it needs to get some args at start
    // you should handle it in FeaturesFactory
    constructor(){}

    // function called from popup (when call message matches, check messageResponseModel.js)
    async onCallResponse(data){
        // some code here
        await this._newShortcut(shortcut).catch(e => {console.log(e); });
    }

    async _actualFeaturehere(shortcut){
        // some code here
    }


}


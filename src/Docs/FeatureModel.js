
// Model class for feature
class FeatureModel{

    constructor(handler){
        this.handler = handler
    }


    // @addSitePropertyDecorator -- add this decorator if iformation about current webpage link needed
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature(data){
        //write some code here
    }

}
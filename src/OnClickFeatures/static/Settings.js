
export class SettingOpenerButtonAction{

  constructor(handler){
        this.handler = handler
    }

    // No requirements for data
    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    runFeature(data){
      chrome.tabs.create({
        url: "../../../src/Html/settings.html"
      });

      return data;
    }
}

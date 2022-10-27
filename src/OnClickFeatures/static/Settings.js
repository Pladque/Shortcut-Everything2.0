
export class SettingOpenerButtonAction{

  constructor(handler){
        this.handler = handler
    }

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

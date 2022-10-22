
export class SettingOpenerButtonAction{
    onClickAction(data){
       chrome.tabs.create({
      url: "../../../Html/settings.html"
    });
    }
}



export class Initiator{

    constructor(frontendViewBuilder, darkModeManager, collapsableElemetnsEventsAdder){
        this.frontendViewBuilder = frontendViewBuilder;
        this.darkModeManager = darkModeManager;
        this.collapsableElemetnsEventsAdder = collapsableElemetnsEventsAdder
    }

    init = async() => {
        window.addEventListener('load', this._init(event))
    }

    async _init(event){
        // darkmodeEnabled = await getDarkModeSettings();
        // await manageDarkMode();

        let darkmodeEnabled = await this.darkModeManager.readDarkModeSettings();
        await this.darkModeManager.manageDarkMode(darkmodeEnabled);

        // try {
        //     var query = { active: true, currentWindow: true };
        //     chrome.tabs.query(query, _createShortcutsBoard);
        // } catch (err) {

        // }



        try {
            var query = { active: true, currentWindow: true };
            await chrome.tabs.query(query,(tabs) => {
                this.frontendViewBuilder.createShortcutsViewBoard(tabs);
            });
        } catch (err) {

        }

    }

}
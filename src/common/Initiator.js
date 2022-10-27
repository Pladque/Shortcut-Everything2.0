
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
        try {
            var query = { active: true, currentWindow: true };
            await chrome.tabs.query(query,(tabs) => {
                this.frontendViewBuilder.createShortcutsViewBoard(tabs);
            });
        } catch (err) {

        }

        //without this collapsableElemetnsEventsAdder doesnt see any buttons..
        await new Promise(r => setTimeout(r, 50));

        let darkmodeEnabled = await this.darkModeManager.readDarkModeSettings();
        await this.darkModeManager.manageDarkMode(darkmodeEnabled);

        this.collapsableElemetnsEventsAdder.addActionTo("collapsible", "collapsableEventsOnClickAction");
    }

}
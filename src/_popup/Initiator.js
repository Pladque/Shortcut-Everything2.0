

export class Initiator{

    constructor(){
    }

    init = async() => {
        window.addEventListener('load', this._init(event))
    }

    async _init(event){
        // try {
        //     var query = { active: true, currentWindow: true };
        //     await chrome.tabs.query(query, createShortcutsBoard);
        // } catch (err) {
        // }


        // darkmodeEnabled = await getDarkModeSettings();
        // await manageDarkMode();


        // var colls = document.getElementsByClassName("collapsible");
        // for (i = 0; i < colls.length; i++) {
        //     colls[i].addEventListener('click', onclick_loadCollapsableAction, false);
        // }

        alert("intializazed")

    }
}
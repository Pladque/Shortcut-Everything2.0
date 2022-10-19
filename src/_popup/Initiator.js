const {storage} = require("../common/Storage")
const {UrlParser} = require("../common/UrlParser")


// @TODO - do func tha uses that better
let collapsableLoaded = false;


export class Initiator{

    constructor(frontendViewBuilder){
        this.frontendViewBuilder = frontendViewBuilder;
    }

    init = async() => {
        window.addEventListener('load', this._init(event))
    }

    // @finished
    //      Dokoncz zeby to sie wyestiwtlalo wszystko ladnie...
    async _init(event){
        try {
            var query = { active: true, currentWindow: true };
            await chrome.tabs.query(query,(tabs) => {
                this.frontendViewBuilder.createShortcutsViewBoard(tabs);
            });
        } catch (err) {

        }

        // to w8 for collapsable to be created
        // @TODO - if I add dark mode, it should work
       await new Promise(r => setTimeout(r, 500));

        // darkmodeEnabled = await getDarkModeSettings();
        // await manageDarkMode();


        var colls = document.getElementsByClassName("collapsible");
        for (let i = 0; i < colls.length; i++) {
            colls[i].addEventListener('click', this.onclick_loadCollapsableAction, false);
        }

    }

    
    onclick_loadCollapsableAction(e){
        if(collapsableLoaded){
            return;
        }
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        

        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        collapsableLoaded = true;
    }

}
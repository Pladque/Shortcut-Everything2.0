
// @TODO
//      zamienic jednak te funckje na klasy i wywolywac przez lambde to w listenerze!!
//      POTEM
//      tu neich bd klasa "update sequence"
//      funkcja o nazwie "onKeyAction" bedzie wywolywac changeInsertingMode(insertingShortcutModes.update);
//      keyReader bedzie (po zczytaniu shortcuta) wywolywac funckje w stylu "save" i wysylac nowe dane,
//      Dzieki temu ze w update sequenca mam zapisany oldSHortcut to bede wiedzial co nadpisac
//      
// function onclick_updatekeySequence (shortcut) {
//   showMessage("insert new Key sequence, then press ENTER, if such a sequence already exists, it will be overwritten")

import { UrlParser } from "../../common/UrlParser";

  
//   oldShortcut = shortcut;
//   changeInsertingMode(insertingShortcutModes.update);
// }

const {inputStateManager} = require("../../common/PopUpInputStateManager")
const {ShortcutUpdater} = require("../../common/ShortcutUpdater")


// @TODO zmienic nazwe zebyu nie bylo "popup feature" xd
class UpdateSequencePopupFeature{

    constructor(handler){
        this.handler = handler
        this.oldShortcut = "";
    }

    setSite(site){}

    async onClickAction(data){
        this.handler.run(await this.runFeature(data))
    }

    async runFeature(data){
        // showMessage("insert new Key sequence, then press ENTER, if such a sequence already exists, it will be overwritten")
  
        this.oldShortcut = data.shortcut;
        inputStateManager.changeState(inputStateManager.getStates().update)

        return data;
    }


    async updateShortcutName(newName){
        const site =  await new UrlParser().getSiteUrlIdentifierInPopup();
        let shortcutUpdater = new ShortcutUpdater();
        shortcutUpdater.updateShortcut(
            this.oldShortcut, 
            ["shortcut"], 
            newName, 
            site
        );

    }

}

const updateSequenceInstance = new UpdateSequencePopupFeature();

export {updateSequenceInstance as updateSequence}
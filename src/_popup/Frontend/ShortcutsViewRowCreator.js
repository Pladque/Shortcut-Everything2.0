import { UrlParser } from "../../common/UrlParser";

const {updateSequence} = require("../OnClickFunctions/Generated/UpdateShortcutSequence")
const {UpdateShortcutDescription} = require("../OnClickFunctions/Generated/UpdateShortcutDescription")
const {ChangeShortcutIndex} = require("../OnClickFunctions/Generated/ChangeShortcutIndex")
const {ImproveShortcut} = require("../OnClickFunctions/Generated/ImproveShortcut")
const {DeleteShortcut} = require("../OnClickFunctions/Generated/DeleteShortcut")
const {EnableDisableShortcut} = require("../OnClickFunctions/Generated/EnableDisableShortcut")


// @TODO te wszystkie funckej tu trzeba bedzie ogarnac
export class ShortcutsViewRowCreator{

    getRow(data){
        var newNode = document.createElement('div');
        // newNode.setAttribute("style", "border: 2px solid #ffffff; border-radius: 25px; padding: 20px;")
        // newNode.setAttribute("value", data.shortcutData.shortcut)
        newNode.setAttribute("class", "content")

        let enableButton = document.createElement("BUTTON");

        if(data.shortcutData.options.enabled){
        enableButton.innerText = "off"
        }else{
        enableButton.innerText = "on"
        }
        enableButton.setAttribute("shortcut-enabled", data.shortcutData.options.enabled)
        enableButton.setAttribute("class", "enable button");
        enableButton.setAttribute("value", data.shortcutData.shortcut)

        // var name = document.createTextNode(data.shortcutData.shortcut)

        var desbInputField = document.createElement("INPUT");
        desbInputField.setAttribute("type", "text");
        desbInputField.setAttribute("value", data.shortcutData.desc);
        desbInputField.setAttribute("style", "width: 40%;");
        desbInputField.setAttribute("id", "shortcut desc " + data.shortcutData.shortcut);
        
        let descSubmitButton = document.createElement("BUTTON");
        descSubmitButton.innerText = "change desc"
        descSubmitButton.setAttribute("class", "change desc button");
        descSubmitButton.setAttribute("value", data.shortcutData.shortcut)

        let deleteButton = document.createElement("BUTTON");
        deleteButton.innerText = "delete"
        deleteButton.setAttribute("class", "delete button");
        deleteButton.setAttribute("value", data.shortcutData.shortcut);


        let indexInputField = document.createElement("INPUT");
        indexInputField.innerText = "0"
        indexInputField.setAttribute("type", "text");
        indexInputField.setAttribute("id", "wanted index "+ data.shortcutData.shortcut);

        if( data.shortcutData.options.elementIndex){
        indexInputField.setAttribute("value", data.shortcutData.options.elementIndex)    
        }else{
        indexInputField.setAttribute("value", 0)    
        }


        let indexSubmitButton = document.createElement("BUTTON");
        indexSubmitButton.innerText = "change index"
        indexSubmitButton.setAttribute("class", "change index button button");
        indexSubmitButton.setAttribute("value", data.shortcutData.shortcut);

        let improveButton = document.createElement("BUTTON");
        improveButton.innerText = "improve"
        improveButton.setAttribute("class", "improve shortcut button");
        improveButton.setAttribute("value", data.shortcutData.shortcut);

        let updateKeySequenceButton = document.createElement("BUTTON");
        updateKeySequenceButton.innerText = "update shortcut"
        updateKeySequenceButton.setAttribute("class", "update shortcut");
        updateKeySequenceButton.setAttribute("value", data.shortcutData.shortcut);

        newNode.appendChild(enableButton)
        // newNode.appendChild(name)
        newNode.appendChild(desbInputField)
        newNode.appendChild(descSubmitButton)
        newNode.appendChild(deleteButton)
        newNode.appendChild(indexInputField)
        newNode.appendChild(indexSubmitButton)
        newNode.appendChild(improveButton)
        newNode.appendChild(updateKeySequenceButton)

        enableButton.addEventListener('click', async() => {
            const currState = enableButton.getAttribute("shortcut-enabled");
            
            let parser = new UrlParser();
            let site = await parser.getSiteUrlIdentifierInPopup();

            let enableDisableShortcut = new EnableDisableShortcut(site);
            
            if(currState === "true"){
                enableDisableShortcut.onClickAction( {shortcut: data.shortcutData.shortcut, newState: false});
                enableButton.setAttribute("shortcut-enabled", "false");
                enableButton.innerText = "on"
            }else{
                enableDisableShortcut.onClickAction( {shortcut: data.shortcutData.shortcut, newState: true});
                enableButton.setAttribute("shortcut-enabled", "true");
                enableButton.innerText = "off"
            }
        }, false);

        deleteButton.addEventListener('click', async() => {
            let parser = new UrlParser();
            let site = await parser.getSiteUrlIdentifierInPopup();

            let shortcutEraser = new DeleteShortcut(site);
            shortcutEraser.onClickAction( {shortcut: data.shortcutData.shortcut})
        }, false);

        descSubmitButton.addEventListener('click', async() => {
            const descInputField = document.getElementById("shortcut desc " + data.shortcutData.shortcut);
            const parser = new UrlParser();
            const site = await parser.getSiteUrlIdentifierInPopup();
            const descUpdater = new UpdateShortcutDescription(site);
            descUpdater.onClickAction( {shortcut: data.shortcutData.shortcut, desc: descInputField.value } )
        }, false);

        indexSubmitButton.addEventListener('click', async() => {
            const indexInput = document.getElementById("wanted index " + data.shortcutData.shortcut)
            const parser = new UrlParser();
            const site = await parser.getSiteUrlIdentifierInPopup();
            const indexChanger = new ChangeShortcutIndex(site);
            indexChanger.onClickAction( { shortcut: data.shortcutData.shortcut, ind: indexInput.value } )
        }, false);


        improveButton.addEventListener('click', async() => {
            let shortcutImprover = new ImproveShortcut();
            shortcutImprover.onClickAction( {shortcut: data.shortcutData.shortcut} )
        }, false);

        updateKeySequenceButton.addEventListener('click', async() => {
            updateSequence.onClickAction( { shortcut : data.shortcutData.shortcut } )
        }, false);

        return newNode;
    }
}
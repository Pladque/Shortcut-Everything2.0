import { featuresFactory } from "../../_popup/Features/FeaturesFactory";
import { DeleteShortcut } from "../../_popup/Features/Generated/DeleteShortcut";
import { EnableDisableShortcut } from "../../_popup/Features/Generated/EnableDisableShortcut";
import { ConsiderShortcutInnerText } from "../Features/Generated/ConsiderShortcutInnerText";
import { UpdateShortcutInnerText} from "../Features/Generated/UpdateShortcutInnerText";
import { UpdateShortcutSkippableAttributes } from "../Features/Generated/UpdateShortcutSkippableAttributes";
const {UpdateShortcutDescription} = require("../../_popup/Features/Generated/UpdateShortcutDescription")


export class ShortcutBackendViewSingleSectionCreator{
    createShortcutPanelRow(data){
        var newNode = document.createElement('p');
        newNode.setAttribute("value", data.shortcutData.shortcut)
        newNode.setAttribute("style", "border: 3px solid gray;  padding: 5px; ")
        newNode.setAttribute("class", "shortcut")

        let enableButton = document.createElement("BUTTON");

        if(data.shortcutData.options.enabled){
            enableButton.innerText = "off"
        }else{
            enableButton.innerText = "on"
        }

        enableButton.setAttribute("shortcut-enabled", data.shortcutData.options.enabled)
        enableButton.setAttribute("class", "enable button");
        enableButton.setAttribute("value", data.shortcutData.shortcut)

        var name = document.createTextNode(data.shortcutData.shortcut)

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


        let onOffInnerTextButton = document.createElement("BUTTON");
        onOffInnerTextButton.innerText = "on/off inner text"
        onOffInnerTextButton.setAttribute("class", "on/off inner text button");
        onOffInnerTextButton.setAttribute("value", data.shortcutData.shortcut);

        if(data.shortcutData.attributes.others.checkInnerText){
        onOffInnerTextButton.setAttribute("state", true);
        }else{
        onOffInnerTextButton.setAttribute("state", false);
        }

        let innerTextInputField = document.createElement("INPUT");
        innerTextInputField.setAttribute("value", data.shortcutData.attributes.others.innerText || "");
        innerTextInputField.setAttribute("type", "text");
        innerTextInputField.setAttribute("id", "innerText "+ data.shortcutData.shortcut);

        let updateInnerTextButton = document.createElement("BUTTON");
        updateInnerTextButton.innerText = "update inner text"
        updateInnerTextButton.setAttribute("class", "update inner text");
        updateInnerTextButton.setAttribute("value", data.shortcutData.shortcut);

        let amountOfSkipableAttribiutes = document.createElement("INPUT");
        amountOfSkipableAttribiutes.setAttribute("value", data.shortcutData.options.maxAmonutOfAttribiutesToSkip || "0");
        amountOfSkipableAttribiutes.setAttribute("type", "text");
        amountOfSkipableAttribiutes.setAttribute("id", "max skippable attribiutes "+ data.shortcutData.shortcut);

        let updateSkipableAttribiutesAmountButton = document.createElement("BUTTON");
        updateSkipableAttribiutesAmountButton.innerText = "update skippable attrs amount"
        updateSkipableAttribiutesAmountButton.setAttribute("class", "update skippable attrs amount");
        updateSkipableAttribiutesAmountButton.setAttribute("value", data.shortcutData.shortcut);

        // let setHasToBeVisibleButton = document.createElement("BUTTON");
        // setHasToBeVisibleButton.innerText = "has to be visible"
        // setHasToBeVisibleButton.setAttribute("class", "has to be visible button");
        // setHasToBeVisibleButton.setAttribute("value", data.shortcutData.options.hasToBeVisible);
        
        newNode.appendChild(enableButton)
        newNode.appendChild(name)
        newNode.appendChild(desbInputField)
        newNode.appendChild(descSubmitButton)
        newNode.appendChild(deleteButton)
        newNode.appendChild(onOffInnerTextButton)
        newNode.appendChild(innerTextInputField)
        newNode.appendChild(updateInnerTextButton)
        newNode.appendChild(amountOfSkipableAttribiutes)
        newNode.appendChild(updateSkipableAttribiutesAmountButton)
        // newNode.appendChild(setHasToBeVisibleButton)

        enableButton.addEventListener('click', function() {
            const currState = enableButton.getAttribute("shortcut-enabled");

            let enableDisableShortcut = featuresFactory.createSingleShortcutEnablerFeature()
            enableDisableShortcut.setSite(data.site);

            if(currState === "true"){
                enableDisableShortcut.onClickAction({
                    shortcut: data.shortcutData.shortcut,
                    newState: false
                })
                enableButton.setAttribute("shortcut-enabled", "false");
                enableButton.innerText = "on"
            }else{
                enableDisableShortcut.onClickAction({
                    shortcut: data.shortcutData.shortcut,
                    newState: true
                })
                enableButton.setAttribute("shortcut-enabled", "true");
                enableButton.innerText = "off"
            }
        }, false);

        deleteButton.addEventListener('click', async () => {
            let shortcutEraser = featuresFactory.createDeleteShortcutFeature();
            shortcutEraser.setSite(data.site);

            shortcutEraser.onClickAction( {shortcut: data.shortcutData.shortcut})

        }, false);
        
            updateInnerTextButton.addEventListener('click', function() {
                
                const innerTextUpdater  = new UpdateShortcutInnerText(data.site)
                const newText =document.getElementById("innerText "+ data.shortcutData.shortcut).value
                innerTextUpdater.onClickAction({
                    shortcut: data.shortcutData.shortcut,
                    newText: newText
                })

            }, false);


        descSubmitButton.addEventListener('click', function() {
            const descInputField = document.getElementById("shortcut desc " + data.shortcutData.shortcut)
            const descUpdater = featuresFactory.createUpdateShortcutDescriptionFeature();
            descUpdater.setSite(data.site);
            descUpdater.onClickAction( {shortcut: data.shortcutData.shortcut, desc: descInputField.value } )
        }, false);

        onOffInnerTextButton.addEventListener('click', function() {
            const considerInnerText = new ConsiderShortcutInnerText(data.site);
            
            if(onOffInnerTextButton.getAttribute("state") === "true" ){
                considerInnerText.onClickAction( {
                    shortcut: data.shortcutData.shortcut,
                    newState: false
                })
                onOffInnerTextButton.setAttribute("state", false);
            }else{
                considerInnerText.onClickAction( {
                    shortcut: data.shortcutData.shortcut,
                    newState: true
                })
                onOffInnerTextButton.setAttribute("state", true);
            }


        }, false);

            updateSkipableAttribiutesAmountButton.addEventListener('click', function() {
                const amountInput = document.getElementById("max skippable attribiutes "+ data.shortcutData.shortcut)
                const skippableAttributesUpdater = new UpdateShortcutSkippableAttributes(data.site);
                skippableAttributesUpdater.onClickAction({
                    shortcut: data.shortcutData.shortcut, 
                    newAmount: amountInput.value,
                })

            }, false);
            
        //     setHasToBeVisibleButton.addEventListener('click', function() {

        //     if(setHasToBeVisibleButton.getAttribute("value") === "true"){
        //         setHasToBeVisibleButton.innerText = "has to be visible";
        //         setHasToBeVisibleButton.setAttribute("value", "false"); 
        //         onclick_changehasToBevisible( data.shortcutData.shortcut,false,data.site)
        //     }else{
        //         setHasToBeVisibleButton.innerText = "does not have to be visible";
        //         setHasToBeVisibleButton.setAttribute("value", "true"); 
        //         onclick_changehasToBevisible( data.shortcutData.shortcut,true,data.site)
        //     }

        // }, false);


        return newNode;
    }
}
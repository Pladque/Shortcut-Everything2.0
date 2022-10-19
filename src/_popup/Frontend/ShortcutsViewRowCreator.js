

export class ShortcutsViewRowCreator{


    getRow(shortcutData){
        var newNode = document.createElement('div');
        // newNode.setAttribute("style", "border: 2px solid #ffffff; border-radius: 25px; padding: 20px;")
        // newNode.setAttribute("value", shortcutData.shortcut)
        newNode.setAttribute("class", "content")

        let enableButton = document.createElement("BUTTON");

        if(shortcutData.options.enabled){
        enableButton.innerText = "off"
        }else{
        enableButton.innerText = "on"
        }
        enableButton.setAttribute("shortcut-enabled", shortcutData.options.enabled)
        enableButton.setAttribute("class", "enable button");
        enableButton.setAttribute("value", shortcutData.shortcut)

        // var name = document.createTextNode(shortcutData.shortcut)

        var desbInputField = document.createElement("INPUT");
        desbInputField.setAttribute("type", "text");
        desbInputField.setAttribute("value", shortcutData.desc);
        desbInputField.setAttribute("style", "width: 40%;");
        desbInputField.setAttribute("id", "shortcut desc " + shortcutData.shortcut);
        
        let descSubmitButton = document.createElement("BUTTON");
        descSubmitButton.innerText = "change desc"
        descSubmitButton.setAttribute("class", "change desc button");
        descSubmitButton.setAttribute("value", shortcutData.shortcut)

        let deleteButton = document.createElement("BUTTON");
        deleteButton.innerText = "delete"
        deleteButton.setAttribute("class", "delete button");
        deleteButton.setAttribute("value", shortcutData.shortcut);


        let indexInputField = document.createElement("INPUT");
        indexInputField.innerText = "0"
        indexInputField.setAttribute("type", "text");
        indexInputField.setAttribute("id", "wanted index "+ shortcutData.shortcut);

        if( shortcutData.options.elementIndex){
        indexInputField.setAttribute("value", shortcutData.options.elementIndex)    
        }else{
        indexInputField.setAttribute("value", 0)    
        }


        let indexSubmitButton = document.createElement("BUTTON");
        indexSubmitButton.innerText = "change index"
        indexSubmitButton.setAttribute("class", "change index button button");
        indexSubmitButton.setAttribute("value", shortcutData.shortcut);

        let improveButton = document.createElement("BUTTON");
        improveButton.innerText = "improve"
        improveButton.setAttribute("class", "improve shortcut button");
        improveButton.setAttribute("value", shortcutData.shortcut);

        let updateKeySequenceButton = document.createElement("BUTTON");
        updateKeySequenceButton.innerText = "update shortcut"
        updateKeySequenceButton.setAttribute("class", "update shortcut");
        updateKeySequenceButton.setAttribute("value", shortcutData.shortcut);

        newNode.appendChild(enableButton)
        // newNode.appendChild(name)
        newNode.appendChild(desbInputField)
        newNode.appendChild(descSubmitButton)
        newNode.appendChild(deleteButton)
        newNode.appendChild(indexInputField)
        newNode.appendChild(indexSubmitButton)
        newNode.appendChild(improveButton)
        newNode.appendChild(updateKeySequenceButton)

        enableButton.addEventListener('click', function() {
            const currState = enableButton.getAttribute("shortcut-enabled");
            onclick_enableDisableShortcut( shortcutData.shortcut, currState);

            if(currState === "true"){
            enableButton.setAttribute("shortcut-enabled", "false");
            enableButton.innerText = "on"
            }else{
            enableButton.setAttribute("shortcut-enabled", "true");
            enableButton.innerText = "off"
            }
        }, false);

        deleteButton.addEventListener('click', function() {
            onclick_deleteShortcut( shortcutData.shortcut)
        }, false);

        descSubmitButton.addEventListener('click', function() {
        const descInputField = document.getElementById("shortcut desc " + shortcutData.shortcut)
        onclick_updateDesc( shortcutData.shortcut, descInputField.value)
        }, false);

        indexSubmitButton.addEventListener('click', function() {
        const indexInput = document.getElementById("wanted index " + shortcutData.shortcut)
        onclick_changeIndex( shortcutData.shortcut, indexInput.value)
        }, false);


        improveButton.addEventListener('click', function() {
        onclick_newDoubleShortcut( shortcutData.shortcut)
        }, false);

        updateKeySequenceButton.addEventListener('click', function() {
        onclick_updatekeySequence( shortcutData.shortcut)
        }, false);

        return newNode;
    }
}
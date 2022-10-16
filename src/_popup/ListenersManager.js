const {copyPackageClickAction} = require("./OnClickFunctions/CopyPackage")
const {createPackageClickAction} = require("./OnClickFunctions/CreatePackage")
const {newShortcutOnClickAction} = require("./OnClickFunctions/NewShortcut")
const {onOffLocalOnClickAction} = require("./OnClickFunctions/OnOffLocal")
const {packageInputOnClickAction} = require("./OnClickFunctions/PackageInput")
const {resetStorageOnClickAction} = require("./OnClickFunctions/ResetStorage")
const {settingsOnClickAction} = require("./OnClickFunctions/Settings")
const {showShortcutsRawOnClickAction} = require("./OnClickFunctions/ShowShortcutsRaw")
const {darkModeOnClickAction} = require("./OnClickFunctions/DarkMode")

export class ListenersManager{


    constructor(){
    }
   
    listen = function() {
        document.addEventListener('DOMContentLoaded', 
        function() {
            document.getElementById('copy package').addEventListener('click', copyPackageClickAction, false)
            document.getElementById('create package button').addEventListener('click', createPackageClickAction, false)
            document.getElementById('new_shortcut').addEventListener('click', newShortcutOnClickAction, false)
            document.getElementById('on/off button local').addEventListener('click', onOffLocalOnClickAction, false)
            document.getElementById('settings button').addEventListener('click', settingsOnClickAction, false)
            document.getElementById('reset storage').addEventListener('click', resetStorageOnClickAction, false)
            document.getElementById('package input submit button').addEventListener('click', packageInputOnClickAction, false)
            document.getElementById('dark-mode switch').addEventListener('change', darkModeOnClickAction, false)
            document.getElementById('show shortcuts raw').addEventListener('click', showShortcutsRawOnClickAction, false)
        }, false)
    }
}


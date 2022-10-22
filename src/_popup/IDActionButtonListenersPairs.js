const {PackageCopyButtonAction} = require("./OnClickFunctions/CopyPackage")
const {PackageCreatorButtonAction} = require("./OnClickFunctions/CreatePackage")
const {NewShortcutButtonAction} = require("./OnClickFunctions/NewShortcut")
const {ExtensionEnablerButtonAction} = require("./OnClickFunctions/OnOffLocal")
const {PackageLoaderButtonAction} = require("./OnClickFunctions/PackageInput")
const {SettingOpenerButtonAction} = require("./OnClickFunctions/Settings")
const {StorageReseterButtonAction} = require("./OnClickFunctions/ResetStorage")
const {RawShortcutsPresenterButtonAction} = require("./OnClickFunctions/ShowShortcutsRaw")
const {DarkModeButtonAction} = require("./OnClickFunctions/DarkMode")

// only for buttons that are not generated 
export const idActionsListenersPairs = [
    {
        elementId: "copy package",
        actionObject: new PackageCopyButtonAction(),
    },
    {
        elementId: "create package button",
        actionObject: new PackageCreatorButtonAction(),
    },
    {
        elementId: "new_shortcut",
        actionObject: new NewShortcutButtonAction(),
    },
    {
        elementId: "on/off button local",
        actionObject: new ExtensionEnablerButtonAction(),
    },
    {
        elementId: "settings button",
        actionObject: new SettingOpenerButtonAction(),
    },
    {
        elementId: "reset storage",
        actionObject: new StorageReseterButtonAction(),
    },
    {
        elementId: "package input submit button",
        actionObject: new PackageLoaderButtonAction(),
    },
    {
        elementId: "dark-mode switch",
        actionObject: new DarkModeButtonAction(),
    },
    {
        elementId: "show shortcuts raw",
        actionObject: new RawShortcutsPresenterButtonAction(),
    },



]

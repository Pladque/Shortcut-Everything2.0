// const {PackageCopyButtonAction} = require("./Features/static/CopyPackage")
// const {PackageCreatorButtonAction} = require("./Features/static/CreatePackage")
// const {NewShortcutButtonAction} = require("./Features/static/NewShortcut")
// const {ExtensionEnablerButtonAction} = require("./Features/static/OnOffLocal")
// const {PackageLoaderButtonAction} = require("./Features/static/PackageInput")
// const {SettingOpenerButtonAction} = require("./Features/static/Settings")
// const {StorageReseterButtonAction} = require("./Features/static/ResetStorage")
// const {RawShortcutsPresenterButtonAction} = require("./Features/static/ShowShortcutsRaw")
// const {DarkModeButtonAction} = require("./Features/static/DarkMode")

const {featuresFactory} = require("../OnClickFeatures/FeaturesFactory")

// only for buttons that are not generated 
export const idActionsListenersPairs = [
    {
        elementId: "copy package",
        actionObject: featuresFactory.createCopyPackageFeature()
    },
    {
        elementId: "create package button",
        actionObject:  featuresFactory.createCreatePackageFeature()
    },
    {
        elementId: "new_shortcut",
        actionObject:  featuresFactory.createNewShortcutFeature()
    },
    {
        elementId: "on/off button local",
        actionObject:  featuresFactory.createEnablerFeature()
    },
    {
        elementId: "settings button",
        actionObject:  featuresFactory.createSettingFeature()
    },
    {
        elementId: "reset storage",
        actionObject:  featuresFactory.createResetStorageFeature(),
    },
    {
        elementId: "package input submit button",
        actionObject:  featuresFactory.createPackageInputFeature()
    },
    {
        elementId: "dark-mode switch",
        actionObject: featuresFactory.createDarkModeFeature()
    },
    {
        elementId: "show shortcuts raw",
        actionObject: featuresFactory.createShowShortcutsRawFeature(),
    },



]

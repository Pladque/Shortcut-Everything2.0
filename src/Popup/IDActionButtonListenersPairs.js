const {featuresFactory} = require("../OnClickFeatures/FeaturesFactory")

// @DESC: Only for static buttons
// elementId - Id of static page button (or other element)
// actionObject - object that follows schema definded in src/Docs/FeatureModel.cs
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

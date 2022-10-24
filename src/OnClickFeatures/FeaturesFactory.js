import { chainActionsSets } from "../common/ChainActionsSets";
import { ConsiderShortcutInnerText } from "./Generated/InSettings/ConsiderShortcutInnerText";
import { UpdateShortcutInnerText } from "./Generated/InSettings/UpdateShortcutInnerText";
import { UpdateShortcutSkippableAttributes } from "./Generated/InSettings/UpdateShortcutSkippableAttributes";

const {PackageCopyButtonAction} = require("./static/CopyPackage")
const {PackageCreatorButtonAction} = require("./static/CreatePackage")
const {DarkModeButtonAction} = require("./static/DarkMode")
const {NewShortcutButtonAction} = require("./static/NewShortcut")
const {ExtensionEnablerButtonAction} = require("./static/OnOffLocal")
const {PackageLoaderButtonAction} = require("./static/PackageInput")
const {StorageReseterButtonAction} = require("./static/ResetStorage")
const {SettingOpenerButtonAction} = require("./static/Settings")
const {RawShortcutsPresenterButtonAction} = require("./static/ShowShortcutsRaw")

const {ChangeShortcutIndex} = require("./Generated/InPopUp/ChangeShortcutIndex")
const {DeleteShortcut} = require("./Generated/InPopUp/DeleteShortcut")
const {EnableDisableShortcut} = require("./Generated/InPopUp/EnableDisableShortcut")
const {ImproveShortcut} = require("./Generated/InPopUp/ImproveShortcut")
const {UpdateShortcutDescription} = require("./Generated/InPopUp/UpdateShortcutDescription")

const {updateSequence} = require("./Generated/InPopUp/UpdateShortcutSequence")


// #2 Fabryka
class FeaturesFactory{

    constructor(){
        this.defaultHandler = chainActionsSets.defaultSet;
        this.onlyMessageHandler = chainActionsSets.onlyMessageHandler;
        this.emptyHandler = chainActionsSets.emptyHandler;
    }

    createShowShortcutsRawFeature(){
        return new RawShortcutsPresenterButtonAction(this.emptyHandler);
    }

    createSettingFeature(){
        return new SettingOpenerButtonAction(this.emptyHandler);
    }

    createResetStorageFeature(){
        return new StorageReseterButtonAction(this.defaultHandler);
    }

    createPackageInputFeature(){
        return new PackageLoaderButtonAction(this.defaultHandler);
    }

    createEnablerFeature(){
        return new ExtensionEnablerButtonAction(this.defaultHandler);
    }

    createNewShortcutFeature(){
        return new NewShortcutButtonAction(this.emptyHandler);
    }

    createDarkModeFeature(){
        return new DarkModeButtonAction(this.onlyMessageHandler);
    }

    createCreatePackageFeature(){
        return new PackageCreatorButtonAction(this.emptyHandler);
    }

    createCopyPackageFeature(){
        return new PackageCopyButtonAction(this.emptyHandler);
    }

    createUpdateShortcutSequenceFeature(){
        updateSequence.setHandler(this.defaultHandler)
        return updateSequence;
    }

    createUpdateShortcutDescriptionFeature(){
        return new UpdateShortcutDescription(this.onlyMessageHandler);
    }

    createImproveShortcutFeature(){
        return new ImproveShortcut(this.emptyHandler);
    }

    createSingleShortcutEnablerFeature(){
        return new EnableDisableShortcut(this.defaultHandler);
    }

    createDeleteShortcutFeature(){
        return new DeleteShortcut(this.defaultHandler);
    }

    createChangeShortcutIndexFeature(){
        return new ChangeShortcutIndex(this.defaultHandler);
    }


    //  ------  BACKEND FEATURES    -----   //

    createUpdateShortcutInnerTextFeature(){
        return new UpdateShortcutInnerText(this.onlyMessageHandler);
    }

    createConsiderShortcutInnerTextFeature(){
        return new ConsiderShortcutInnerText(this.onlyMessageHandler);
    }

    createUpdateShortcutSkippableAttrsFeature(){
        return new UpdateShortcutSkippableAttributes(this.onlyMessageHandler);
    }
}


const featuresFactoryInstance = new FeaturesFactory();

export { featuresFactoryInstance as featuresFactory};
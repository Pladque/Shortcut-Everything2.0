import { HandleManager } from "../common/HandlerManger";
import { MessagePresenter } from "../common/MessagePresenter";
import { messageTransporter } from "../common/PopupAndContentCommunication/MessageTransporter";
import { UPDATE_CACHE } from "../common/PopupAndContentCommunication/Orders";
import { ConsiderShortcutInnerText } from "../_background/Features/Generated/ConsiderShortcutInnerText";
import { UpdateShortcutInnerText } from "../_background/Features/Generated/UpdateShortcutInnerText";
import { UpdateShortcutSkippableAttributes } from "../_background/Features/Generated/UpdateShortcutSkippableAttributes";

const {PackageCopyButtonAction} = require("./static/CopyPackage")
const {PackageCreatorButtonAction} = require("./static/CreatePackage")
const {DarkModeButtonAction} = require("./static/DarkMode")
const {NewShortcutButtonAction} = require("./static/NewShortcut")
const {ExtensionEnablerButtonAction} = require("./static/OnOffLocal")
const {PackageLoaderButtonAction} = require("./static/PackageInput")
const {StorageReseterButtonAction} = require("./static/ResetStorage")
const {SettingOpenerButtonAction} = require("./static/Settings")
const {RawShortcutsPresenterButtonAction} = require("./static/ShowShortcutsRaw")

const {ChangeShortcutIndex} = require("./Generated/ChangeShortcutIndex")
const {DeleteShortcut} = require("./Generated/DeleteShortcut")
const {EnableDisableShortcut} = require("./Generated/EnableDisableShortcut")
const {ImproveShortcut} = require("./Generated/ImproveShortcut")
const {UpdateShortcutDescription} = require("./Generated/UpdateShortcutDescription")

const {updateSequence} = require("./Generated/UpdateShortcutSequence")

// #2 Fabryka
class FeaturesFactory{

    // @TODO jakos lepiej te handlery tworzyc
    constructor(){
        this.defaultHandler = new HandleManager();
        this.defaultHandler.use((data) => {
            messageTransporter.sendMessage(UPDATE_CACHE);
           return data;
        });


        this.defaultHandler.use((data) => {
            const messagePresenter = new MessagePresenter();
            messagePresenter.showMessage("succefully updated")
            return data;
        });

        this.defaultHandler.use(async (data) => {
            await new Promise(r => setTimeout(r, 5000));
            const messagePresenter = new MessagePresenter();
            messagePresenter.clear()
            return data;
        });
        
        this.onlyMessageHandler = new HandleManager();
        this.onlyMessageHandler.use( (data) => {
            const messagePresenter = new MessagePresenter();
            messagePresenter.showMessage("succefully updated")
            return data;
        });

        this.onlyMessageHandler.use(async (data) => {
            await new Promise(r => setTimeout(r, 5000));
            const messagePresenter = new MessagePresenter();
            messagePresenter.clear()
            return data;
        });
        
        this.nullHandler = new HandleManager();
        this.nullHandler.use( (data) => {
            return data
        });
    }

    createShowShortcutsRawFeature(){
        return new RawShortcutsPresenterButtonAction( this.nullHandler);
    }

    createSettingFeature(){
        return new SettingOpenerButtonAction(this.nullHandler);
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
        return new NewShortcutButtonAction(this.nullHandler);
    }

    createDarkModeFeature(){
        return new DarkModeButtonAction(this.onlyMessageHandler);
    }

    createCreatePackageFeature(){
        return new PackageCreatorButtonAction(this.nullHandler);
    }

    createCopyPackageFeature(){
        return new PackageCopyButtonAction(this.nullHandler);
    }

    createUpdateShortcutSequenceFeature(){
        return updateSequence;
    }

    createUpdateShortcutDescriptionFeature(){
        return new UpdateShortcutDescription(this.onlyMessageHandler);
    }

    createImproveShortcutFeature(){
        return new ImproveShortcut(this.nullHandler);
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
const {GENERAL_SETTINGS_STORAGE_NAME} = require("./PopupAndContentCommunication/Orders")

// #1 Singleton
class DarkModeManager{

    constructor(){
        this.darkmodeEnabled = true;
        this.storage = undefined;
    }

    setStorage(storage){
        this.storage = storage;
    }


    async readDarkModeSettings(){
        let darkmodeStatus = undefined;
        try {
            darkmodeStatus = await  this.storage.readLocalStorage(GENERAL_SETTINGS_STORAGE_NAME);
        } catch (error) {
            
        }

        if(darkmodeStatus === undefined){
            let darkmodeNew = "{\"darkmode\": true}";
            await this.storage.saveToLocalStorage(GENERAL_SETTINGS_STORAGE_NAME,darkmodeNew );
            darkmodeStatus = true;
        }
    
        
        return JSON.parse(darkmodeStatus).darkmode;
    }

    async manageDarkMode(darkmodeEnabled){
        document.getElementById('dark-mode switch').checked = darkmodeEnabled;
        this.darkmodeEnabled = darkmodeEnabled;
        if(darkmodeEnabled){
            this._darkMode();
        }
        else{
            this._lightMode();
        }

        let darkmodeStatus = undefined;
        try {
            darkmodeStatus = await this.storage.readLocalStorage(GENERAL_SETTINGS_STORAGE_NAME);
        } catch (error) {
            
        }

        let darkmodeStatusJSON =  JSON.parse(darkmodeStatus);
        darkmodeStatusJSON.darkmode = darkmodeEnabled;
        
        let darkmodeStatusString = JSON.stringify(darkmodeStatusJSON);
        await this.storage.saveToLocalStorage(GENERAL_SETTINGS_STORAGE_NAME,darkmodeStatusString );

    }

    async switchMode(){
        await this.manageDarkMode(!this.darkmodeEnabled)
    }

    _darkMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "dark-mode";
    }
    _lightMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "light-mode";
    }
}

const darkModeManagerInstance = new DarkModeManager();

export { darkModeManagerInstance as darkModeManager};
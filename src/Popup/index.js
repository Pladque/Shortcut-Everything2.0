const {ListenersManager} = require("../common/ListenersManager")
const { Initiator } = require("../common/Initiator");
const {storage} = require("../common/Storage")
const {KeyboardReader} = require("../common/Keyboard/KeyboardReader")
const {onKeyDownAction} = require("../common/Keyboard/KeyboardAction")
const {ShortcutsViewBuilder} = require("./Frontend/ShortcutsViewBuilder")
const {ShortcutsViewRowCreator} = require("./Frontend/ShortcutsViewRowCreator")
const {TitleCreator} = require("./Frontend/TitleCreator");
const { UrlParser } = require("../common/UrlParser");
const {darkModeManager} = require("../common/DarkModeManager")
const {EventsAdder} = require("./Frontend/EventsAdder")
const {ActionsManager} = require("./Frontend/ActionManager")
const {idActionsListenersPairs} = require("./IDActionButtonListenersPairs");

// Init frontend
const eventsAdder = new EventsAdder(new ActionsManager());
const titleCreator = new TitleCreator();
const shortcutsViewRowCreator = new ShortcutsViewRowCreator();
const parser = new UrlParser();
const shortcutsViewBuilder = new ShortcutsViewBuilder(titleCreator, shortcutsViewRowCreator, storage, parser);

darkModeManager.setStorage(storage);

const initiator = new Initiator(shortcutsViewBuilder, darkModeManager, eventsAdder);
const listenersManager = new ListenersManager();
const keyboardReader = new KeyboardReader(onKeyDownAction)

// // INIT actions
initiator.init();

// Adding Listeners
listenersManager.listen(idActionsListenersPairs);
keyboardReader.listen();
const {ListenersManager} = require("./ListenersManager")
const { Initiator } = require("./Initiator");
const {storage} = require("../common/Storage")
const {KeyboardReader} = require("../common/KeyboardReader")
const {onKeyDownAction} = require("../common/KeyboardAction")
const {ShortcutsViewBuilder} = require("./Frontend/ShortcutsViewBuilder")
const {ShortcutsViewRowCreator} = require("./Frontend/ShortcutsViewRowCreator")
const {TitleCreator} = require("./Frontend/TitleCreator");
const { UrlParser } = require("../common/UrlParser");

// Init frontend
const titleCreator = new TitleCreator();
const shortcutsViewRowCreator = new ShortcutsViewRowCreator();
const parser = new UrlParser();
const shortcutsViewBuilder = new ShortcutsViewBuilder(titleCreator, shortcutsViewRowCreator, storage, parser);

const initiator = new Initiator(shortcutsViewBuilder);
const listenersManager = new ListenersManager();
const keyboardReader = new KeyboardReader(onKeyDownAction)



// // INIT actions
initiator.init();

// Adding Listeners
listenersManager.listen();
keyboardReader.listen();



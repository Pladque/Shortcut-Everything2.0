const {darkModeManager} = require("../common/DarkModeManager")
const {Initiator} = require("../common/Initiator")
const {storage} = require("../common/Storage")
const {ShortcutSectionCreator} = require("./Frontend/ShortcutSectionCreator")
const {ListenersManager} = require("../common/ListenersManager")
const {idActionsListenersPairs} = require("./IDActionButtonListenersPairs");
const { ShortcutBackendViewSingleSectionCreator } = require("./Frontend/ShortcutsBackendViewSingleSectionCreator");
const { BackendTitleCreator } = require("./Frontend/BackendTitleCreator");

// Init frontend
darkModeManager.setStorage(storage)
const shortcutBackendViewSingleSectionCreator = new ShortcutBackendViewSingleSectionCreator();
const titleCreator = new BackendTitleCreator()
const shortcutSectionCreator = new ShortcutSectionCreator(shortcutBackendViewSingleSectionCreator,titleCreator,  storage);

// create Initiators
const initiator = new Initiator(shortcutSectionCreator, darkModeManager, {addActionTo: (x, y) => {}})

// Init Page
initiator.init();

// Create & Start to listen
const listenersManager = new ListenersManager();
listenersManager.listen(idActionsListenersPairs);
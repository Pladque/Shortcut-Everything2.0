const {ListenersManager} = require("./ListenersManager")
const { Initiator } = require("./Initiator");
const {storage} = require("../common/Storage")
const {KeyboardReader} = require("../common/KeyboardReader")
const {onKeyDownAction} = require("../common/KeyboardAction")

const initiator = new Initiator();
const listenersManager = new ListenersManager();
const keyboardReader = new KeyboardReader(onKeyDownAction)



// // INIT actions
initiator.init();

// Adding Listeners
listenersManager.listen();
keyboardReader.listen();



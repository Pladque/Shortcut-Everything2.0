const {darkModeManager} = require("../_popup/Frontend/DarkModeManager")
const {Initiator} = require("../_popup/Initiator")
const {storage} = require("../common/Storage")
const {ShortcutSectionCreator} = require("./Frontend/ShortcutSectionCreator")

darkModeManager.setStorage(storage)
let shortcutSectionCreator = new ShortcutSectionCreator();

const initiator = new Initiator(shortcutSectionCreator, darkModeManager, {addActionTo: (x, y) => {}})

initiator.init();

// @TODO - dodaj listenery -- nie dziala np tyryb ciemny na settings


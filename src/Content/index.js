const {MessageMatcher} = require("./MessageMatcher");
const {messageResponse} = require( "./OnCallResponses");
const {shortcutsListener} = require("./ShortcutsListener")
const {Initializator} = require("./Initializator")
const {ShortcutExecutor} = require("../common/ShortcutExecutors/ShortcutExecutor")
const {SearchAlghorythm} = require("../common/ShortcutExecutors/SearchAlghorythm")
const {CallListener} = require("./CallListener")

const searchAlghorythm = new SearchAlghorythm();
const shortcutExecutor = new ShortcutExecutor(searchAlghorythm, {});

shortcutsListener.start();

const initializator = new Initializator(shortcutExecutor);
initializator.init();

const messageMatcher = new MessageMatcher();
const callListener = new CallListener(messageMatcher, messageResponse)

callListener.liten();
    

const {MessageMatcher} = require("./MessageMatcher");
const {messageResponse} = require( "./OnCallResponses");
const {shortcutsListener} = require("./ShortcutsListener")
const {Initializator} = require("./Initializator")
const {CallListener} = require("./CallListener");
const { createShortcutExecutor } = require("../common/ShortcutExecutors/CreateShortcutExecutor");

// Create shortcut Executor
const shortcutExecutor = createShortcutExecutor()

shortcutsListener.start();

// Init key reading actions
const initializator = new Initializator(shortcutExecutor);
initializator.init();

// Init Calls LIsteners
const messageMatcher = new MessageMatcher();
const callListener = new CallListener(messageMatcher, messageResponse)

// Start to listen
callListener.liten();

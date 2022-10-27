const {MessageMatcher} = require("./MessageMatcher");
const {messageResponse} = require( "./OnCallResponses");
const {shortcutsListener} = require("./ShortcutsListener")
const {Initializator} = require("./Initializator")
const {CallListener} = require("./CallListener");
const { createShortcutExecutor } = require("../common/ShortcutExecutors/CreateShortcutExecutor");

const shortcutExecutor = createShortcutExecutor()

shortcutsListener.start();

const initializator = new Initializator(shortcutExecutor);
initializator.init();

const messageMatcher = new MessageMatcher();
const callListener = new CallListener(messageMatcher, messageResponse)

callListener.liten();
    

// Zaimplementowane wzorce:      #1 Singleton      #2 Fabryka      #3 Dekorator        #4 Stan     #5 Strategia

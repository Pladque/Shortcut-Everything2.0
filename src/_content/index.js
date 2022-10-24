const {MessageMatcher} = require("./MessageMatcher");
const {messageResponse} = require( "./OnCallResponses");
const {shortcutsListener} = require("./ShortcutsListener")
const {Initializator} = require("./Initializator")
const {ShortcutExecutor} = require("../ShortcutExecutors/ShortcutExecutor")
const {SearchAlghorythm} = require("..//ShortcutExecutors/SearchAlghorythm")
const {CallListener} = require("./CallListener")

const searchAlghorythm = new SearchAlghorythm();
const shortcutExecutor = new ShortcutExecutor(searchAlghorythm, {});

shortcutsListener.start();

const initializator = new Initializator(shortcutExecutor);
initializator.init();

const messageMatcher = new MessageMatcher();
const callListener = new CallListener(messageMatcher, messageResponse)

callListener.liten();
    

//      Kolejne kroki to:   
//                          Sparametryzowac tak duzo jak sie da (zeby storage, parser i wgl wszystko bylo przekazywane parametrem, a nie na hama importowane)
//                          mby rozdzielic frontend i backend bardziej (zeby inity byly np osobne)
//                          wyoknac wszystkie @TODO
//                          ujednolicic nazewnictwo (builder/creator? itp)
//                          Dorobic Buildera do buttonow


// Wzorce jakie mam (bede miec) - #1 Singleton      #2 Fabryka      #3 chain of responsibility      #4 Stan (inputStateManager chyba??)
//                                #5 Mediator?(mysl gdzie)      #6 obserwator? (mysl gdzie)         #7 Builder (do buttonów we froncie)
//                                #8 Dekorator


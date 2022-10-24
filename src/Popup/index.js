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


// //////////////////
// function log()
 
// // Decorator function
// {
//   return function decorator()
//     {
//     console.log(123)
//     return (...args) =>
//         {
//       console.log(`HEY HEY HEY`);
//       return {};
//     };
//   }
// }
 
// // Decorators
// @log 
// class gfg
// {
//   constructor(name, category) {}
// }
 
// const e = new gfg('geek', 'code');
 
// // Arguments for Demo: args
// console.error(e);

// addSitePropertyDecorator

// class temp{

//     @addSitePropertyDecorator
//     add(a,b){
//         return a + b
//     }
// }

// const t = temp();
// console.error(t.add(5 ,3));



    
  
// class geek {
//   @addSitePropertyDecorator
//   add(a) {
//     console.error("Inside add: " + JSON.stringify(a))
//     return a;
//   }
// }
  
// var e = new geek();
// console.error(JSON.stringify(e.add({hey:123})));
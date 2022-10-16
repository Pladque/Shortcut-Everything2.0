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




// class test{

//     method1(){
//         this.method2();
//     }

//     method2(){
//         alert("Hello from method 2")
//     }
// }

// class abovetest{
//     constructor(test){
//         this.test = test;
//     }

//     method0(){
//         this.test.method1();
//     }
// }

// const t = new test();
// const aboveTest = new abovetest(t);


// aboveTest.method0();



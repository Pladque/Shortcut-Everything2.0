import * as Order from "../common/PopupAndContentCommunication/Orders"
const {NewShortcutFeature} = require("../features/newShortcutFeature/newShortcut")
const {ShowShortcutsRaw} = require("../features/ShowShortcutsRaw")

export const messageResponse= [
    { 
        msg: Order.CREATE_NEW_SHOWRTCUT_MSG,
        actionObject: new NewShortcutFeature(),
    }, 

    { 
        msg: Order.GET_SHORTCUTS,
        actionObject: new ShowShortcutsRaw(),
    }, 
]


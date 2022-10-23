import * as Order from "../common/PopupAndContentCommunication/Orders"
const {NewShortcutFeature} = require("../features/newShortcutFeature/newShortcut")
const {ImproveShortcutFeature} = require("../features/improveShortcutFeature/ImproveShortcut")
const { ExtensionEnableFeature } = require("../features/ExtensionEnableFeature/ExtensionEnableFeature")

export const messageResponse= [
    { 
        msg: Order.CREATE_NEW_SHOWRTCUT_MSG,
        actionObject: new NewShortcutFeature(),
    }, 
    {
        msg: Order.CREATE_NEW_DOUBLE_SHOWRTCUT_MSG,
        actionObject: new ImproveShortcutFeature(),
    }, 
    {
        msg: Order.ON_OFF_LOCAL_MSG,
        actionObject: new ExtensionEnableFeature(),
    }, 
]


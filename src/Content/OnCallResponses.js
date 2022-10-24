import * as Order from "../common/PopupAndContentCommunication/Orders"
const { UpdateCacheFeature }  = require( "../ContentActionsFeatures/UpdateCacheFeature/UpdateCacheFeature");
const {NewShortcutFeature} = require("../ContentActionsFeatures/newShortcutFeature/newShortcut")
const {ImproveShortcutFeature} = require("../ContentActionsFeatures/improveShortcutFeature/ImproveShortcut")
const { ExtensionEnableFeature } = require("../ContentActionsFeatures/ExtensionEnableFeature/ExtensionEnableFeature")

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
    {
        msg: Order.UPDATE_CACHE,
        actionObject: new UpdateCacheFeature(),
    }, 
]


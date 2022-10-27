import * as Order from "../common/PopupAndContentCommunication/Orders"
import { featuresFactory } from "../OnClickFeatures/FeaturesFactory";

export const messageResponse= [
    { 
        msg: Order.CREATE_NEW_SHOWRTCUT_MSG,
        actionObject: featuresFactory.createNewShortcutFeatureContent()
    }, 
    {
        msg: Order.CREATE_NEW_DOUBLE_SHOWRTCUT_MSG,
        actionObject: featuresFactory.createImproveShortcutFeatureContent()
    }, 
    {
        msg: Order.ON_OFF_LOCAL_MSG,
        actionObject: featuresFactory.createExtensionEnableFeatureContent()
    }, 
    {
        msg: Order.UPDATE_CACHE,
        actionObject: featuresFactory.createUpdateCacheFeature()
    }, 
]


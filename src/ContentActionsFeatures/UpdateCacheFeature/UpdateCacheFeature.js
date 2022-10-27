import { createShortcutExecutor } from "../../common/ShortcutExecutors/CreateShortcutExecutor";
import { CacheManager } from "./CacheManager";

export class UpdateCacheFeature{

    // function called when gets called by popup
    // No requirements for data
    async onCallResponse(data){
        const shortcutExecutor = createShortcutExecutor()
        new CacheManager(shortcutExecutor).updateCache();
    }
}
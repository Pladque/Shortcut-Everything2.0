import { createShortcutExecutor } from "../../common/ShortcutExecutors/CreateShortcutExecutor";
import { CacheManager } from "./CacheManager";

export class UpdateCacheFeature{
    async onCallResponse(data){
        const shortcutExecutor = createShortcutExecutor()

        new CacheManager(shortcutExecutor).updateCache();
    }
}
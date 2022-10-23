import { SearchAlghorythm } from "../../ShortcutExecutors/SearchAlghorythm";
import { ShortcutExecutor } from "../../ShortcutExecutors/ShortcutExecutor";
import { CacheManager } from "../../_content/CacheManager";


export class UpdateCacheFeature{
    async onCallResponse(data){
        const searchAlghorythm = new SearchAlghorythm();
        const shortcutExecutor = new ShortcutExecutor(searchAlghorythm, {});
        new CacheManager(shortcutExecutor).updateCache();
    }

}
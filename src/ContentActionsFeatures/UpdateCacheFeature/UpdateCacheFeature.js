import { SearchAlghorythm } from "../../common/ShortcutExecutors/SearchAlghorythm";
import { ShortcutExecutor } from "../../common/ShortcutExecutors/ShortcutExecutor";
import { CacheManager } from "./CacheManager";


export class UpdateCacheFeature{
    async onCallResponse(data){
        const searchAlghorythm = new SearchAlghorythm();
        const shortcutExecutor = new ShortcutExecutor(searchAlghorythm, {});
        new CacheManager(shortcutExecutor).updateCache();
    }
}
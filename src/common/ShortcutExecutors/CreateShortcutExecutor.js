import { SearchAlghorythm } from "./SearchAlghorythm";
import { ShortcutExecutor } from "./ShortcutExecutor";
import { StrategySetter } from "./StrategySetter";

export function createShortcutExecutor(){
    const searchAlghorythm = new SearchAlghorythm();

    const strategySetter = new StrategySetter(searchAlghorythm);
    strategySetter.setStrategy();

    const shortcutExecutor = new ShortcutExecutor(searchAlghorythm);

    return shortcutExecutor
}
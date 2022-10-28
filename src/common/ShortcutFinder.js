
export class ShortcutFinder{

    findShortcut(shortcutrsArr, shortcut){
        return this._getIndexOfShortcut(shortcutrsArr, shortcut)
    }

    _getIndexOfShortcut(shortcutrsArr, shortcut){
        let index = -1;
        for(let i =0; i< shortcutrsArr.length; i++){
            if(shortcutrsArr[i]["shortcut"] === shortcut){
            index = i;
            break;
            }
        }

        return index
    }

}
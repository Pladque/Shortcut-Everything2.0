

export class ShortcutsViewBuilder{

    constructor(titleCreator, rowCreator, storage, parser){
        this.titleCreator = titleCreator;
        this.storage = storage;
        this.rowCreator = rowCreator;
        this.parser = parser;
    }

    async createShortcutsViewBoard(tabs){
        var currentTab = tabs[0]; 

        const url = JSON.stringify(currentTab.url)
        const data = await this.storage.readLocalStorage(this.parser._parseURL(url)).catch(e => {
        });

        if(data === undefined || data === null){
            return
        }

        var node = document.getElementById("shortcuts collection");

        for(let i = 0; i< data.data.length; i++){
            node.appendChild(this.titleCreator.getTitle(data.data[i]))
            node.appendChild(this.rowCreator.getRow(data.data[i]))
        }
    }




}
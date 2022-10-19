

export class TitleCreator{


    getTitle(shortcutData){
        let titleNode = document.createElement('button');
        titleNode.setAttribute("type", "button");
        titleNode.setAttribute("class", "collapsible");
        titleNode.innerText = shortcutData.shortcut + " | " + shortcutData.desc;

        return titleNode;
    }
}
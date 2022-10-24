

export class BackendTitleCreator{

    getTitle(url){
        var titleNode = document.createElement('h2');
        titleNode.innerHTML = url;

        return titleNode;
    }
}
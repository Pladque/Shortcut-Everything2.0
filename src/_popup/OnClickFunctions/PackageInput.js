const {storage} = require("../../common/Storage")


export class PackageLoaderButtonAction{
    onClickAction(data){
        let file = document.getElementById("package input field").files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = async function (evt) {
            // alert(evt.target.result)
        
            const dataJSON = JSON.parse(evt.target.result);
        
            await storage.saveToLocalStorage(dataJSON.site, (dataJSON.data))
        
            // showMessage("Shortcuts read succefully!")
            }
            reader.onerror = function (evt) {
                // showMessage("error reading file")
            }
        
        }
    }
}

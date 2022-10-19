const {storage} = require("../../common/Storage")

// @TODO
//  linia 353 w popup.JS ogarnij (nw jaki to ma zwiazek z ta funkcja)
//      chodzi o to, ze nw od czego jest ta funckja (bo raczej nie od ladowania paczki do pamieci)
export function loadPackageOnClickAction(){
    // showMessage("file is uploaidng...")

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


export class PackageCopyButtonAction{

  constructor(handler){
        this.handler = handler
  }

  async onClickAction(data){
        this.handler.run(await this.runFeature(data))
  }
    
  async runFeature(data){
    let pacakgeField = document.getElementById("package create field");
    
    pacakgeField.select();
    pacakgeField.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(pacakgeField.value);
    // showMessage("Copied the package!")

    return data;
  }
}

export function copyPackageClickAction(){
  
  let pacakgeField = document.getElementById("package create field");
  
  pacakgeField.select();
  pacakgeField.setSelectionRange(0, 99999); /* For mobile devices */
  
  navigator.clipboard.writeText(pacakgeField.value);
  
  // showMessage("Copied the package!")
}
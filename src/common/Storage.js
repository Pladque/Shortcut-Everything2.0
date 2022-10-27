// #1 Singleton
class Storage {

  async readLocalStorage (key) {
      return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], function (result) {
          if (result[key] === undefined) {
            reject();
          } else {
            resolve(result[key] );
          }
        });
      });
    };

  // saves to local storage
  async saveToLocalStorage(name, obj){
    let dynamicRecord = {}
    dynamicRecord[name] = obj
    const constRecord = dynamicRecord;
    await chrome.storage.local.set(constRecord, async() => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  }

  // clears only local storage (no cache update)
  async clearStorage () {
    chrome.storage.local.clear(function() {
      var error = chrome.runtime.lastError;
      if (error) {
          console.error(error);
      }
    });
  }

  printHello(){
    alert("Hello")
  }
}

const storageInstance = new Storage();

Object.freeze(storageInstance);

export { storageInstance as storage};

// #1 Singleton
class KeySequenceHolder {
  constructor() {
    this.keySequence = new Set();
    this.keySequenceStack = [];
  }

 
}

const keySequenceHolderInstance = new KeySequenceHolder();

// Object.freeze(storageInstance);

export { keySequenceHolderInstance as keySequenceHolder};
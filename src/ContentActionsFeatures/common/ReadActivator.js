// #1 Singleton
class ReadActivator {
  constructor() {
   this.ReadAcces = true;
   this.isExtensionEnabled = true;
  }
}

const readActivatorInstance = new ReadActivator();

export { readActivatorInstance as readActivator};
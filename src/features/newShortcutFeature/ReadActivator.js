


// #1 Singleton
class ReadActivator {
  constructor() {
   this.ReadAcces = false;
  }
}

const readActivatorInstance = new ReadActivator();

export { readActivatorInstance as readActivator};
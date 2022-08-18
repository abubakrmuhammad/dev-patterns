// SINGLETON PATTERN
// Share a single global instance throughout our application

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance)
      throw new Error("You can only create one instance!");

    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonClassCounter = new Counter();
Object.freeze(singletonClassCounter);

const singletonObjectCounter = (() => {
  let count = 0;

  return {
    getCount() {
      return count;
    },

    increment() {
      return ++count;
    },

    decrement() {
      return --count;
    }
  }
})();

Object.freeze(singletonObjectCounter);

let count = singletonObjectCounter.getCount();
count;

singletonObjectCounter.increment();

count = singletonObjectCounter.getCount();
count;

export { singletonClassCounter, singletonObjectCounter };
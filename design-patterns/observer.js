// OBSERVER PATTERN
// Use observables to notify subscribers when an event occurs

({
  plugins: ["jsdom-quokka-plugin"]
})

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const observable = new Observable();

observable.subscribe(timeLogger)
observable.subscribe(logger);

function timeLogger(string) {
  console.log(`${new Date().toUTCString()} - ${string}`);
}

function logger(string) {
  console.log(string);
}

observable.notify('test log');
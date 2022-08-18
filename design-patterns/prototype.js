// PROTOTYPE PATTERN
// Share properties among many objects of the same type

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof!');
  }
}

const dog1 = new Dog('daisy');

dog1.bark();

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log('Flying');
  }
}

console.log(dog1.__proto__);
console.log(Dog.prototype);

const dog2 = new SuperDog('Spot');
dog2.fly();
dog2.bark();

console.log(dog2.__proto__)
console.log(SuperDog.prototype.__proto__);
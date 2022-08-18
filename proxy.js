// PROXY PATTERN
// Intercept and control interactions to target objects

// Proxy & Reflect

const person = {
  name: 'John Doe',
  age: 28,
  nationality: 'American',
}

const personProxy = new Proxy(person, {
  get: (person, prop) => {
    if (!person[prop] && typeof prop === 'string')
      console.error(`\`${prop}\` does not exist on this \`person\` object.`);
  },
  set: (person, prop, value) => {

    if (prop === 'age' && typeof value !== 'number')
      console.error(`The property \`age\` can only contain a numeric value.`);

    else if (prop === 'name' && typeof value !== 'string' || value.length < 2)
      console.error(`The property \`name\` should contain a valid string (having atleast 2 characters).`);

    else
      return Reflect.set(person, prop, value);
  }
});

personProxy.hello;
personProxy.age = '34';
personProxy.name = 'Jenn Doe';

console.log(person);
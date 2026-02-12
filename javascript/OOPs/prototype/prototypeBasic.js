function Person(name){
    this.name = name;
    this.sayHello = function(){
        console.log("Hello, my name is " + this.name);
    }
}
var person1 = new Person("Alice");
var person2 = new Person("Bob");

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name ifs Bob

// ✅ 🚀 ---- Adding a method to the prototype
Person.prototype.sayGoodbye = function(){
    console.log("Goodbye from " + this.name);
}

person1.sayGoodbye(); // Output: Goodbye from Alice
person2.sayGoodbye(); // Output: Goodbye from Bob

// Checking if the method is in the prototype
console.log(person1.hasOwnProperty('sayGoodbye')); // Output: false
console.log(person2.hasOwnProperty('sayGoodbye')); // Output: false
console.log('sayGoodbye' in person1); // Output: true
console.log('sayGoodbye' in person2); // Output: true

// Adding a property to the prototype
Person.prototype.species = "Human";

console.log(person1.species); // Output: Human
console.log(person2.species); // Output: Human

// Checking if the property is in the prototype
console.log(person1.hasOwnProperty('species')); // Output: false
console.log(person2.hasOwnProperty('species')); // Output: false
console.log('species' in person1); // Output: true
console.log('species' in person2); // Output: true  
"use strict";
// WITHOUT GENERIC TYPE
function getArrayWithoutType(items) {
    return new Array().concat(items);
}
let numberArrayWithoutType = getArrayWithoutType([5, 10, 15, 20]);
let stringArrayWithoutType = getArrayWithoutType(['Cats', 'Dogs', 'Birds']);
numberArrayWithoutType.push(25); // OK
stringArrayWithoutType.push('Rabbits'); // OK
numberArrayWithoutType.push('This is not a number'); // OK
stringArrayWithoutType.push(30); // OK
// console.log(numberArrayWithoutType);                   // [5, 10, 15, 20, 25, "This is not a number"]
// console.log(stringArrayWithoutType);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]
// WITH GENERIC TYPE
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits'); // OK
function identity(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    // console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = identity(100, 'Hello');
let stringValue = identity('100', 'Hello');
// console.log(numberValue);       // Returns 200
// console.log(stringValue);       // Returns 100100
// let returnNumber = identity<number, string>(100, 'Hello!');      // OK
// let returnString = identity<string, string>('100', 'Hola!');     // OK
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
// returnNumber = returnNumber * 100 // Error
// returnNumber = typeof returnNumber === 'number' ? returnNumber * 100 : returnNumber
// EXTEND GENERIC TYPE WITH KEYOF
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
// console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error
// IMPLEMENTACION DE GENERICOS CON TIPOS Y CLASES
class Car {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCar;
accelerate(myElectricCar);
let myTruck = new Truck;
accelerate(myTruck);
let genericCar = new Car;
accelerate(genericCar);

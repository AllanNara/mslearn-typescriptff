"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        ;
        Car.numberOfCars++;
    }
    ;
    // Accessors
    get make() {
        return this._make;
    }
    ;
    set make(make) {
        this._make = make;
    }
    ;
    get color() {
        return 'The color of the car is ' + this._color;
    }
    ;
    set color(color) {
        this._color = color;
    }
    ;
    get doors() {
        return this._doors;
    }
    ;
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    ;
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH`;
    }
    ;
    brake() {
        return `${this.worker()} is braking with the standard braking system`;
    }
    ;
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    ;
    worker() {
        return this._make;
    }
    ;
}
// Properties
Car.numberOfCars = 0;
;
// let myCar1 = new Car('Cool Car Company', 'blue', 2)
// console.log(myCar1._color)
// console.log(myCar1.color)
// let myCar2 = new Car('Cool Car Company', 'blue', 3);
// console.log(myCar2)
// myCar2.doors = 5;
// let myCar3 = new Car('Galaxy Motors', 'gray');
// console.log(myCar3.doors);
// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
let myCar3 = new Car('Galaxy Motors', 'gray');
// Returns 3
// console.log(Car.getNumberOfCars());
exports.default = Car;

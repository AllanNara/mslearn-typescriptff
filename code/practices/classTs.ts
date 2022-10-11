type Direction = 'left' | 'right';

interface Vehicle {
    make: string,
    // color: string,
    doors: number,
    accelerate(speed: number): string,
    brake(): string,
    // turn(direction: Direction): string,
}


class Car implements Vehicle {
    // Properties
    private static numberOfCars: number =  0
    private _make: string;
    private _color: string;
    private _doors: number;
    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        };
        Car.numberOfCars++
    };
    // Accessors
    public get make() {
        return this._make;
    };
    public set make(make) {
        this._make = make;
    };
    public get color() {
        return 'The color of the car is ' + this._color;
    };
    public set color(color) {
        this._color = color;
    };
    public get doors() {
        return this._doors;
    };
    public set doors(doors) {
        if((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number')
        }
    }
    // Methods
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    };
    public accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH`
    };
    public brake(): string {
        return `${this.worker()} is braking with the standard braking system`
    };
    public turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`
    };
    protected worker(): string {
        return this._make
    };
};

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


export default Car;




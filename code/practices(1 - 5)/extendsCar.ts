import Car from "./classTs";

class ElectricCar extends Car {
  //properties
  private _range: number;
  //constructor
  constructor(make: string, color: string, range: number, doors = 4) {
    super(make, color, doors)
    this._range = range
  }
  //accesories
  get range() {
    return this._range;
  };
  set range(range) {
    this._range = range;
  };
  //methods
  charge() {
    console.log(this.worker() + " is charging")
  };
  
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`
  };
};

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"

console.log(spark.brake());  


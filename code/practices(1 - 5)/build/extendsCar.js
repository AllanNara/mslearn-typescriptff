"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classTs_1 = __importDefault(require("./classTs"));
class ElectricCar extends classTs_1.default {
    //constructor
    constructor(make, color, range, doors = 4) {
        super(make, color, doors);
        this._range = range;
    }
    //accesories
    get range() {
        return this._range;
    }
    ;
    set range(range) {
        this._range = range;
    }
    ;
    //methods
    charge() {
        console.log(this.worker() + " is charging");
    }
    ;
    brake() {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
    ;
}
;
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());

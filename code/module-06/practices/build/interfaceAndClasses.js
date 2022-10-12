"use strict";
// // DECLARANDO INTERFAZ GENERICA
// interface Identity<T, U> {
//   value: T;
//   message: U;
// };
// let returnNumber: Identity<number, string> = {
//   value: 25,
//   message: 'Hello!'
// };
// let returnString: Identity<string, number> = {
//   value: 'Hello!', 
//   message: 25
// };
// // DECLARANDO I.G COMO UN TIPO DE FUNCION
// interface ProcessIdentity<T, U> {
//   (value: T, message: U): T;
// };
// function processIdentity<T, U> (value: T, message: U): T {
//   console.log(message);
//   return value
// };
// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber1 = processor(100, 'Hello!');
// // let returnString1 = processor('Hello!', 100);
// // DECLARANDO I.G COMO TIPO DE CLASE
// interface ProcessIdentity<T, U> {
//   value: T;
//   message: U;
//   process(): T
// };
// class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
//   value: X;
//   message: Y;
//   constructor(val: X, msg: Y) {
//     this.value = val;
//     this.message = msg
//   };
//   process(): X {
//     console.log(this.message);
//     return this.value
//   }
// };
// let processor = new processIdentity<number, string>(35, 'Hola!');
// processor.process();
// processor.value = 100;
// DECLARANDO UNA CLASE GENERICA SIN INTERFAZ
class processIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
;
let processor = new processIdentity(100, 'Hello!');
processor.getIdentity();

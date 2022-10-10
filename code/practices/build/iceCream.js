"use strict";
// let myIceCream: IceCream = {
//     flavor: 'vanila',
//     scoops: 3
// }
// console.log(myIceCream.flavor)
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return `${dessert.scoops} is to many scoops!`;
    }
    else {
        return "You order will be ready soon!";
    }
}
;
console.log(tooManyScoops({ flavor: 'chocolate', scoops: 2, sauce: 'caramel' }));
let myIceCream = {
    flavor: 'vanila',
    scoops: 3,
    sauce: 'chocolate',
    nuts: true
};
let myIceCreamsArray = ['vainilla', 'frutilla', 'supergridito'];
let myStr = myIceCreamsArray[0];
console.log(myStr);

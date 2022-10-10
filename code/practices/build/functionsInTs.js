"use strict";
addOne(3);
// restOne(3)
function addOne(n) {
    return n + 1;
}
let restOne = function (n) {
    return n - 1;
};
let total = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// console.log(total([1, NaN, 3]));
let addNumbers1 = function (x, y) {
    return x + y;
};
let addNumbers2 = (x, y) => x + y;
// function displayAlert(message: string | number): void {
//   alert(`The message is ${message}`);
// }
// console.log(displayAlert(2));
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
// console.log(sum([2, 3, 5, "one"]));
function testRest(firstNumber, ...restNumbers) {
    let total = firstNumber;
    for (let i = 0; i < restNumbers.length; i++) {
        if (isNaN(restNumbers[i])) {
            continue;
        }
        total += restNumbers[i];
    }
    return total;
}
function displayMessage({ sender }) {
    console.log(`Message from ${sender}`);
}
// displayMessage({sender: 'Christopher', text: 'hello, world'});
let addThreeNumbers = (x, y, z) => {
    if ((z === undefined)) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
let addNum = (x, y) => x + y;
let subtractNum = (x, y) => x - y;
// console.log(addNum(5, 2));
// console.log(subtractNum(5, 2));
let doCalculation = (operation) => {
    if (operation === 'add')
        return addNum;
    return subtractNum;
};
console.log(doCalculation('subtract')(5, 2));

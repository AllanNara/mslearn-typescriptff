addOne(3);
// restOne(3)

function addOne(n: number): number {
  return n + 1;
}

let restOne = function (n: number): number {
  return n - 1;
};

let total = (input: number[]): number => {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

// console.log(total([1, NaN, 3]));

let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

let addNumbers2 = (x: number, y: number): number => x + y;

// function displayAlert(message: string | number): void {
//   alert(`The message is ${message}`);
// }

// console.log(displayAlert(2));

function sum(input: Array<number>): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}

// console.log(sum([2, 3, 5, "one"]));

function testRest(firstNumber: number, ...restNumbers: Array<number>): number {
  let total: number = firstNumber;
  for(let i = 0; i < restNumbers.length; i++) {
    if(isNaN(restNumbers[i])){
      continue
    }
    total += restNumbers[i]
  }
  return total
}

// console.log(testRest(1))
// console.log(testRest(1, 2, 3, 4, 5, 6, 7, 8, 9))
// console.log(testRest(1,2 ,3 5, 6, 'hola'))

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ sender }: Message) {
   console.log(`Message from ${sender}`);
}

// displayMessage({sender: 'Christopher', text: 'hello, world'});

let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if((z === undefined)) {
      return x + y;
  } else {
      return x + y + z;
  }
};

// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number
}

let addNum: Calculator = (x: number, y: number): number => x + y;
let subtractNum: Calculator = (x, y) => x - y;

// console.log(addNum(5, 2));
// console.log(subtractNum(5, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
  if(operation === 'add') return addNum;
  return subtractNum;
};

console.log(doCalculation('subtract')(5, 2))
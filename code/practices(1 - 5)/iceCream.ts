interface IceCream {
    flavor: string,
    scoops: number,
    instructions?: string
}

// let myIceCream: IceCream = {
//     flavor: 'vanila',
//     scoops: 3
// }

// console.log(myIceCream.flavor)

function tooManyScoops( dessert: Sundae ) {
    if(dessert.scoops >= 4) {
        return `${dessert.scoops} is to many scoops!`;
    } else {
        return "You order will be ready soon!"
    }
};

console.log(tooManyScoops({flavor: 'chocolate', scoops: 2, sauce: 'caramel'}))

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'vanila',
    scoops: 3,
    sauce: 'chocolate',
    nuts: true
}

interface IceCreamArray {
    [index: number]: string;
}

let myIceCreamsArray: IceCreamArray = ['vainilla', 'frutilla', 'supergridito'];
let myStr: string = myIceCreamsArray[0];
console.log(myStr);







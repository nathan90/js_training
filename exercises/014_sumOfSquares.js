// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

const readlineSync = require("readline-sync");
const num = parseInt(readlineSync.question("Enter a Number: "));

const sumOfSquares = (num) => {
    for ( let x = 1; x < num; x++) {
        if (x * x < num) {
            for (let y = 1; y * y < num; y++) {
                if ((x * x + y * y) === num) {
                    return [x, y]
                }
            }
        } else if (x * x >= num) {
            return 
        }
    }
}

//calling the function
let wholenumbers = sumOfSquares(num)
if (wholenumbers != undefined) {
    console.log(num + " can be expressed as square of " + wholenumbers[0] + " and " + wholenumbers[1]);
} else {
    console.log(num, "cannot be expressed as the sum of squares of two whole numbers");
}
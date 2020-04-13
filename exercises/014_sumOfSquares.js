// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

const readlineSync = require("readline-sync");
const num = parseInt(readlineSync.question("Enter a Number: "));

function sumOfSquares(num) {
    for (x = 1; x < num; x++) {
        if (x * x < num) {
            for (y = 1; y * y < num; y++) {
                if ((x * x + y * y) === num) {
                    console.log(num + " can be expressed as square of " + x + " and " + y);
                    return x
                }
            }
        } else if (x * x >= num) {
            console.log(num, " cannot be expressed as the sum of squares of two whole numbers");
            return 
        }
    }
}

sumOfSquares(num)
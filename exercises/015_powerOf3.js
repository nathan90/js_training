//Write program to check if number is power of 3 of any number

const readlineSync = require("readline-sync");
const num = parseInt(readlineSync.question("Enter a Number: "));

const powerOf3 = (num) => {
    for (let i = 1; i < num; i++) {
        if (Math.pow(3, i) === num) {
            return "Number is a power of 3";
        } else if (Math.pow(3, i) > num) {
            return "Number is not a power of 3";
        }
    }
}

console.log(powerOf3(num))
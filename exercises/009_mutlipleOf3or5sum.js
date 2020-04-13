//Modify the previous program such that only multiples of three or five are considered in the sum,
// e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Positive Integer:");

const sumOfNnumbers = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i%3 === 0 || i%5 === 0) {
            sum += i;
        }
    }
    console.log("Sum of numbers which are multiple of 3 or 5 from 1 to ", num, ":", sum);
}
sumOfNnumbers(num);
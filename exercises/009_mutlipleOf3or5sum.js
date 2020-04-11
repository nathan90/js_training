//8. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Positive Integer:")

function sumOfNnumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i%3 ===0 || i%5 === 0) {
        sum += i;
        }
    }
    console.log("Sum of numbers which are multiple of 3 or 5 from 1 to ",num, ":",sum)
}
sumOfNnumbers(num)
//Write a program to check if number is odd
const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Number: ");

const oddOrEven = (num) => {
    if (num) {
        if (num%2 === 0) {
            console.log("Number is even");
        } else {
            console.log("Number is odd");
        }
    } else {
        console.log("No number entered")
    }
}

oddOrEven(num)
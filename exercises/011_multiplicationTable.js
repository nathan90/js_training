//Write a program that prints a multiplication table for numbers up to 12.

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Number between 1 and 12: ");

const multiplication = (num) => {
    if (num < 1 || num > 12) {
        console.log("Please enter the correct number");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(num + " * " + i + " = " + i * num);
        }
    }
}

multiplication(num);
//10. Write a program that asks the user for a number n and gives them the possibility to choose 
//between computing the sum and computing the product of 1,…,n.

const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Positive Integer: ");
const string = readlineSync.question("Enter 'p' for product or 's' for sum: ");

const sumOfNnumbers = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log("Sum of numbers from 1 to ", num, ":", sum);
}

const productOfNnumbers = (num) => {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    console.log("Product of numbers from 1 to ", num, ":", product);
}

const sumOrProduct = (num, string) => {
    if (string == 'p') {
        productOfNnumbers(num);
    } else if (string == 's') {
        sumOfNnumbers(num);
    } else {
        console.log( "Please enter the correct string");
    }

}

sumOrProduct(num, string)
//Find the sum of elements in a given array. Array should be an input to the program

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a list on Integers separated by comma: ");
let arr = string.split(",").map(Number);

const sumOfElements = (arr) => {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of Array: ", sum);
}

sumOfElements(arr);
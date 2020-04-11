const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a list on Integers separated by comma: ")
let arr = string.split(",").map(Number)

function sumOfElements(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("Sum of Array: ", sum)
    
}

sumOfElements(arr)
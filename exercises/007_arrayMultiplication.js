//Multiple each element of an array with a constant and print the result

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a list on Integers separated by comma: ");
const const_num = readlineSync.question("Enter the constant to be multiplied with: ");
let arr = string.split(",").map(Number);

const arrayMultiplication = (arr) => {
    let arr_multlplied = arr.map(x => x * const_num);
    console.log("Array ", arr ," multiplied by constant: ",const_num, "= ", arr_multlplied);
}

arrayMultiplication(arr);


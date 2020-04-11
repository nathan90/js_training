/*2. Enter 2 numbers and display the result for the following operations (each operation should be a function)
    add / multiply / divide / modulus / substract / greater than / less than / is equal
*/
// import readlineSync module to accept commandline arguments
const readlineSync = require("readline-sync");
const num1 = readlineSync.question("Enter 1st Number:");
const num2 = readlineSync.question("Enter 2nd Number:")

function addition(num1,num2) {
    //addition
    console.log("Addition :",num1+num2)
} function subtraction(num1,num2){
    //subtraction
    console.log("Subtraction :",num1-num2)
} function multiplication(num1,num2) {
    //multiplication
    console.log("Multiplication :",num1*num2)
} function division(num1, num2) {
    //division
    console.log("Division :",num1/num2)
} function modulus(num1, num2){
    //modulus
    console.log("Modulus :",num1%num2)
} function numbercomparison(num1, num2) {
    //Less than greater than equal to
    if (num1 === num2) {
        console.log("Numbers are equal")
    } else if (num1 > num2) {
        console.log(num1, " is greater than ", num2)
    } else {
        console.log(num1, " is less than ", num2)
    }

}
addition(num1,num2)
subtraction(num1,num2)
multiplication(num1,num2)
division(num1, num2)
modulus(num1, num2)
numbercomparison(num1, num2)
/*2. Enter 2 numbers and display the result for the following operations (each operation should be a function)
    add / multiply / divide / modulus / substract / greater than / less than / is equal
*/
function arithmetic(num1,num2) {
    //addition
    console.log("Addition :",num1+num2)
    //subtraction
    console.log("Subtraction :",num1-num2)
    //multiplication
    console.log("Multiplication :",num1*num2)
    //division
    console.log("Division :",num1/num2)
    //modulus
    console.log("Modulus :",num1%num2)
    //Less than greater than equal to
    if (num1 === num2) {
        console.log("Numbers are equal")
    } else if (num1 > num2) {
        console.log(num1, " is greater than ", num2)
    } else {
        console.log(num1, " is less than ", num2)
    }

}
arithmetic(3,4)
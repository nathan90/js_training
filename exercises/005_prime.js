//Enter a number and find if it's prime
const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Positive Integer:")
function isPrime(num) {
    if (num <= 1) {
        return "Number is not prime";
    } else {
        for (let i = 2; i < num; i++) {
            if (num%i===0) {
                return "Number is not prime";
            } else {
                return "Number is prime"
            }
        }
    }
}

console.log(isPrime(num))
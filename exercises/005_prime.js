//Enter a number and find if it's prime
const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter a Positive Integer:");

const isPrime = (num) => {
    if (num <= 1) {
        return "Number is not prime";
    } else {
        for (let i = 2; i < Math.floor(num/2)+1; i++) {
            if (num%i === 0) {
                return "Number is not prime";
            }            
        }
        return "Number is prime";
    }
}

console.log(isPrime(num));
//35. Factorial of a number

const factorial = (number) => {
    let fact  = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

// Enter the number below
let number = 5;
console.log(`The factorial of ${number} is:`, factorial(number));
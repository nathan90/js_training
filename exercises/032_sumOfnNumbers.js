//32. Sum of N natural numbers

const sumOfNaturalNumbers = (number) => {
    let sum = (number * (number + 1)) / 2;
    return sum;
}

//set the value of N
let num = 10;
console.log(`The sum of first ${num} natural numbers:`, sumOfNaturalNumbers(num));
//31. Sum of digits of a number

const sumOfDigits = (number) => {
    let sum = 0;
    while (number !== 0) {
        sum += number % 10;
        number = Math.floor(number / 10);  
    }
    return sum;
}

//calling the function

console.log("The sum of digits is: ", sumOfDigits(139));
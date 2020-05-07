// Sum of numbers in a string

sumOfDigits = (number) => {
    let sum = 0;
    while (number !== 0) {
        sum += number % 10;
        number = Math.floor(number / 10);  
    }
    return sum;
}

sumOfNumberString = (string) => {
    let number = parseInt(string.replace(/[^0-9\.]/g, ''), 10);
    let sum = sumOfDigits(number);
    return sum;
}

console.log(sumOfNumberString('abc12345 ssds6789'));
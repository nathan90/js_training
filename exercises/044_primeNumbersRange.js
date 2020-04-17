//Prime numbers in a given range

primeNumbersRange = (number1, number2) => {
    let min = Math.min(number1, number2);
    let max = Math.max(number1, number2);
    if (min <= 1) {
        return "Enter a number greater than 1";
    }
    let primeNumbers = [];
    if (min === 2) {
        primeNumbers = [2];
    }
    if (min % 2 === 0) {
        min += 1;
    }
    for (let i = min; i <= max; i = i + 2) {
        let flagPrime = true;
        for (let j = 3; j < Math.floor(i / 2) + 1; j = j + 2) {
            if (i % j === 0) {
                flagPrime = false;
                break;
            }
        }
        if (flagPrime === true) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(primeNumbersRange(50, 100));
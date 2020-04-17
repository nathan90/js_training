//Write a program that prints all prime numbers. 
//(Note: if your programming language does not support arbitrary size numbers, 
//printing all primes up to the largest number you can easily represent is fine too.)

allPrimeNumbers = (number) => {
    if (number <= 1) {
        return "Enter a number greater than 1";
    }
    let primeNumbers = [2];
    if (number === 2) {
        return primeNumbers;
    }
    for (let i = 3; i <= number; i = i + 2) {
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

console.log(allPrimeNumbers(100));

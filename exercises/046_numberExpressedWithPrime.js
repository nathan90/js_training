//Can a number be expressed as a sum of two prime numbers?
//https://afteracademy.com/blog/check-for-pair-in-an-array-with-a-given-sum (for further optimization)

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

sumOfPrimes = (number) => {
    let primeNumbers = allPrimeNumbers(number);
    let sumPrimeFlag = false;
    for (let i = 0; i < primeNumbers.length; i++) {
        for (let j = i + 1; j < primeNumbers.length; j++) {
            let sum = primeNumbers[i] + primeNumbers[j];
            if (sum === number) {
                let num1 = primeNumbers[i];
                let num2 = primeNumbers[j];
                sumPrimeFlag = true;
                return {sumPrimeFlag, num1,num2};
            }
        }
    }
    return {sumPrimeFlag};
}

//Enter the number to be passed
let number = 30;
let isSumOfPrime = sumOfPrimes(number);
if (isSumOfPrime['sumPrimeFlag'] === true) {
    console.log(`The number ${number} can be expressed as the sum of prime numbers ${isSumOfPrime['num1']} and ${isSumOfPrime['num2']}`);
} else {
    console.log(`The number ${number} cannot be expressed as the sum of prime numbers`);
}
//Number of integers which has exactly 9 divisors

const factors = (number) => {
    let factorsArray = [];
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            factorsArray.push(i);
        }
    }
    return factorsArray;
}

const nineDivisors = (number) => {
    let integers = [];
    for (let i = 1; i <= number; i++) {
        let arr = factors(i);
        if (arr.length === 9) {
            integers.push(i);
        }
    }
    return integers;

}
//Calling the function
let number = 100;
console.log(`The number of integers having 9 factors between 1 and ${number} :=>`, nineDivisors(number));
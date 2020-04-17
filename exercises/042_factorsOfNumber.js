//42. Find all Factors of a number

const factors = (number) => {
     let factorsArray = [];
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            factorsArray.push(i);
        }
    }
    return factorsArray;
}

//Calling the function
let number = 6;
console.log(`The factors of the number ${number}:=>`, factors(number));
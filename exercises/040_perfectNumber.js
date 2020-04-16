//Perfect number or not

const perfectNumber = (number) => {
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i
        }
    }
    if (sum === number) {
        return "Perfect Number"
    }
    else {
        return "Not a Perfect Number"
    }
}

//Enter the number
let number = 6
console.log(`Number ${number} is a`, perfectNumber(number))
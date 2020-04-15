//Number of digits in an integer

const numberOfDigits = (number) => {
    let count = 0
    while (number != 0) {
        number = Math.floor(number / 10)
        count++
    }
    return count;
}

//Calling the function
console.log("Number of digits are ", numberOfDigits(2133))
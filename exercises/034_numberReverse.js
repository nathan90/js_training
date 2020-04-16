//Reverse a given number

const reverse = (number) => {
    let revNum = 0;
    while (number !== 0) {
        let remainder = number % 10;
        revNum = (revNum * 10) + remainder;
        number = Math.floor(number / 10);
    }
    return revNum;
}

//Enter the number to be reversed
let number = 4321
console.log(`The reverse of ${number} is:`, reverse(number));
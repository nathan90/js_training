//Armstrong number or not

const armstrong = (number) => {
    let sum = 0;
    let number_clone = JSON.parse(JSON.stringify(number));
    while (number !== 0) {
        sum += Math.pow((number % 10), 3);
        number = Math.floor(number / 10);  
    }
    if (sum === number_clone) {
        return "armstrong";
    } else {
        return "not armstrong";
    }
}

//calling the function
let number = 153;
console.log(`The number ${number} is`, armstrong(number));
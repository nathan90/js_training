//Strong number or not

const factorial = (number) => {
    let fact  = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

const strong = (number) => {
    let sum = 0;
    let number_clone = JSON.parse(JSON.stringify(number));
    while (number !== 0) {
        sum += factorial(number % 10);
        number = Math.floor(number / 10);  
    }
    if (sum === number_clone) {
        return "strong number";
    } else {
        return "not a strong number";
    }
}

//calling the function
let number = 145;
console.log(`The sum ${number} is a`, strong(number));
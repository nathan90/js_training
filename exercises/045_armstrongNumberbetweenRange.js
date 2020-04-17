//Armstrong numbers between two intervals

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

const armstrongRange = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let armstrongArray = [];

    for (let i = min; i <= max; i++) {
       let isArmstrong = armstrong(i);
       if (isArmstrong === "armstrong") {
           armstrongArray.push(i);
       }
    }
    return armstrongArray;
}

//Enter the range
let num1 = 1;
let num2 = 500;
//calling the function
let armstrongArray =armstrongRange(num1, num2);

console.log(`The armstrong numbers between ${num1} and ${num2} are :=>`, armstrongArray.join(', '));
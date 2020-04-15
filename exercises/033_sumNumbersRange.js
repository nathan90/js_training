//33. Sum of numbers in a given range

const sumRange = (num1, num2) => {
    let minValue = Math.min(num1, num2);
    let maxValue = Math.max(num1, num2);
    let n = maxValue - minValue + 1;

    let sum =  n * (minValue + maxValue) / 2;
    return sum;
}

//Set the value of num1 and num2
let num1 = 1
let num2 = 10
console.log(`The sum of numbers in the range ${num1} to ${num2} is :`, sumRange(num1, num2));
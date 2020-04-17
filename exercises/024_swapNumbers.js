//Write a program to Swap two numbers without third variable

const swapNumbers = (num1, num2) => {
    num2 = num2 + num1;
    num1 = num2 - num1;
    num2 = num2 - num1;
    return [num1, num2];
}

// Call the function
const swap = swapNumbers(5, 10);
console.log(swap);
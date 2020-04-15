//Greatest of two numbers

const greatest = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("Greatest number is ", greatest(10,20))
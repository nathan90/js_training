//Write a program to check a number is positive or negative

const posOrNeg = (num) => {
    if (num < 0) {
        return "Number is negative";
    } else {
        return "Number is positive";
    }
}

//Calling the function

console.log(posOrNeg(-10));
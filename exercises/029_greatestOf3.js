//Greatest of three numbers

const greatest = (num1, num2, num3) => {
    if ((num1 > num2) && (num1 > num3)) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

//Calling the function
console.log("Greatest number is ", greatest(40, 120, 30));
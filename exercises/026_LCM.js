//LCM of two numbers

const lcm = (num1, num2) => {
    for (let i = 1; i <= num1 * num2; i++) {
        if ((i % num1 === 0) && (i % num2 === 0)) {
            return i;
        }
    }
}

//calling the function
console.log("The least common multiple is ",lcm(4, 4));
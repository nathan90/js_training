//Fibonacci series up to n

const fibonacci = (number) => {
    let [a, b] = [0, 1];
    let sum = 0;
    while (sum <= number) {
        console.log(sum);
        a = b;
        b = sum;
        sum = a + b;
    }
}

// Enter the value of n
let number = 1000;
console.log(`The fibonacci numbers upto ${number}:`);
fibonacci(number);
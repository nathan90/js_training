// recursively calling fibonacci

let fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// factorial recusrion

let factorial = (x) =>  { 
    if (x === 0) return 1;
    return x * factorial(x-1);         
}
  
console.log(factorial(5));


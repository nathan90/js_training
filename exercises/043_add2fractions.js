//Add two fractions

const lcm = (num1, num2) => {
    for (let i = 1; i <= num1 * num2; i++) {
        if ((i % num1 === 0) && (i % num2 === 0)) {
            return i;
        }
    }
}

const hcf = (num1, num2) => {
    let min = Math.min(num1, num2);
    for (let i = min; i > 0; i--) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            return i;
        } 
    }
}

addFraction = (num1, deno1, num2, deno2) => {
    let denominator = lcm(deno1, deno2);
    let [factor1, factor2] = [denominator / deno1, denominator / deno2];
    num1 = num1 * factor1;
    num2 = num2 * factor2;
    let numerator  = num1 + num2;
    let hcfFraction = hcf(numerator, denominator);
    numerator = numerator / hcfFraction;
    denominator = denominator / hcfFraction;
    return {numerator, denominator};
}

//calling the function
let fraction = addFraction(2, 4, 6, 8);
console.log(`The added fraction is ${fraction['numerator']}/${fraction['denominator']}`);
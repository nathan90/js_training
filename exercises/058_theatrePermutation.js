//Permutations in which n people can occupy r seats in a theatre

const factorial = (number) => {
    let fact  = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

seatPermutation = (people, seat) => {
    let factNumerator = factorial(people);
    let factDenominator = factorial(people - seat);
    let permutations =  factNumerator / factDenominator;
    return permutations;
}

// testing the function
console.log(seatPermutation(10, 5));
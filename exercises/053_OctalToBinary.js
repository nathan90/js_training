//Octal to binary conversion

octalToBinary = (octal) => {
    return parseInt(octal, 8).decimal.toString(2);
}

// The octal number is 12 the corresponding decimal is 10 and binary is 1010
console.log(octalToBinary(12));
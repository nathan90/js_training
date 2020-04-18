//52. Binary to octal conversion

binaryToOctal =(binary) => {
    return parseInt(binary, 2).toString(8);
}

//The binary is 1010 corresponding decimal is 10 and octal is 12
console.log(binaryToOctal(1010));
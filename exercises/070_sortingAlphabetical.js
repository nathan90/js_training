//  70. Sorting a string in alphabetical order

sortAlpha = (string) => {
    let stringArray = string.split('');
    return stringArray.sort().join('');
}

console.log(sortAlpha("Aameture"));
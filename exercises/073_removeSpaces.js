// Remove spaces from a string

removeSpaces = (string) => {
    stringArray = string.split('');
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] == ' ') {
            stringArray.splice(i,1);
        }
    }
    return stringArray.join('');
}

console.log(removeSpaces('Hello World from INdia'));
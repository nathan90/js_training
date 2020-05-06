// Toggle each character in a string

toggleCharacter  = (string) => {
    let stringArray = string.split('');
    for (let i = 0; i <stringArray.length; i++) {
        if (stringArray[i] === stringArray[i].toLowerCase()) {
            stringArray[i] = stringArray[i].toUpperCase();
        }
        else {
            stringArray[i] = stringArray[i].toLowerCase();
        }
    }
    return stringArray.join('');
}

console.log(toggleCharacter("Hello World"));
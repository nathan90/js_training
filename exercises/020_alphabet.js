//Write a program to check if a character is an alphabet or not

const isAlphabet = (character) => {
    if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
        return true;
    } else {
        return false;
    }
}

//Enter the value of character
let character = '9';

let ifCharacter = isAlphabet(character);

if (ifCharacter === true) {
    console.log("Character is an alphabet");
} else {
    console.log("Character is not an alphabet");
}
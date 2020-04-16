// Write a program to check Uppercase, Lowercase or special character

const isAlphabet = (character) => {
    if (character >= 'a' && character <= 'z') {
        return "Character is lower case";
    } else if (character >= 'A' && character <= 'Z'){
        return "Character is upper case";   
    }   else {
        return "Character is special character";
    }
}

//calling the function
console.log(isAlphabet('-'));
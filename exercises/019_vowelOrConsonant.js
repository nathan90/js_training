//Write a program to check if a character is a vowel or consonant
const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a String: ");

const vowelOrConsonent = (string) => {
    let stringArray = string.split("")
    let arrayLen = stringArray.length
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    for (let i = 0; i < arrayLen; i++) {
        if (vowels.includes(stringArray[i])) {
            console.log("Character " + stringArray[i] + " is a vowel");
        } else {
            console.log("Character " + stringArray[i] + " is a consonant")
        }
    }
}

vowelOrConsonent(string)
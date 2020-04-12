//4. Enter a  string and find if it's a palindrome
const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a String:")

const palindrome = (string) => {
    let len = string.length;
    str = string.toLowerCase();

    for (let i = 0; i< Math.floor(len/2); i++) {
        if (str[i] !== str[len -1 - i]) {
            return "String is not Palindrome"
        } else {
            return "String is Palindrome"
        }
    }
}

console.log(palindrome(string))
/*3. Enter 2 strings and do the following operations

concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces / 
add a character after every specific letter /
*/
// import readlineSync module to accept commandline arguments
const readlineSync = require("readline-sync");
const string1 = readlineSync.question("Enter 1st String:");
const string2 = readlineSync.question("Enter 2nd String:")

const stringConcat = (string1, string2)  => {
    // concatenate the strings
    console.log("Concatenated String: ", string1 + string2)
}

const stringReverse = (string1, string2)  => {

    // reverse the string
    string1array = string1.split("")
    string2array = string2.split("")
    string1rev = []
    string2rev = []

    while (string1array.length > 0) {
        string1rev.push(string1array.pop())
    }

    while (string2array.length > 0) {
        string2rev.push(string2array.pop())
    }
    
    console.log("Reversed Strings: ", string1rev.join(""), " ", string2rev.join(""))
}

const reverseConcat = (string1, string2) => {
     // reverse the string
    string1array = string1.split("")
    string2array = string2.split("")
    string1rev = []
    string2rev = []

    while (string1array.length > 0) {
        string1rev.push(string1array.pop())
    }

    while (string2array.length > 0) {
        string2rev.push(string2array.pop())
    }

    console.log("Reversed Concatenated Strings: ", string1rev.join("") + string2rev.join(""))
}

const mixTheLetters = (string1, string2) => {
    string1array = string1.split("");
    string2array = string2.split("");
    stringmix = [];
   
    while (true) {
        if (string1array.length === 0 || string2array.length === 0) {
            stringmix += (string1array + string2array);
            return stringmix
            break;
        } else {
            x = string1array.shift()
            stringmix.push(x)
            y = string2array.shift()
            stringmix.push(y)
        }
    }  
}

const removeWhiteSpace = (string)  => {
    string = string.replace(/ /g, '')
    return string
}

const splitInHalf = (string1) => {
    const len = string1.length;
    const mid = Math.floor(len/2)
    console.log(" Split string:", string1.slice(0,mid), string1.slice(mid,len))


}

//Calling functions

stringConcat(string1,string2)
stringReverse(string1,string2)
reverseConcat(string1,string2)
console.log("Mixed Letters: ", mixTheLetters(string1, string2).replace(/,/g, ''))
console.log("Removed White Space: ", removeWhiteSpace("Hello World Earth"))
splitInHalf(string1)


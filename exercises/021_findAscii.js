//21. Write a program to check Ascii values of a character

const findAscii = (character) => { 
    let asciivalue = character.charCodeAt()
    return asciivalue
}

// Calling the function

console.log("Ascii value is : ", findAscii('a'))
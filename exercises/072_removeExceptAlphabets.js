//72. Remove characters in a string except alphabets

removeCharacters = (string) => string.replace(/[^a-zA-Z]+/g, "");

let string = "Heloo 123 World $#%!@";
console.log(removeCharacters(string));
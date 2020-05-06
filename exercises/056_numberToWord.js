//Convert digit/number to words

digitToWords = (number) => {
let numberToWord = {0: "Zero", 1 : "One", 2 : "Two", 3 : "Three", 4 : "Four", 5 : "Five", 6 : "Six", 7 : "Seven", 8 : "Eight", 9 : "Nine"};
let numberArray = String(number).split('');
numberArray = numberArray.map(x => numberToWord[x]);
return numberArray.join(" ");
}

console.log(digitToWords(100122));
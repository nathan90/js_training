// 71. Removing brackets from an algebraic expression

removeBrackets = (string) => string.replace(/[()]+/g, "");

let string = "a-(b-c-(d+e))-f";
console.log(removeBrackets(string));
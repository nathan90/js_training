//65. Write a function that checks whether an element occurs in a list.

checkElement = (arr, element) => {
    return arr.includes(element);
}

let arr = [1,2,3,4,5];
let element = 6;

console.log(checkElement(arr, element));
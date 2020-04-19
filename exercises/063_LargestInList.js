//Write a function that returns the largest element in a list.

const maxInList = (arr) => {
    return Math.max.apply(Math, arr);
}

//calling the function
let arr = [1, 3, 34, 2, 8];
console.log(`The maximum value in the list [${arr}] is`, maxInList(arr));


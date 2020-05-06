//66. Length of the string without using strlen() function

stringLength = (string) => {
    let length = 0;
    while (string[length] !== undefined)
      length++;
    return length;
  }

let string = 'Ramesh';
console.log(stringLength(string));
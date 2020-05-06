//Capitalize first and last letter of an alphabet in a sentence

capitalizeFirstLast = (string) => {
  let splitString = string.toLowerCase().split(' ');
  for (let i = 0; i< splitString.length; i++) {
    if (splitString[i].length > 1) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1,splitString[i].length - 1) + splitString[i].charAt(splitString[i].length - 1).toUpperCase();
    } 
    else splitString[i] = splitString[i].charAt(0).toUpperCase();
  }
  return splitString.join(' ');
}

console.log(capitalizeFirstLast("I am the Answer"));
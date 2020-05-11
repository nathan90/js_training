//arrow functions
let array = [6, 7, 4, 5]
let squareArray = array.map((val)=>{  
  return val*val; 
})
console.log(squareArray)

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

let elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the `length` corresponds to the property we want to get whereas the
// obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
// to any valid variable name you want

//First declare the variable.
let elementLength;
elements.map(({ length: elementLength }) => elementLength); // [8, 6, 7, 9]
//console.log(elementLength)

// This destructuring parameter assignment can also be written as seen below. However, note that in
// this example we are not assigning `length` value to the made up property. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
 let length = elements.map(({ length }) => length); // [8, 6, 7, 9] 
//console.log(length)


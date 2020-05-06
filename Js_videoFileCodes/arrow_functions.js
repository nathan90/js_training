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
//Quadrants in which coordinates lie

const findQuadrants = (xCordinate, yCordinate) => {
    if (xCordinate === 0 && yCordinate === 0) {
        return "Origin";
    }
    else if (xCordinate >= 0 && yCordinate >= 0) {
        return "1st Quadrant";
    }
    else if (xCordinate <= 0 && yCordinate >= 0) {
        return "2nd Quadrant";
    }
    else if (xCordinate <= 0 && yCordinate <= 0) {
        return "3rd Quadrant";
    }
    else {
        return "4th Quadrant";
    }
}

//Calling the function
let xCordinate = 10;
let yCordinate = -10;

console.log(findQuadrants(xCordinate, yCordinate));
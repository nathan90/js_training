//Find Area of a circle

const circleArea = (radius) => {
    let area = Math.PI *radius*radius;
    return area;
}

//Call the function

console.log("Area of the circle: ", circleArea(10));
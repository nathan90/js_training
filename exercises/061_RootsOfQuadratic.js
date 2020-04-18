//Roots of a quadratic equation

quadraticRoots = (a, b, c) => {
    let discriminant = (b * b) - 4 * a * c;
    let rootCount = 0;
    if (discriminant < 0) {
        return {rootCount};
    } else if (discriminant === 0) {
        let root1 = (-b) / (2 * a);
        rootCount = 1;
        return {rootCount, root1}
    } else {
        rootCount = 2;
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return {rootCount, root1, root2};
    }
}

// Set the value of coefficients a, b , c in the function
var roots = quadraticRoots(1, 3, 10);
//var roots = quadraticRoots(1, -3, -10);

if (roots.rootCount === 0) {
    console.log("There are no real roots for the quadratic equation");
} else if (roots.rootCount === 1) {
    console.log("The only root for the quadratic equation is",roots.root1);
} else {
    console.log(`The roots for the quadratic equation are ${roots.root1} and ${roots.root2}`);
}
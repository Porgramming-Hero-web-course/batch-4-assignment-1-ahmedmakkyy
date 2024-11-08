"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return 3.14 * shape.radius ** 2;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    throw new Error("Unknown shape type");
}
// Output
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea); // Output: 24

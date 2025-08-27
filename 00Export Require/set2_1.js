let a = (x,y) => x + y;
let b = (x,y) => x * y;

module.exports = {  // You're assigning an object to module.exports.
                    // This object has two properties:
    sum : a,        //    1. sum: which is the function a
    mul : b         //    2. mul: which is the function b
}
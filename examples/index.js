var rect = require('./rectangle');

function solveRect(l,b) {
    console.log(`solving a rectangle with ${l} and ${b}`);
    rect(l,b,(err, rectangle) => {
        if(err){
            console.log("ERROR:", err.message);
        } else {
            console.log(`The area of rectangle with sides ${l} and ${b} is ${rectangle.area()}`);
            console.log(`The perimeter of rectangle with sides ${l} and ${b} is ${rectangle.perimeter()}`);
        }
    });
    console.log("this tatement is after the call rect()");
}

solveRect(2,4);
solveRect(0,5);
solveRect(2,0);
solveRect(-5,4);
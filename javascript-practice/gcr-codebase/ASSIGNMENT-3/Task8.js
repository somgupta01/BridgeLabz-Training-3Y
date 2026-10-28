"use strict";

console.log("Strict Mode Version:");

try {
    function strictDemo(a, a) {
        let total = 10;
        console.log(total);
    }

    strictDemo(5, 10);
} catch (error) {
    console.log(error.name + ":", error.message);
}

console.log("\nCorrect ES6 Version:");

function demo(a, b) {
    const total = a + b;
    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Total:", total);
}

demo(5, 10);

console.log("\nWithout strict mode, duplicate parameters are allowed in ordinary non-strict functions. Assigning to an undeclared variable may create an accidental global.");
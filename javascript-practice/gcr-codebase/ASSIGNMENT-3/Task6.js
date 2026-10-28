"use strict";

const input = Number(process.argv[2] || 5);
const limit = Number.isInteger(input) && input > 0 ? input : 5;

console.log("Pyramid Pattern:");

for (let i = 1; i <= limit; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}

console.log("\nPyramid using var:");

for (var i = 1; i <= limit; i++) {
    var row = "";

    for (var j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}

console.log("Final var values:", "i =", i, "j =", j);
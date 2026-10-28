"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, num => num * 2);
const squaredNumbers = applyOperation(numbers, num => num * num);

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Squared Numbers:", squaredNumbers);
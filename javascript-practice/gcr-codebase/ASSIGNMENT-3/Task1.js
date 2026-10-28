"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    const isValid = value !== null &&
        value !== undefined &&
        String(value).trim() !== "" &&
        Number.isFinite(numberValue);

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("Status: Valid number");
    } else {
        invalidNumbers.push(value);
        console.log("Status: Invalid number");
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

const results = [];

for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = Math.pow(num1, num2);
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot calculate real square root of a negative number");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(operation);
        }

        results.push({ operation, result });
        console.log(`${operation}: ${result}`);
    } catch (error) {
        results.push({ operation, error: error.message });
        console.log(`${operation}: ERROR - ${error.message}`);
    }
}

console.log("\nCalculator Summary:");
console.log(results);
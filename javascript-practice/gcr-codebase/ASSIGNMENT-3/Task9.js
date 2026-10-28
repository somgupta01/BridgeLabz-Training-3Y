"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const user = JSON.parse(rawData[i]);

        if (user.user === undefined || user.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(user.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        cleanData.push({
            user: user.user,
            age: age
        });

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ERROR - ${error.message}`);
    }
}

const under18 = cleanData.filter(user => user.age < 18);

console.log("\nClean Data:", cleanData);
console.log("Errors:", errors);
console.log("Users Under 18:", under18);
console.log("Valid Count:", cleanData.length);
console.log("Error Count:", errors.length);
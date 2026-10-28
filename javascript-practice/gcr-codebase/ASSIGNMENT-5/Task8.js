"use strict";

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (Object.prototype.hasOwnProperty.call(this, i)) {
            result[i] = callback(this[i], i, this);
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);
const squared = numbers.myMap(num => num * num);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);
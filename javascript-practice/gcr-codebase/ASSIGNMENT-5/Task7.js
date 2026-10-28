"use strict";

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const fiveTimes = makeMultiplier(5);

console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));
console.log("Five times 5:", fiveTimes(5));
"use strict";

function outer() {
    console.log("Outer count:", count);

    var count = 5;

    function inner() {
        console.log("Inner count:", count);
        var count = 10;
    }

    inner();

    console.log("Outer count after inner:", count);
}

outer();

console.log("\nArrow Function Version:");

function outerArrowExample() {
    console.log("Outer count:", count);

    var count = 5;

    const innerArrow = () => {
        console.log("Inner arrow count:", count);
        var count = 10;
        console.log("Inner arrow local count:", count);
    };

    innerArrow();

    console.log("Outer count after arrow:", count);
}

outerArrowExample();
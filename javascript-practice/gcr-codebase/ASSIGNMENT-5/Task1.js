"use strict";

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    console.log("Executing callback...");
    callback();
}

greetUser("Amit", showEndMessage);
"use strict";

const score = 50;

function announce() {
    console.log("Game started");
}

const status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

console.log("\nArrow Function Version");

const showScore = () => console.log(score);
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log(status);

showScore();
announceArrow();
startGameArrow();
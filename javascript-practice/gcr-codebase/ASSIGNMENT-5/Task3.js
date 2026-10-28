"use strict";

const user = {
    name: "Rahul",

    showName: () => {
        console.log("Arrow function name:", user.name);
        console.log("Arrow function this.name:", this.name);
    },

    showNameCorrect: function () {
        console.log("Normal function name:", this.name);
    }
};

user.showName();
user.showNameCorrect();
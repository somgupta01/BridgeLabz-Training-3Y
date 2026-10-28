"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Prototype Person:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Prototype Branch:", this.branch);
};

const student1 = new Student("Aman", "CSE");

student1.showName();
student1.showBranch();

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Class Person:", this.name);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Class Branch:", this.branch);
    }
}

const student2 = new StudentClass("Aman", "CSE");

student2.showName();
student2.showBranch();
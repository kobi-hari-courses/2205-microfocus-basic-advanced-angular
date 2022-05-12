"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    log() {
        console.log(`Person ${this.firstName} ${this.lastName}`);
    }
}
exports.Person = Person;

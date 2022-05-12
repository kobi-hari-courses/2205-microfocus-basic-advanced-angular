"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
let p1 = new person_1.Person("John", "Smith");
let p2 = new person_1.Person("Jane", "Smith");
p1.log();
p2.log();
p1.firstName = 'Jim';
p1.log();

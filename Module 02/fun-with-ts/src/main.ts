import { Person } from "./person";

let p1 = new Person("John", "Smith");
let p2 = new Person("Jane", "Smith");

p1.log();
p2.log();

p1.firstName = 'Jim';
p1.log();

export class Person {
  constructor(public firstName: string, public lastName: string) {}

  log() {
    console.log(`Person ${this.firstName} ${this.lastName}`);
  }
}

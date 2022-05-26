export class AdditionService {
    public readonly id: number;

    constructor() {
        this.id = Math.floor(Math.random() * 10000000);
        console.log(`a new AdditionService was created with the id: ${this.id}`);
    }
    add(op1: number, op2:number): number {
        console.log(`now performing addition of ${op1} and ${op2}`);
        return op1 + op2;
    }
}
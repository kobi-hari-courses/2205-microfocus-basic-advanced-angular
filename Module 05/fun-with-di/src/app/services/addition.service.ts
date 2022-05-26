import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService {
    public readonly id: number;

    constructor(
        private history: HistoryService

    ) {
        this.id = Math.floor(Math.random() * 10000000);
        this.history.audit(`a new AdditionService was created with the id: ${this.id}`);
    }
    add(op1: number, op2:number): number {
        this.history.audit(`addition service add: ${op1} and ${op2}`);
        return op1 + op2;
    }
}


// Stateless service
// Statefull service - A service that has a mutateable state
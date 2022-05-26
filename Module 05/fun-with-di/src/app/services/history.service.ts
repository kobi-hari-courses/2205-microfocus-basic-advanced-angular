import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    public readonly id: number;
    private history: string[] = [];

    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
        console.log('History Service was created with id = ' + this.id);
    }

    audit(txt: string) {
        this.history.push(txt);
        console.log(this.history);
    }

}
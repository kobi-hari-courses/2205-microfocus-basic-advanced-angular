import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: [AdditionService]
})
export class CalcComponent  {
  result: number = 0;

  constructor(public addition: AdditionService) {
  }

  add(n1: number, n2: number) {
    this.result = this.addition.add(n1, n2);
  }

}



// 4 Concepts of Dependency Injection
// 1. Consumer - CalcComponent
// 2. Request / Token - AdditionService
// 3. Injector - 
// 4. Provider

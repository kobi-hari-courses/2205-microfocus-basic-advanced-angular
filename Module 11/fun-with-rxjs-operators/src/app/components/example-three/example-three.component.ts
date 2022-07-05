import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, reduce, scan, Subject, withLatestFrom } from 'rxjs';
import { newPosition } from './helpers';
import { AllDirections, Direction } from './models/direction.model';
import { Position } from './models/position.model';
import { AllSteps, Step } from './models/step.model';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {
  directions = AllDirections;
  steps = AllSteps;

  selectedDirection$ = new BehaviorSubject<Direction>(this.directions[0]);
  nextStep$ = new Subject<Step>();

  nextPositionChange$ = this.nextStep$.pipe(
    withLatestFrom(this.selectedDirection$)
  );

  position$: Observable<Position> = this.nextPositionChange$.pipe(
    scan((pos, [step, direction]) => newPosition(pos, step, direction) , {x: 0, y: 0})
  );



  constructor() { }

  ngOnInit(): void {
  }

  // go() {
  //   let numbers = [1, 3, 10, 2, 18];
  //   let numbers$ = from(numbers);

  //   let sum$ = numbers$.pipe(
  //     scan((acc, item) => ({sum: acc.sum + item, count: acc.count + 1}) , {sum: 0, count: 0})
  //   )
  //   sum$.subscribe({next: val => console.log(val), complete: () => console.log('completed')});
    

  //   let sum = numbers.reduce((i, j) => i + j);
  //   let max = numbers.reduce((i, j) => i > j ? i : j)


  //   let foo = numbers.reduce((acc, item) => ({sum: acc.sum + item, count: acc.count + 1}) , {sum: 0, count: 0})

  //   // {sum: 0, count, 0}, 1 => {sum: 1, count: 1}
  //   // {sum: 1, count: 1}, 3 => {sum: 4, count: 2}
  //   // {sum: 4, count: 2}, 10 => {sum: 14, count : 3}
  //   // {sum: 14, count : 3}, 2 => {sum: 16, count : 4}, 
  //   // {sum: 16, count : 4}, 18 => {sum: 34, count: 5}


  // }

}

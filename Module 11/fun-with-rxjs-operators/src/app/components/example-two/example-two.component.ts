import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Subject,
  map,
  withLatestFrom,
} from 'rxjs';
import { AllManipulators, Manipulator } from './manipulator.model';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css'],
})
export class ExampleTwoComponent implements OnInit {
  words = ['hello', 'world', 'how', 'are', 'you'];

  manipulators = AllManipulators;

  selectedWord$ = new BehaviorSubject<string>(this.words[0]);
  selectedManipulator$ = new BehaviorSubject<Manipulator>(this.manipulators[0]);

  // result$: Observable<string> = combineLatest([this.selectedWord$, this.selectedManipulator$]).pipe(
  //   map(([word, manipulator]) => manipulator.action(word))
  // );

  result$: Observable<string> = this.selectedWord$.pipe(
    withLatestFrom(this.selectedManipulator$),
    map(([word, manipulator]) => manipulator.action(word))
  );

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { bufferCount, filter, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  userNumbers$ = new Subject<number>();
  buffered$ = this.userNumbers$.pipe(bufferCount(3));

  reductions$: Observable<number> = this.userNumbers$.pipe(
    bufferCount(2, 1), 
    map(pair => pair[1] - pair[0]), 
    filter(diff => diff < 0)
  );

  constructor() { }

  ngOnInit(): void {
  }

}


import { Injectable } from '@angular/core';
import { multicast, interval, map, take, Observable, timer, tap, Subject, BehaviorSubject, ReplaySubject, ConnectableObservable, refCount } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource$!: Observable<number>;


  constructor() { 
    const finiteCold$ = timer(5000).pipe(
      tap({
        next: val => console.log('next ' + val), 
        complete: () => console.log('complete'), 
        error: err => console.log('error ' + err)
      }),
      map(_ => 42), 
      );

    const interval$ = interval(3000).pipe(
      map(val => 10 + val), take(10), 
      tap({
        next: val => console.log('next ' + val), 
        complete: () => console.log('complete'), 
        error: err => console.log('error ' + err)
      }), 
      multicast(new ReplaySubject(3)
        
      //   () => {
      //   console.log('We are generating a new subject');
      //   return new ReplaySubject<number>(3);
      // }      
      ), 
      refCount()
      );

      this.dataSource$ = interval$;


  }

  getData(): Observable<number> {
    return this.dataSource$;
  }
}

/* The differences between ReplaySubject(1) and BehaviorSubject

1. Behavior subject sends an initial (fake) value, if we subscribe too early. before the source yielded any events
   Repaly subject doesnt
2. When completed, Behavior subject only sends "complete" without the latest value, if we subscribe too late.
   Replay subject, replays the latest value


*/


import { Injectable } from '@angular/core';
import { interval, Observable, tap, take, share, connect, Subject, connectable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  // demonstrating the new multicasting apis: 
  // connect, connectable, and the new share

  dataSource$!: Observable<number>;

  constructor() {
    const cold$ = interval(1000).pipe(
      take(7),
      tap({
        subscribe: () => console.log(`subscription started`), 
        unsubscribe: () => console.log(`subscription ended`), 
        next: val => console.log(`source emitted next ${val}`), 
        complete: () => console.log(`source emitted complete`), 
        finalize: () => console.log(`finalize`)
      }), 
    )

    // const hot$ = connectable(cold$, {
    //   connector: () => new ReplaySubject(3), 
    //   resetOnDisconnect: false,       
    // });
    // hot$.connect();

    const hot$ = cold$.pipe(
      share({
        connector: () => new ReplaySubject(3), 
        resetOnComplete: false, 
        resetOnRefCountZero: false      
      })
    )

    this.dataSource$ = hot$;
  }

  getData(): Observable<number> {
    return this.dataSource$;
  }
}
